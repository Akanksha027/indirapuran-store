// next
import dynamic from 'next/dynamic';
import { ReactNode, Suspense } from 'react';

import Loading from '@/components/common/Loading';
const loading = () => <Loading />;

import AnnouncementBar from '@/components/sections/AnnouncementBar';
import Header from '@/components/sections/Header';
const Footer = dynamic(() => import('@/components/sections/Footer'), { loading });

import { ensureStartsWith } from '@/lib/utils';
import '@/styles/globals.css';
import { greatVibes, jost, playfair } from '@/fonts/fonts';

const SITE_NAME = process.env.SITE_NAME || 'Riwaaz Indirapuram';
const { TWITTER_CREATOR, TWITTER_SITE } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description:
    'Riwaaz Indirapuram — garments for ladies, kids & gents in Indirapuram. WhatsApp: 8368681818',
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
        images: '/images/promotions/store.jpg'
      }
    }),
  icons: { icon: '/favicon.png' }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${playfair.variable} ${greatVibes.variable} ${jost.className}`}
    >
      <body className="bg-white text-ink">
        <AnnouncementBar />
        <Header />
        <Suspense>
          <main>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
