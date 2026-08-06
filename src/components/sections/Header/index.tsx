import { getMenu } from '@/lib/shopify';

import Link from 'next/link';
import { Suspense } from 'react';

import Cart from '@/components/cart';
import OpenCart from '@/components/cart/open-cart';
import Logo from '@/components/layout/Logo';
import MobileMenu from './mobile-menu';
import SearchIcon from './SearchIcon';

const Header = async () => {
  const menu = await getMenu('main-menu');

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
      <h1 className="sr-only">Riwaaz Indirapuram</h1>
      <nav className="relative mx-auto flex h-[64px] max-w-6xl items-center justify-between px-4 md:h-[80px] md:px-6">
        <h2 className="sr-only">Main Navigation Menu</h2>

        <div className="flex w-[80px] items-center justify-start">
          <MobileMenu menu={menu} />
        </div>

        <Link
          href="/"
          title="Home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Logo size="sm" />
        </Link>

        <div className="flex w-[80px] items-center justify-end gap-1 md:gap-2">
          <SearchIcon />
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </nav>
    </header>
  );
};

export default Header;
