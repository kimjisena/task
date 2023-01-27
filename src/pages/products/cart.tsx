'use client';

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import getResult from '@/utils';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import MainLayout, {type Product} from '@/components/layout/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [result, setResult] = useState<null | Array<Product>>(null);

  useEffect(() => {
    if (!result) {
      getResult()
        .then( res => {
          setResult(res);
          console.log(res);
      });
    }
  }, [result]);

  return (
    <>
      <Head>
        <title>Dooka</title>
        <meta name="description" content="Buy amazing products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout page='cart' res={null} />
    </>
  )
}
