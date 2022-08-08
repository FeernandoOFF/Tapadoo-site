import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export function Layout({ children, title = 'Test layout' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
}
