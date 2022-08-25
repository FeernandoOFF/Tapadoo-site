import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export function Layout({ children, title = 'Test layout' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="min-h-[70vh] relative">{children}</main>
      <Footer />
    </>
  );
}
