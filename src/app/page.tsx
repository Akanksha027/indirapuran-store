// next
import dynamic from 'next/dynamic';

import Loading from '@/components/common/Loading';
const loading = () => <Loading />;

import HeroBanner from '@/components/sections/HeroBanner';
const LatestArticle = dynamic(() => import('@/components/sections/LatestArticle'), { loading });
const ShopByCategory = dynamic(() => import('@/components/sections/ShopByCategory'), { loading });
const AboutUs = dynamic(() => import('@/components/sections/AboutUs'), { loading });

export const runtime = 'edge';

const SITE_NAME = process.env.SITE_NAME || 'Riwaaz Indirapuram';

export const metadata = {
  description:
    'Riwaaz Indirapuram — garments for ladies, kids & gents. Visit our store in Indirapuram or order on WhatsApp.',
  keywords: [
    'riwaaz',
    'riwaaz indirapuram',
    'clothing',
    'ethnic wear',
    'ladies kids gents',
    'indirapuram',
    'garments store'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: SITE_NAME,
    siteName: SITE_NAME,
    description:
      'Garments for ladies, kids & gents. Store timing 11:00 AM to 9:30 PM · Tuesday closed.',
    images: {
      url: '/images/promotions/store.jpg',
      alt: 'Riwaaz Indirapuram storefront',
      width: 640,
      height: 640,
      type: 'image/jpeg',
      secureUrl: '/images/promotions/store.jpg'
    }
  }
};

export default async function HomePage() {
  return (
    <>
      <HeroBanner />
      <LatestArticle />
      <ShopByCategory />
      <AboutUs />
    </>
  );
}
