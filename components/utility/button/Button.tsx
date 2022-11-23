import { ReactNode } from 'react';
import { cls } from '../../../lib/cln';

export interface IButton {
  children: ReactNode;
  color:
    | 'primay'
    | 'danger'
    | 'warning'
    | 'success'
    | 'Blue'
    | 'loading'
    | 'disabled';
  size: 'sm' | 'md' | 'lg' | 'xl';
  outline: boolean;
  type: 'button' | 'submit';
  isLoading: boolean;
  disabled: boolean;
}

const Button: React.FC<IButton> = ({
  children = 'Button',
  color = 'primay',
  outline = false,
  size = 'md',
  type = 'button',
  isLoading = false,
  disabled = false,
}) => {
  let cln = '';
  const btnSize = {
    sm: 'py-2 px-3',
    md: 'px-5 py-2.5',
    lg: 'py-3 px-5 ',
    xl: 'px-6 py-3.5',
  };
  switch (color) {
    case 'loading':
      cln = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
    focus:ring-blue-300 font-medium rounded-lg text-sm ${btnSize[size]}
    text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
    inline-flex items-center cursor-not-allowed`;
      break;
    case 'disabled':
      cln = `${btnSize[size]} mr-2 text-sm font-medium text-gray-900
         bg-white rounded-lg border border-gray-200 hover:bg-gray-100 
         hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none
          focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 
          dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
          dark:hover:bg-gray-700 inline-flex items-center cursor-not-allowed`;
      break;

    case 'primay':
      cln = `${cls(
        outline,
        `text-gray-900 hover:text-white border border-gray-800 
        hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 
        font-medium rounded-lg text-sm  ${btnSize[size]} text-center mr-2 mb-2 
        dark:border-gray-600 dark:text-gray-400 dark:hover:text-white 
        dark:hover:bg-gray-600 dark:focus:ring-gray-800  inline-flex items-center`,

        `text-white bg-gray-800  hover:bg-gray-900 focus:outline-none 
        focus:ring-4 focus:ring-gray-300 font-medium 
        rounded-lg text-sm ${btnSize[size]} mr-2 mb-2 dark:bg-gray-700 
        dark:hover:bg-gray-700 dark:focus:ring-gray-700 
        dark:hover:border-gray-600  inline-flex items-center`
      )} `;

      break;

    case 'danger':
      cln = `${cls(
        outline,
        `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 
    focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm ${btnSize[size]} 
    text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white 
    dark:hover:bg-red-600 dark:focus:ring-red-900  inline-flex items-center`,

        `focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 
      font-medium rounded-lg text-sm 
      ${btnSize[size]} mr-2 mb-2 dark:bg-red-600 
      dark:hover:bg-red-700 dark:focus:ring-red-900  inline-flex items-center`
      )} `;
      break;

    case 'success':
      cln = `${cls(
        outline,
        `text-green-700 hover:text-white border border-green-700 
      hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300
       font-medium rounded-lg text-sm ${btnSize[size]} text-center mr-2 mb-2 dark:border-green-500 
      dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800  inline-flex items-center`,

        `focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 
      focus:ring-green-300 font-medium rounded-lg text-sm ${btnSize[size]}
       mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800  inline-flex items-center`
      )} `;
      break;

    case 'warning':
      cln = `${cls(
        outline,
        `text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 
      focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm ${btnSize[size]}
       text-center mr-2 mb-2 dark:border-yellow-300 
      dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900  inline-flex items-center`,

        `focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 
        focus:ring-yellow-300
         font-medium rounded-lg text-sm ${btnSize[size]} mr-2 mb-2 dark:focus:ring-yellow-900  inline-flex items-center`
      )} `;
      break;

    case 'Blue':
      cln = `${cls(
        outline,
        `text-blue-700 hover:text-white border border-blue-700 
        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
        font-medium rounded-lg text-sm ${btnSize[size]} text-center mr-2 mb-2 dark:border-blue-500 
        dark:text-blue-500
         dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800  inline-flex items-center`,

        `text-white bg-blue-700 hover:bg-blue-800 
        focus:ring-4 focus:ring-blue-300 font-medium
         rounded-lg text-sm ${btnSize[size]} mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
         focus:outline-none dark:focus:ring-blue-800  inline-flex items-center`
      )} `;

      break;

    default:
      cln = `${cls(
        outline,
        `text-gray-900 hover:text-white border border-gray-800 
        hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 
        font-medium rounded-lg text-sm ${btnSize[size]} text-center mr-2 mb-2 
        dark:border-gray-600 dark:text-gray-400 dark:hover:text-white 
        dark:hover:bg-gray-600 dark:focus:ring-gray-800  inline-flex items-center`,

        `text-white bg-gray-800  hover:bg-gray-900 focus:outline-none 
        focus:ring-4 focus:ring-gray-300 font-medium 
        rounded-lg text-sm ${btnSize[size]} mr-2 mb-2 dark:bg-gray-700 
        dark:hover:bg-gray-700 dark:focus:ring-gray-700 
        dark:hover:border-gray-600  inline-flex items-center`
      )} `;
      break;
  }

  return (
    <button type={type} className={cln} disabled={disabled}>
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          // ariaHidden="true"
          className={`inline mr-3 w-4 h-4  animate-spin`}
          viewBox="0 0 100 101"
        >
          <path
            fill="currentColor"
            d="M100 50.59c0 27.615-22.386 50.001-50 50.001s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zm-90.919 0c0 22.6 18.32 40.92 40.919 40.92 22.599 0 40.919-18.32 40.919-40.92 0-22.598-18.32-40.918-40.919-40.918-22.599 0-40.919 18.32-40.919 40.919z"
          ></path>
          <path
            fill="currentColor"
            d="M93.968 39.04c2.425-.636 3.894-3.128 3.04-5.486A50 50 0 0041.735 1.279c-2.474.414-3.922 2.919-3.285 5.344.637 2.426 3.12 3.849 5.6 3.484a40.916 40.916 0 0144.131 25.769c.902 2.34 3.361 3.802 5.787 3.165z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
