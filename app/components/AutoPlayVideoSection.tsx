'use client'
import { useEffect, useRef, useState } from 'react';
import VideoModal from './VideoModal';
import TypingText from '@/components/ui/shadcn-io/typing-text';

interface VideoOption {
  src: string;
  title?: string;
  description?: string;
  type?: 'video' | 'image'; // Support both video and image
  duration?: number; // Display duration in milliseconds (default: 3000ms)
}

interface AutoPlayVideoSectionProps {
  videoSrc?: string; // deprecated - use videos prop instead
  title?: string;
  description?: string;
  bottomText?: string;
  videos?: VideoOption[]; // new prop for multiple videos
  useTypingAnimation?: boolean; // toggle between typing animation and normal title
}

export default function AutoPlayVideoSection({ 
  videoSrc, 
  title = "Watch Demo", 
  description = "See how it works in action",
  bottomText = "",
  videos = [],
  useTypingAnimation = true
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

  // Auto-switch between videos/images based on each item's duration
  useEffect(() => {
    if (videoOptions.length <= 1) return; // Don't auto-switch if only one item

    // Use the current video's duration, or default to 3000ms
    const currentDuration = selectedVideo?.duration || 3000;

    const interval = setInterval(() => {
      setSelectedVideoIndex((prevIndex) => 
        (prevIndex + 1) % videoOptions.length
      );
    }, currentDuration);

    return () => clearInterval(interval);
  }, [videoOptions.length, selectedVideoIndex, selectedVideo?.duration]);

  // Reset video when switching and auto-play if it's a video
  useEffect(() => {
    if (videoPreviewRef.current && selectedVideo && selectedVideo.type !== 'image') {
      videoPreviewRef.current.src = selectedVideo.src;
      videoPreviewRef.current.load();
      // Auto-play the video when switching to it
      videoPreviewRef.current.play().catch(() => {
        console.log('Autoplay blocked');
      });
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
              <div className="mx-auto text-center font-mono bg-gray-900 border border-gray-700 rounded-md px-6 py-4 text-white inline-flex items-center justify-center tracking-wide leading-tight relative z-10 text-xl sm:text-2xl md:text-3xl shadow-lg shadow-purple-700/10">
                {useTypingAnimation ? (
                  <TypingText
                    key={selectedVideoIndex}
                    text={[selectedVideo.title, selectedVideo.title]}
                    typingSpeed={50}
                    deletingSpeed={50}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-white font-medium"
                    cursorClassName="h-[1.1em] bg-white/90"
                    loop={true}
                    reverseMode={false}
                  />
                ) : (
                  <span className="text-white font-medium">{selectedVideo.title}</span>
                )}
              </div>
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
            {/* Video/Image Preview */}
            <div className="relative aspect-video">
              {selectedVideo.type === 'image' ? (
                // Image Preview
                <img
                  src={selectedVideo.src}
                  alt={selectedVideo.title || 'Preview'}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Video Preview
                <>
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
                  
                  {/* Video Icon Overlay - only for videos */}
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                        <rect x="2" y="6" width="14" height="12" rx="2" />
                      </svg>
                      <span className="text-white text-sm font-medium">Play</span>
                    </div>
                  </div>
                </>
              )}

              {/* Click to play only - no auto-open on scroll */}
            </div>

            {/* Bottom gradient - reduced to not interfere with text below */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {bottomText && (
            <figcaption className="mt-6 text-sm sm:text-base text-white font-medium text-center whitespace-pre-line relative z-10">
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