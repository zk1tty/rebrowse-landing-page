'use client'
import { useEffect, useState } from 'react';

interface SlotMachineSwitcherProps {
  className?: string;
}

export default function SlotMachineSwitcher({ className = "" }: SlotMachineSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    'ChatGPT',
    'Claude',
    'Cursor',
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
      <span className="text-hero-accent">{currentItem}</span>
    </span>
  );
}
