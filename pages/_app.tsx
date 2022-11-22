import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ThemeProvider enableSystem attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
