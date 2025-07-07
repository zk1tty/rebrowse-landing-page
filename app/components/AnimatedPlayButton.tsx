'use client'
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Key } from "lucide-react";

export default function AnimatedPlayButton() {
  const [rotation, setRotation] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [30, -30]);
  const rotateY = useTransform(mouseX, [-100, 100], [-30, 30]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setRotation(prev => prev + e.deltaY * 0.5);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <a href="https://app.rebrowse.me" target="_blank" rel="noopener noreferrer">
      <motion.div
        className="relative w-32 h-32 cursor-pointer"
        style={{
          perspective: 1000,
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          mouseX.set(e.clientX - centerX);
          mouseY.set(e.clientY - centerY);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <motion.div
          className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg"
          style={{
            rotateX,
            rotateY,
            rotate: rotation,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/30 to-purple-500/30 blur-xl" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Key className="w-10 h-10 mb-1" />
            <span className="text-sm font-medium">Early access</span>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
} 