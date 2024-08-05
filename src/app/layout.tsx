import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Header } from './components';
import Script from 'next/script';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'People Test',
  description: 'Next JS People Test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="../path/to/flowbite/dist/flowbite.min.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${lato.className} bg-primary-5`}>
        <Header title="Personas" />
        <main>{children}</main>
      </body>
    </html>
  );
}

