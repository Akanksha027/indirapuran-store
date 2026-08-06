'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import products from '@/data/products.json';

const SkewProductCard = ({
  product
}: {
  product: (typeof products)[number];
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group mx-auto flex w-full max-w-[180px] flex-col items-center sm:max-w-[200px] md:max-w-[220px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full overflow-hidden"
      >
        <div className="product-skew relative mx-auto aspect-[3/4] w-full overflow-hidden bg-blush">
          <Image
            src={hovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.title}
            fill
            sizes="220px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="sr-only">{product.title}</h3>
      </Link>

      <p className="mt-3 text-center text-[14px] font-medium text-ink md:text-[15px]">
        {product.price}
      </p>
      <p className="mt-1 text-center text-[12px] leading-snug text-ink/70 md:text-[13px]">
        {product.title}
      </p>
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline mt-2 max-w-full text-[12px]"
      >
        Choose options
      </a>
    </article>
  );
};

const LatestArticle = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-jost text-[28px] font-semibold tracking-tight text-ink md:mb-12 md:text-[36px]">
          Latest Article
        </h2>

        <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-10 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <SkewProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/riwaazindirapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline max-w-[160px]"
          >
            View all
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
