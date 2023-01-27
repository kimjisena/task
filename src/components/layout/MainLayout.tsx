'use client';

import Head from 'next/head';
import { Inter } from '@next/font/google';
import getResult from '@/utils';
import { useState, useEffect, ReactNode } from 'react';
import { BsCart } from 'react-icons/bs';
import { useRouter } from 'next/router';
import ProductView from '../Product';
import Home from '../Home';
import Cart from '../Cart';

const inter = Inter({ subsets: ['latin'] });

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}

export default function MainLayout({page, res }: { page: string, res: any}) {
  const [result, setResult] = useState<null | Array<Product>>(null);
  const router = useRouter();

  const addToCart = (product: Product) => {
    if (!result) {
        setResult([product]);
    } else {
        setResult([...result, product])
    }
  }

  const removeFromCart = (product: Product) => {
    if (result) {
      setResult(
        result.filter(item => item.id !== product.id)
      );
    }
  }

  return (
    <>
      <Head>
        <title>Dooka</title>
        <meta name="description" content="Buy amazing products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`bg-primary w-[100vw] flex flex-col items-center justify-center ${inter.className}`}>
        <header className="bg-primary fixed top-0 flex flex-row justify-end items-center w-full p-4 border-b">
            <button onClick={() => router.push('products/cart')}
                className='bg-secondary mr-6 p-2 flex flex-row justify-between items-center rounded-md'>
                <h1 className='m-1'>Added to Cart: {!result ? 0 : result.length}</h1>
                <BsCart size={24} className='ml-2' />
            </button>
        </header>
        {
          page === 'home' ? <Home result={res} /> : 
          page === 'product-view' ? <ProductView result={res} addToCart={addToCart} /> :
          <Cart result={result} removeFromCart={removeFromCart} />
        }
      </main>
    </>
  )
}
