import{FC} from 'react';
import React from 'react';
import Head from "next/head";
import Navbar from "../Navbar";
import styles from './MainLayout.module.css'
import { Inter } from "next/font/google";

 
type Props = {
  children?: React.ReactNode
};


const inter = Inter({ subsets: ["latin"] });
const MainLayout:FC<Props> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Contact - Next App Jairo</title>
        <meta name="description" content="Contact Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
      <Navbar/>
            {children}
      </main>
    </div>
  );
}

export default MainLayout;
