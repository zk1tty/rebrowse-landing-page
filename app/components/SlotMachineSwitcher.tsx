'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SlotMachineSwitcherProps {
  className?: string;
}

export default function SlotMachineSwitcher({ className = "" }: SlotMachineSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    { type: 'text', content: 'ChatGPT' },
    { type: 'text', content: 'Claude' },
    // { type: 'image', src: '/images/chatgpt-logo.svg', alt: 'ChatGPT', width: 120, height: 30 },
    // { type: 'image', src: '/images/claude-logo.svg', alt: 'Claude', width: 100, height: 30 },
    { type: 'text', content: 'Cursor' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [items.length]);

  const currentItem = items[currentIndex];

  return (
    <span className={`inline-block transition-all duration-500 ease-in-out ${className}`}>
      {currentItem.type === 'text' ? (
        <span className="text-hero-accent">{currentItem.content}</span>
      ) : (
        <Image
          src={currentItem.src}
          alt={currentItem.alt}
          width={currentItem.width}
          height={currentItem.height}
          className="inline-block h-6 sm:h-8 md:h-10 w-auto align-bottom"
        />
      )}
    </span>
  );
}
