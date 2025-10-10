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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        {((title && title.trim().length > 0) || (description && description.trim().length > 0)) && (
          <div className="text-center mb-8">
            {title && title.trim().length > 0 && (
              <h2 className="mx-auto text-center font-['Times_New_Roman',_Times,_serif] font-bold tracking-tight leading-tight text-stone-50 text-2xl sm:text-3xl md:text-4xl">
                {title}
              </h2>
            )}
            {description && description.trim().length > 0 && (
              <p className="mt-2 text-sm sm:text-base text-[#B3B3B3] leading-[1.55]">
                {description}
              </p>
            )}
          </div>
        )}

        <figure className="mx-auto w-full max-w-4xl" ref={sectionRef}>
          <div 
            className="relative rounded-2xl overflow-hidden card-surface border-[#B692F6]/20 ring-1 ring-white/10 bg-gradient-to-br from-[#1a1029] to-[#121528] cursor-pointer group"
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
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Click to play only - no auto-open on scroll */}
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {bottomText && (
            <figcaption className="mt-3 text-sm sm:text-base text-gray-300 text-center whitespace-pre-line">
              {bottomText}
            </figcaption>
          )}
        </figure>
      </section>

      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoSrc={videoSrc} 
      />
    </>
  );
} 