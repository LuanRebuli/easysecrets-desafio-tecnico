import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center h-20">
      <Image src="/easysecrets.logo" alt="Logo" width={200} height={70} />
    </div>
  );
};

export default Header;
