'use client';
import AnimatedPlayButton from './components/AnimatedPlayButton';
import FigmaEmbed from './components/FigmaEmbed'
import ThreeStepFlows from './components/ThreeStepFlows'
import FeatureShowcase from './components/FeatureShowcase'
import TargetAudience from './components/TargetAudience'
import Image from 'next/image'
import rebrowseLogo from '../svgs/rebrowse-logo.png'
import { useState } from 'react';
import QRModal from './components/QRModal';
import TechnicalRoadmapSection from './components/TechnicalRoadmapSection';
import { Analytics } from "@vercel/analytics/next";
import CountdownTimer from './components/CountdownTimer';
import TryOutModal from './components/TryOutModal';
import AutoPlayVideoSection from './components/AutoPlayVideoSection';

export default function Home() {
  const [isQROpen, setIsQROpen] = useState(false);
  const [isTryOutOpen, setIsTryOutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <QRModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
      <TryOutModal isOpen={isTryOutOpen} onClose={() => setIsTryOutOpen(false)} />
      <div className="flex flex-col min-h-screen">
        <header className="w-full sticky top-0 z-50 bg-black/90 backdrop-blur">
          <div className="max-w-[1200px] mx-auto px-4 py-8">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
                  <Image
                    src={rebrowseLogo}
                    alt="Rebrowse Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold">Rebrowse</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsQROpen(true); }} className="hover:text-purple-400 transition-colors text-xs sm:text-sm md:text-base flex items-center gap-1 cursor-pointer">
                  <img src="/svgs/qr.svg" alt="QR Code" width={20} height={20} className="mr-1" />
                  QR
                </a>
                <a href="https://n0ri.com" className="hover:text-purple-400 transition-colors text-xs sm:text-sm md:text-base flex items-center gap-1">
                  <img src="/svgs/hugging-face.svg" alt="Hugging Face" width={20} height={20} className="mr-1" />
                  Creator
                </a>
                <a 
                  href="https://github.com/zk1tty/rebrowse-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1"
                  aria-label="GitHub"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base">Github</span>
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full">
          <div className="max-w-[1200px] mx-auto px-4 py-8 sm:py-16">
            <div className="relative flex flex-col items-center w-full mb-8 rounded-xl overflow-hidden" style={{ minHeight: 350 }}>
              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover object-center scale-110"
                src="/videos/journey-7s.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Optional: Overlay for readability */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
                <p className="text-lg sm:text-5xl text-white max-w-2xl mx-auto mb-4 text-center">
                  🚀 Closed-β Launched🚀
                </p>
                {/* <CountdownTimer launchDate={new Date('2025-06-15T10:00:00Z')} /> */}
                <p className="text-lg sm:text-2xl text-white max-w-2xl mx-auto text-center">
                  Get a {' '}
                  <span
                    className="font-bold bg-purple-400 text-black px-2 py-1 rounded cursor-pointer hover:bg-purple-300 transition"
                    onClick={() => setIsTryOutOpen(true)}
                    tabIndex={0}
                    role="button"
                    aria-label="Open waitlist signup"
                  >
                    referral code 🔑
                  </span>
                  {' '}
                </p>
              </div>
            </div>
            <div className="text-center mb-8 w-full">
              <div className="my-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">F*ck n8n. Just record.</h1>
                <h2 className="text-2xl sm:text-3xl max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap mt-4">
                  <img src="/svgs/loom-logo.svg" alt="Loom" className="h-8 sm:h-10 inline-block" /> for workflow automation.
                </h2>
              </div>
              <p className="text-lg sm:text-2xl max-w-2xl mx-auto">
                Record your screen, and turn it into a workflow.
              </p>
              <p className="text-lg sm:text-2xl max-w-2xl mx-auto mt-4">
                Record ➜ Share ➜ Remix (with meta prompt 🤫)
              </p>
              <p className="text-lg sm:text-2xl max-w-2xl mx-auto mb-4 mt-8">
                No Long Prompt. Just f*cking record.
              </p>
            </div>
            <div className="flex justify-center w-full mb-8">
              <AnimatedPlayButton />
            </div>
            {/* Auto-play Video Section */}
            <AutoPlayVideoSection 
              videoSrc="/videos/demo-grok-post.mp4"
              title="How to Rebrowse"
              description=""
            />
            {/* <FeatureShowcase /> */}
            <ThreeStepFlows />
            <TargetAudience />
            <TechnicalRoadmapSection />
          </div>
        </main>

        <footer className="w-full">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 py-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center">
                  <Image
                    src={rebrowseLogo}
                    alt="Rebrowse Logo"
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </div>
                <span className="text-sm sm:text-base font-bold">Rebrowse</span>
              </div>
              <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms</a>
                <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://x.com/n0rizkitty" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/zk1tty/rebrowse-app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Analytics />
    </div>
  );
}
