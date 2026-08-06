'use client';

// next
import Image from 'next/image';

// react-scroll-parallax
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Promotions = () => {
  return (
    <ParallaxProvider>
      <div className="relative h-[570px] overflow-hidden sm:h-screen">
        <h2 className="sr-only">Promotions</h2>
        <Parallax speed={-50} className="relative hidden h-full w-full sm:block">
          <Image
            src="/images/promotions/winter.jpg"
            alt="Riwaaz Indirapuram new arrivals"
            fill
            sizes="(min-width: 768px) 100vw, 867px"
            className="object-cover object-center"
          />
        </Parallax>
        <div className="relative block h-full w-full sm:hidden">
          <Image
            src="/images/promotions/winter.jpg"
            alt="Riwaaz Indirapuram new arrivals"
            fill
            sizes="(min-width: 768px) 100vw, 867px"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="absolute left-[5%] top-[50%] flex w-[85%] max-w-[610px] flex-col items-start justify-center gap-[16px] p-[16px] text-left -translate-y-1/2 md:gap-[24px] md:p-[32px]">
          <h3 className="font-lora text-[clamp(28px,16px_+_2vw,56px)] font-bold leading-[1.2] text-white drop-shadow-md">
            New arrivals
            <br />
            at Riwaaz
          </h3>
          <p className="max-w-[28ch] text-[clamp(16px,10px_+_2vw,24px)] font-medium text-lightPurple drop-shadow-md">
            Fresh ethnic &amp; everyday looks for ladies, kids &amp; gents — visit the store or order
            on WhatsApp.
          </p>
          <a
            className="btn text-[clamp(16px,8px_+_2vw,22px)]"
            href="https://wa.me/918368681818"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Promotions;
