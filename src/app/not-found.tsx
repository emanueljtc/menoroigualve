import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-primary-10">Page not found</h1>
      <Link href="/">Go home</Link>
    </div>
  );
};

export default notFound;

