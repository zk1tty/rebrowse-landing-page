'use client'
import { useEffect, useRef, useState } from 'react';
import VideoModal from './VideoModal';

interface AutoPlayVideoSectionProps {
  videoSrc: string;
  title?: string;
  description?: string;
  bottomText?: string;
}

export default function AutoPlayVideoSection({ 
  videoSrc, 
  title = "Watch Demo", 
  description = "See how it works in action",
  bottomText = ""
}: AutoPlayVideoSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            // Auto-play preview video when section comes into view
            if (videoPreviewRef.current) {
              videoPreviewRef.current.play().catch(() => {
                // Fallback if autoplay is blocked
                console.log('Autoplay blocked');
              });
            }
            
            // Auto-open full-screen video after a short delay
            setTimeout(() => {
              if (!hasTriggered) {
                setIsVideoModalOpen(true);
                setHasTriggered(true);
              }
            }, 1000); // 1 second delay
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Start trigger 100px before element enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasTriggered]);

  const handleManualPlay = () => {
    setIsVideoModalOpen(true);
    setHasTriggered(true);
  };

  return (
    <>
      <div 
        ref={sectionRef}
        className="relative w-full max-w-4xl mx-auto mb-16 px-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400">
            {description}
          </p>
        </div>

        <div 
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 cursor-pointer group"
          onClick={handleManualPlay}
        >
          {/* Video Preview */}
          <div className="relative aspect-video">
            <video
              ref={videoPreviewRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Play Button Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div> */}

            {/* Auto-play indicator */}
            {!hasTriggered && (
              <div className="absolute top-4 left-4 bg-purple-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                Auto-play on scroll
              </div>
            )}
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        {bottomText && (
          <p className="mt-3 text-lg sm:text-xl text-gray-300 text-center whitespace-pre-line">
            {bottomText}
          </p>
        )}
      </div>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoSrc={videoSrc} 
      />
    </>
  );
} 