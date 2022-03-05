import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode; // o ReactElement JSX.Element ó ReactNode;  
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

// ?Component: componente que se quiere renderizar
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ( (page) => page);

  // return <Component {...pageProps} />
  return getLayout( <Component {...pageProps} />);
}

export default MyApp