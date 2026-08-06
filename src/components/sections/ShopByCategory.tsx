'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import categories from '@/data/categories.json';

const ShopByCategory = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 240, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-black/5 bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-jost text-[28px] font-semibold tracking-tight text-ink md:text-[36px]">
            Shop By Category
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll categories left"
              onClick={() => scrollBy(-1)}
              className="flex h-9 w-9 items-center justify-center border border-ink/20 text-lg transition hover:border-ink"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Scroll categories right"
              onClick={() => scrollBy(1)}
              className="flex h-9 w-9 items-center justify-center border border-ink/20 text-lg transition hover:border-ink"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.url}
              className="group relative w-[160px] shrink-0 snap-start sm:w-[200px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-full bg-blush">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="200px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <p className="mt-3 text-center text-[14px] font-medium text-ink">{cat.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
