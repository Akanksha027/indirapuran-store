import Image from 'next/image';

const heroImages = [
  '/images/gallery/gallery-2.jpg',
  '/images/gallery/gallery-5.jpg',
  '/images/gallery/gallery-4.jpg'
];

const HeroBanner = () => {
  return (
    <section className="hero-paint relative overflow-hidden px-3 py-8 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-[0.95fr_1.15fr] items-center gap-2 sm:grid-cols-2 sm:gap-6 lg:gap-10">
        <div className="relative z-10 flex min-w-0 flex-col items-start text-left">
          <h2 className="font-playfair text-[clamp(22px,7vw,72px)] font-bold leading-[0.95] tracking-tight text-ink">
            WOMEN&apos;S
          </h2>
          <p className="mt-0.5 font-script text-[clamp(20px,5.5vw,58px)] leading-none text-ink/90">
            Collection
          </p>
          <p className="mt-3 max-w-md text-[8px] font-medium uppercase leading-relaxed tracking-[0.1em] text-ink/70 sm:mt-5 sm:text-[10px] md:mt-6 md:text-[12px] md:tracking-[0.14em]">
            Premium garments for ladies, kids &amp; gents — Riwaaz Indirapuram blends everyday ease
            with festive elegance for every occasion.
          </p>
          <a
            href="https://wa.me/918368681818"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-4 px-4 py-2 text-[11px] sm:mt-6 sm:px-8 sm:py-3 sm:text-[15px] md:mt-8"
          >
            ORDER NOW!
          </a>
        </div>

        <div className="flex items-center justify-end gap-1 sm:gap-1.5 md:gap-2">
          {heroImages.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[3/4] min-w-0 flex-1 overflow-hidden bg-blush shadow-[0_10px_28px_rgba(18,18,18,0.14)]"
              style={{
                clipPath: 'polygon(14% 0, 100% 0, 86% 100%, 0% 100%)'
              }}
            >
              <Image
                src={src}
                alt={`Riwaaz Indirapuram look ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 200px, 34vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 bottom-0 hidden h-40 w-40 rounded-full bg-gold/10 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-white/60 blur-2xl md:block" />
    </section>
  );
};

export default HeroBanner;
