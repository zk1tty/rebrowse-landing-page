'use client'
import { useEffect, useRef, useState } from 'react';
import VideoModal from './VideoModal';

interface VideoOption {
  src: string;
  title?: string;
  description?: string;
}

interface AutoPlayVideoSectionProps {
  videoSrc?: string; // deprecated - use videos prop instead
  title?: string;
  description?: string;
  bottomText?: string;
  videos?: VideoOption[]; // new prop for multiple videos
}

export default function AutoPlayVideoSection({ 
  videoSrc, 
  title = "Watch Demo", 
  description = "See how it works in action",
  bottomText = "",
  videos = []
}: AutoPlayVideoSectionProps) {
  // Support both old videoSrc prop and new videos prop
  const videoOptions: VideoOption[] = videos.length > 0 
    ? videos 
    : videoSrc 
      ? [{ src: videoSrc, title: title, description: description }]
      : [];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPreviewRef = useRef<HTMLVideoElement>(null);

  const selectedVideo = videoOptions[selectedVideoIndex];

  // Reset video when switching
  useEffect(() => {
    if (videoPreviewRef.current && selectedVideo) {
      videoPreviewRef.current.src = selectedVideo.src;
      videoPreviewRef.current.load();
    }
  }, [selectedVideoIndex, selectedVideo]);

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

  if (!selectedVideo) {
    return null;
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        {/* Tab Switcher - only show if multiple videos */}
        {videoOptions.length > 1 && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg bg-[#1a1029] p-1 border border-purple-500/20">
              {videoOptions.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideoIndex(index)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedVideoIndex === index
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-purple-600/30'
                  }`}
                >
                  {video.title || `Video ${index + 1}`}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Title and Description */}
        {((selectedVideo.title && selectedVideo.title.trim().length > 0) || 
          (selectedVideo.description && selectedVideo.description.trim().length > 0)) && (
          <div className="text-center mb-8 relative z-10">
            {selectedVideo.title && selectedVideo.title.trim().length > 0 && (
              <h2 className="mx-auto text-center font-['Times_New_Roman',_Times,_serif] font-bold tracking-tight leading-tight text-white text-2xl sm:text-3xl md:text-4xl relative z-10">
                {selectedVideo.title}
              </h2>
            )}
            {selectedVideo.description && selectedVideo.description.trim().length > 0 && (
              <p className="mt-2 text-sm sm:text-base text-white leading-[1.55] relative z-10">
                {selectedVideo.description}
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
                <source src={selectedVideo.src} type="video/mp4" />
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
        videoSrc={selectedVideo.src} 
      />
    </>
  );
} 