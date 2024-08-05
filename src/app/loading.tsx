import React from 'react';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center min-w-156">
      <h1 className="text-3xl text-primary-10">
        Cargando <span className="text-primary-30">...</span>
      </h1>
    </div>
  );
}

