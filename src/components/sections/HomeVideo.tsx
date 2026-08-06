// next
import Image from 'next/image';

// components
import Logo from '@/components/layout/Logo';

const HomeVideo = () => {
  return (
    <div className="relative h-[470px] overflow-hidden md:h-[calc(100vh_-_80px)]">
      <Image
        src="/images/promotions/store.jpg"
        alt="Riwaaz Indirapuram storefront — ladies, kids & gents"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 px-6 pb-10 text-center md:items-end md:pb-14 md:pr-12 md:text-right">
        <Logo size="lg" theme="light" />
        <p className="max-w-[28ch] font-quicksand text-[clamp(15px,12px_+_1vw,20px)] font-medium text-white/90 md:max-w-[36ch]">
          Garments for ladies, kids &amp; gents · Indirapuram
        </p>
      </div>
    </div>
  );
};

export default HomeVideo;
