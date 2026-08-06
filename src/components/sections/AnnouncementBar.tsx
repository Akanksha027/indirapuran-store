'use client';

import { useEffect, useState } from 'react';

const messages = [
  '20% off limited time offer — visit Riwaaz Indirapuram',
  'Free store pickup · WhatsApp orders: 8368681818',
  'Open 11:00 AM – 9:30 PM · Tuesday closed'
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 border-b border-black/10 bg-white px-4 py-2.5 text-center text-[12px] tracking-wide text-ink md:text-[13px]">
      <button
        type="button"
        aria-label="Previous announcement"
        className="hidden text-ink/50 transition hover:text-ink sm:block"
        onClick={() => setIndex((i) => (i - 1 + messages.length) % messages.length)}
      >
        ‹
      </button>
      <p key={index} className="animate-fadeIn min-h-[1.25rem]">
        {messages[index]}
      </p>
      <button
        type="button"
        aria-label="Next announcement"
        className="hidden text-ink/50 transition hover:text-ink sm:block"
        onClick={() => setIndex((i) => (i + 1) % messages.length)}
      >
        ›
      </button>
    </div>
  );
};

export default AnnouncementBar;
