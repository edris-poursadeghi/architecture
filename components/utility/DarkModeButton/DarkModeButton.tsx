import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export interface IDarkModeButton {
  onClick: () => void;
  status?: 'dark' | 'light';
  size?: 'small' | 'medium' | 'large';
}

const DarkModeButton: React.FC<IDarkModeButton> = ({
  status = 'dark',
  size,
  ...props
}) => {
  // const { setTheme, theme } = useTheme();

  // const [mounted, setMounted] = useState(false);

  /*   useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; */

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  // console.log(status, { ...props }, theme);//

  return (
    <div
      className={` w-10 h-10 rounded-full ${
        status !== 'dark'
          ? 'bg-primary-20 bg-opacity-20 text-primary-20 hover:text-secondary-10 hover:bg-secondary-90 transition-colors duration-200 '
          : 'bg-primary-40  text-primary-99 hover:bg-secondary-30 hover:text-secondary-90 transition-colors duration-200'
      } flex justify-center items-center `}
      {...props}
    >
      {status === 'dark' ? (
        <SunIcon className="h-5" />
      ) : (
        <MoonIcon className="h-5" />
      )}
    </div>
  );
};

export default DarkModeButton;
