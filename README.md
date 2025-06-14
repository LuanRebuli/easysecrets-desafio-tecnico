# Desafio técnico - Easysecrets

## 🛠️ Tecnologias Utilizadas

### Core

- **Next.js 15.3.3** - Framework React com SSR/SSG
- **React 18.3.1** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript

### UI/UX

- **Tailwind CSS 4.1.10** - Framework CSS utilitário
- **Recharts 2.15.3** - Biblioteca de gráficos para React
- **Lucide React 0.515.0** - Ícones modernos e customizáveis
- **React Spring 10.0.1** - Animações fluidas e performáticas

### Desenvolvimento

- **ESLint 9.29.0** - Linter para código JavaScript/TypeScript
- **Prettier 3.5.3** - Formatador de código
- **PostCSS 8.5.5** - Processador CSS

## 📁 Estrutura do Projeto

```
easysecrets-desafio-tecnico/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Componente de cabeçalho
│   │   │   └── SalesChart.tsx      # Componente principal do gráfico
│   │   ├── globals.css             # Estilos globais e Tailwind
│   │   ├── layout.tsx              # Layout principal da aplicação
│   │   └── page.tsx                # Página inicial
│   └── data/
│       └── salesData.json          # Dados de vendas
├── public/                         # Arquivos estáticos
├── docs/                          # Documentação e imagens
├── package.json                   # Dependências e scripts
├── tailwind.config.ts            # Configuração do Tailwind
├── tsconfig.json                 # Configuração do TypeScript
└── README.md                     # Este arquivo
```

## 🎯 Decisões Técnicas

### 1. Escolha das Bibliotecas

#### **Next.js 15**

- **Motivo**: Framework moderno com App Router, otimizações automáticas e excelente DX
- **Benefícios**: SSR, roteamento automático, otimização de imagens, TypeScript nativo

#### **Recharts**

- **Motivo**: Biblioteca de gráficos declarativa e composável, construída especificamente para React
- **Benefícios**: API simples, customização flexível, responsive por padrão, boa performance

#### **Tailwind CSS v4**

- **Motivo**: Framework utility-first que acelera o desenvolvimento e garante consistência visual
- **Benefícios**: Classes utilitárias, purge automático, design system integrado, responsividade simplificada

#### **React Spring**

- **Motivo**: Biblioteca de animações baseada em física, mais performática que CSS transitions
- **Benefícios**: Animações fluidas, controle granular, hooks intuitivos

#### **Lucide React**

- **Motivo**: Conjunto de ícones moderno, leve e customizável
- **Benefícios**: Tree-shaking, SVG otimizado, API consistente

### 2. Arquitetura e Estrutura

#### **App Router (Next.js 13+)**

- Utiliza a nova estrutura de roteamento do Next.js
- Componentes Server/Client claramente separados
- Melhor performance e SEO

#### **Componentização**

- `SalesChart`: Componente principal com lógica de negócio
- `Header`: Componente reutilizável para cabeçalho
- Separação clara de responsabilidades

#### **Gerenciamento de Estado**

- useState para estado local dos componentes
- Dados estáticos em JSON para simplicidade
- Estado do tema (dark/light) gerenciado localmente

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/LuanRebuli/easysecrets-desafio-tecnico.git
cd easysecrets-desafio-tecnico
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Execute em modo de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**

```
http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run start    # Executa build de produção
npm run lint     # Executa linter
```

## 🎨 Diferenciais Implementados

### 1. **Toggle de Tema Animado**

- Switch customizado com animações suaves
- Persistência visual durante navegação
- Ícones animados (Sol/Lua) com rotação

### 2. **Tooltips Interativos**

- Design customizado com backdrop blur
- Informações detalhadas de cada produto
- Cálculo automático de totais
- Emojis para melhor UX

### 3. **Responsividade Avançada**

- Layout completamente adaptável
- Tooltips otimizados para mobile
- Gráfico com altura dinâmica
- Textos e espaçamentos responsivos

### 4. **Animações e Micro-interações**

- Entrada suave dos componentes
- Hover effects nas barras do gráfico
- Transições de tema fluidas

## 📝 Licença

Este projeto foi desenvolvido como parte de um desafio técnico para a **Easysecrets**.

## 👨‍💻 Desenvolvedor

**Luan Rebuli**
