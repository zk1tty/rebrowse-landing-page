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
    <section aria-labelledby="users-voices" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
      <h2
        id="users-voices"
        className="mx-auto text-center font-['Times_New_Roman',_Times,_serif] font-bold tracking-tight leading-tight text-stone-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Users' voices
      </h2>
      <div className="mx-auto mt-3 h-px w-24 bg-stone-800/80" />

      <figure className="mx-auto mt-8 w-full max-w-4xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] cursor-pointer"
          onClick={() => setIndex((prev) => (prev + 1) % SLIDES.length)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIndex((prev) => (prev + 1) % SLIDES.length); } }}
          aria-label="Next testimonial"
        >
          <div className="relative aspect-video sm:pt-[60%] md:pt-[42.857%]">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
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
            <div className="card-surface p-6 sm:p-8 text-center flex flex-col items-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.developmentTime}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">creation</div>
            </div>
            <div className="card-surface p-6 sm:p-8 text-center flex flex-col items-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.concurrency}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">{stats.concurrencyLabel}</div>
            </div>
            <div className="card-surface p-6 sm:p-8 text-center flex flex-col items-center">
              <div className="text-purple-400 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-none">{stats.accuracy}</div>
              <div className="mt-2 text-stone-300 text-xs sm:text-sm whitespace-nowrap">success</div>
            </div>
          </div>
        </figure>
      </section>
  );
};

export default AngelUsers;


