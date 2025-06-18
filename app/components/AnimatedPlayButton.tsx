'use client'
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import VideoModal from "./VideoModal";

export default function AnimatedPlayButton() {
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <motion.div
        className="relative w-32 h-32 cursor-pointer"
        style={{
          perspective: 1000,
        }}
        onClick={toggleModal}
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
            <svg
              className="w-10 h-10 mb-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Demo</span>
          </div>
        </motion.div>
      </motion.div>

      <VideoModal isOpen={isModalOpen} onClose={toggleModal} videoSrc="/videos/demo-grok-post.mp4" />
    </>
  );
} 