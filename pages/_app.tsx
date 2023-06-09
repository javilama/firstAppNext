import { type } from 'os';
import '../styles/globals.css'
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout = NextPage & {
  getLayout?:(page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}


export default function App({ Component, pageProps }:AppPropsWithLayout) {


const getLayout = Component.getLayout || (page=> page);

  return getLayout(<Component {...pageProps} />)
}
