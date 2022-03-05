import React, { FC } from 'react';

import Head from 'next/head';
import NavBar from '../NavBar';
import styles from './MainLayout.module.css'

const MainLayout:FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Fernando</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        {
          children
        }
      </main>
    </div>
  )
}

export default MainLayout;
