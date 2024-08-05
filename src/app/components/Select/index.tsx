import React from 'react';

const Select = ({
  label,
  setValue,
  children = null,
  widthSelect = 'w-3/5',
}: {
  label: string;
  setValue: any;
  children?: React.ReactNode;
  widthSelect?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <label
        className="text-sm text-primary-10 font-medium tracking-wider"
        htmlFor={label}
      >
        {label}:
      </label>
      <select
        id={label}
        className={`${widthSelect} ${
          label === 'Nacionalidad' ? 'selectCountry' : ''
        } bg-white border border-gray-10 text-gray-900 text-sm rounded-lg focus:bg-white focus:border-primary-30 focus:ring-primary-15 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        onChange={(e) => setValue(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;

