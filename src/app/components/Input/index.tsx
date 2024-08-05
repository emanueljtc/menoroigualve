import React from 'react';

/**
 * Input component represents an input field with a label.
 *
 * @param {object} props - The props object.
 * @param {string} props.label - The label for the input field.
 * @param {function} props.setValue - The function to set the value of the input field.
 * @param {string} [props.widthInput='w-20'] - The width of the input field.
 * @param {string} props.placeHolder - The placeholder text for the input field.
 * @returns {JSX.Element} The Input component.
 */
const Input = ({
  label,
  setValue,
  widthInput = 'w-20',
  placeHolder,
}: {
  label: string;
  setValue: any;
  widthInput?: string;
  placeHolder: string;
}): JSX.Element => {
  // Render the Input component
  return (
    <div className={`${widthInput} flex flex-col gap-2 mb-6`}>
      {/* Label for the input field */}
      <label
        className="text-sm text-primary-10 font-medium tracking-wider"
        htmlFor={label}
      >
        {label}:
      </label>
      {/* Input field */}
      <input
        type="email"
        id={label}
        onChange={(e) => setValue(e.target.value)}
        className={` bg-white border border-gray-10 text-gray-30 text-sm rounded-lg focus:border-primary-30 focus:ring-primary-15 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeHolder}
        required
      />
    </div>
  );
};

export default Input;







