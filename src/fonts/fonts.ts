import localFont from 'next/font/local';

export const jost = localFont({
  src: [
    { path: '../../public/fonts/Jost-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Jost-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Jost-SemiBold.woff2', weight: '600', style: 'normal' }
  ],
  variable: '--font-jost',
  display: 'swap'
});

export const playfair = localFont({
  src: [
    { path: '../../public/fonts/PlayfairDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/PlayfairDisplay-Bold.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-playfair',
  display: 'swap'
});

export const greatVibes = localFont({
  src: [{ path: '../../public/fonts/GreatVibes-Regular.woff2', weight: '400', style: 'normal' }],
  variable: '--font-script',
  display: 'swap'
});

export const lora = playfair;
export const quicksand = jost;
