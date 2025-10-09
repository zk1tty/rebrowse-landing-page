'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const SLIDES = [
  // Reuse existing local images to avoid broken links
  { src: '/images/angel-users/JP.png', alt: 'Data Centre Operator' },
  { src: '/images/angel-users/Aidan.png', alt: 'UGC platform for TikTok' },
];

const STATS = [
  // Stats mapped 1:1 with SLIDES order
  {
    developmentTime: '1 min',
    concurrency: '10k',
    concurrencyLabel: 'servers/week',
    accuracy: '95%',
  },
  {
    developmentTime: '1 min',
    concurrency: '300',
    concurrencyLabel: 'accounts/day',
    accuracy: '90%',
  },
];

const AngelUsers: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];
  const stats = STATS[index] ?? STATS[0];

  return (
    <div className="mx-auto px-4">
      <h2 className="sm:w-auto mx-auto text-center text-4xl font-bold mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8 font-['Times_New_Roman',_Times,_serif]">
        Users' voices
      </h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="relative w-4/5 mx-auto overflow-hidden rounded-2xl">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover transition-opacity duration-500"
              priority
            />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {SLIDES.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-purple-400' : 'bg-stone-700'}`}
              />
            ))}
          </div>
          {/* Stats cards (mapped to current user) */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.developmentTime}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">creation</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.concurrency}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">{stats.concurrencyLabel}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.accuracy}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngelUsers;


