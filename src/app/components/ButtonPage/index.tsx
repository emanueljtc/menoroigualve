import React, { Dispatch, SetStateAction } from 'react';

/**
 * ButtonPage component is a button used for navigating to the previous or next page.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.type - The type of the button, either 'previous' or 'next'.
 * @param {number} props.page - The current page number.
 * @param {function} props.setPage - The function to update the page number.
 * @returns {JSX.Element} - The ButtonPage component.
 */
const ButtonPage = ({
  type,
  page,
  setPage,
}: {
  type: 'previous' | 'next';
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}): JSX.Element => {
  return (
    <button
      // Disable the button if going to the previous page on the first page
      disabled={type === 'previous' && page <= 1}
      // Update the page number when the button is clicked
      onClick={() => {
        if (type === 'previous') {
          setPage(page - 1);
        } else {
          setPage(page + 1);
        }
      }}
      className="flex justify-center items-center bg-transparent text-black hover:text-primary-15 font-normal text-sm py-2 px-4 rounded-lg"
    >
      {type === 'previous' && (
        <svg
          className="w-3 h-3 text-gray-800 hover:text-primary-15 dark:text-white mr-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          {/* SVG path for the previous button */}
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      )}
      {/* Display "Anterior" for the previous button */}
      {type === 'previous' ? 'Anterior' : 'Siguiente'}
      {type === 'next' && (
        <svg
          className="w-3 h-3 text-gray-800 hover:text-primary-15 dark:text-white ml-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          {/* SVG path for the next button */}
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      )}
    </button>
  );
};

export default ButtonPage;

