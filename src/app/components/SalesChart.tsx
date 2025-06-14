'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useSpring, animated } from '@react-spring/web';
import { Moon, Sun } from 'lucide-react';
import salesData from '@/data/salesData.json';

interface ChartData {
  mes: string;
  Refrigerante: number;
  Suco: number;
  Salgadinho: number;
}

const transformData = (data: typeof salesData): ChartData[] => {
  return data[0].vendas.map((_, index) => {
    const month = data[0].vendas[index].mes;
    return {
      mes: month,
      Refrigerante: data[0].vendas[index].quantidade,
      Suco: data[1].vendas[index].quantidade,
      Salgadinho: data[2].vendas[index].quantidade,
    };
  });
};

const SalesChart = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const transformedData = transformData(salesData);
    setData(transformedData);
  }, []);

  const cardAnimation = useSpring({
    from: { scale: 0.95 },
    to: { scale: 1 },
    config: { tension: 300, friction: 10 },
  });

  const toggleAnimation = useSpring({
    transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 30 },
  });

  const colors = {
    Refrigerante: isDarkMode ? '#818cf8' : '#6366f1',
    Suco: isDarkMode ? '#34d399' : '#10b981',
    Salgadinho: isDarkMode ? '#fbbf24' : '#f59e0b',
  };

  const productEmojis = {
    Refrigerante: '🥤',
    Suco: '🧃',
    Salgadinho: '🍿',
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl border-0 backdrop-blur-md ring-1 max-w-[280px] sm:max-w-none ${
            isDarkMode
              ? 'bg-gray-800/95 ring-gray-600/50 text-white'
              : 'bg-white/95 ring-gray-200/50 text-gray-800'
          }`}
        >
          <div className="mb-2 sm:mb-3">
            <h3
              className={`font-bold text-sm sm:text-base ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              📅 {label}
            </h3>
            <div
              className={`w-full h-px bg-gradient-to-r mt-1 ${
                isDarkMode
                  ? 'from-gray-600 to-transparent'
                  : 'from-gray-200 to-transparent'
              }`}
            ></div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {payload.map((entry: any, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 sm:gap-4 min-w-[160px] sm:min-w-[200px]"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg">
                    {productEmojis[entry.dataKey as keyof typeof productEmojis]}
                  </span>
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full ring-1 sm:ring-2 ring-white shadow-sm"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span
                    className="font-medium text-xs sm:text-sm truncate"
                    style={{ color: entry.color }}
                  >
                    {entry.dataKey}
                  </span>
                </div>
                <span
                  className={`font-bold text-xs sm:text-sm ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {entry.value}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`mt-3 sm:mt-4 pt-2 sm:pt-3 border-t ${
              isDarkMode ? 'border-gray-600' : 'border-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-semibold text-xs sm:text-sm flex items-center gap-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                📊 Total
              </span>
              <span className="font-bold text-indigo-500 text-xs sm:text-sm">
                {payload.reduce(
                  (sum: number, item: any) => sum + item.value,
                  0
                )}
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 transition-all duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <div className="absolute top-6 right-4 z-10">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600'
              : 'bg-gradient-to-r from-yellow-400 to-orange-500'
          }`}
        >
          <animated.div
            style={toggleAnimation}
            className={`absolute w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
              isDarkMode
                ? 'bg-gray-800 translate-x-4'
                : 'bg-white -translate-x-4'
            }`}
          >
            {isDarkMode ? (
              <Moon className="w-3 h-3 text-indigo-400" />
            ) : (
              <Sun className="w-3 h-3 text-orange-500" />
            )}
          </animated.div>

          <div className="absolute left-2">
            <Sun
              className={`w-4 h-4 transition-opacity duration-300 ${
                isDarkMode ? 'opacity-30 text-gray-300' : 'opacity-0'
              }`}
            />
          </div>
          <div className="absolute right-2">
            <Moon
              className={`w-4 h-4 transition-opacity duration-300 ${
                isDarkMode ? 'opacity-0' : 'opacity-30 text-gray-600'
              }`}
            />
          </div>
        </button>
      </div>

      <animated.div
        style={cardAnimation}
        className={`w-full max-w-4xl p-8 rounded-2xl shadow-2xl backdrop-blur-sm border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800/70 border-gray-600/50'
            : 'bg-white/70 border-gray-200'
        }`}
      >
        <div className="mb-4 sm:mb-6 text-center">
          <h1
            className={`text-2xl sm:text-3xl font-bold flex items-center justify-center gap-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            📊 Dashboard de Vendas
          </h1>
          <p
            className={`text-xs sm:text-sm mt-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            🎯 Análise de performance por produto
          </p>
        </div>

        <div className="h-[300px] sm:h-[400px] lg:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 40,
              }}
              barCategoryGap="15%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                opacity={0.7}
              />
              <XAxis
                dataKey="mes"
                stroke={isDarkMode ? '#d1d5db' : '#374151'}
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
                interval={0}
                angle={0}
                textAnchor="middle"
                height={30}
              />
              <YAxis
                stroke={isDarkMode ? '#d1d5db' : '#374151'}
                fontSize={12}
                fontWeight={500}
                tickLine={false}
                axisLine={false}
                width={40}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
                offset={10}
                position={{ y: 0 }}
                allowEscapeViewBox={{ x: false, y: true }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: isDarkMode ? '#d1d5db' : '#374151',
                }}
              />

              {Object.entries(colors).map(([product, color]) => (
                <Bar
                  key={product}
                  dataKey={product}
                  fill={color}
                  radius={[4, 4, 0, 0]}
                  className="drop-shadow-sm"
                  onMouseEnter={() => setHoveredBar(product)}
                  onMouseLeave={() => setHoveredBar(null)}
                  opacity={hoveredBar && hoveredBar !== product ? 0.6 : 1}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </animated.div>
    </div>
  );
};

export default SalesChart;
