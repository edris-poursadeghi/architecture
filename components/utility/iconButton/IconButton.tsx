import { cls } from '../../../lib/cln';
export interface IIconButton {
  shape: 'circle' | 'squer';
  outline: boolean;
  children: JSX.Element;
}

const IconButton: React.FC<IIconButton> = ({
  shape = 'squer',
  outline = true,
  children,
}) => {
  switch (shape) {
    case 'squer':
      return (
        <button
          type="button"
          className={` ${cls(
            outline,
            `text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white
           focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 
           text-center inline-flex items-center mr-2
           dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800`,

            `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
            font-medium rounded-lg text-sm p-2.5 text-center 
           inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700
            dark:focus:ring-blue-800`
          )}
              
              `}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          type="button"
          className={` ${cls(
            outline,
            `focus:outline-none focus:ring-blue-300 font-medium
          rounded-full text-sm p-2.5 text-center inline-flex 
        items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700
         dark:focus:ring-blue-800`,

            `text-blue-700 border border-blue-700 hover:bg-blue-700
             hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
             font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center
              dark:border-blue-500
             dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800`
          )}
            
            `}
        >
          {children}
        </button>
      );
  }
};

export default IconButton;
