import React from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });
const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex flex-col items-center justify-between bg-primary-80 p-2.5">
      <h1 className={`${nunito.className} text-45 leading-extra-loose`}>
        {title}
      </h1>
    </header>
  );
};

export default Header;

