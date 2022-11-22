import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Button from '../components/utility/DarkModeButton/DarkModeButton';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  console.log(theme, systemTheme, currentTheme);

  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      {/*  <CatCard {...mockCatCardProps.base} /> */}
      <Image
        src="/google.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>

      <Button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        status={currentTheme === 'dark' ? 'dark' : 'light'}
      />
      {/*   <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-7xl font-bold text-center">
            {currentTheme === 'dark' ? 'Dark' : 'Light'}{' '}
            <span className="text-purple-600">Mode</span>
          </h1>
          <p className="dark:text-purple-600 my-8 text-center">
            Click the button below to switch mode
          </p>
          <div className="flex justify-center">
            {currentTheme === 'dark' ? (
              <button
                className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
                onClick={() => setTheme('light')}
              >
                {' '}
                <Image src="/sun.svg" alt="logo" height="50px" width="50px" />
              </button>
            ) : (
              <button
                className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                onClick={() => setTheme('dark')}
              >
                <Image src="/moon.svg" alt="logo" height="50px" width="50px" />
              </button>
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {/*   <SidebarLayout /> */}
      {page}
    </PrimaryLayout>
  );
};
