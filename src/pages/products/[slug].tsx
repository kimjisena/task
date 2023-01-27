'use client';

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import getResult from '@/utils';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductDetails from '@/components/ProductDetails';
import MainLayout, {type Product} from '@/components/layout/MainLayout';
import ProductView from '@/components/Product';

import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });


export default function Product () {
  const [result, setResult] = useState<null | Product>(null);
  const query = useRouter().query;

  useEffect(() => {
    if (!result) {
      getResult(Number(query.slug))
        .then( res => {
          setResult(res);
          console.log(res);
      });
    }
  }, [result]);

  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Buy amazing products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout page={'product-view'} res={result} />
    </>
  )
}
