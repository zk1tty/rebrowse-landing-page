'use client';
import AnimatedPlayButton from './components/AnimatedPlayButton';
import FigmaEmbed from './components/FigmaEmbed'
import ThreeStepFlows from './components/ThreeStepFlows'
import FeatureShowcase from './components/FeatureShowcase'
import TargetAudience from './components/TargetAudience'
import SignUpForm from './components/SignUpForm'
import Image from 'next/image'
import rebrowseLogo from '../svgs/rebrowse-logo.png'
import { useState } from 'react';
import QRModal from './components/QRModal';
import TechnicalRoadmapSection from './components/TechnicalRoadmapSection';
import { Analytics } from "@vercel/analytics/next";
import CountdownTimer from './components/CountdownTimer';
import TryOutModal from './components/TryOutModal';
import EventModal from './components/EventModal';
import AutoPlayVideoSection from './components/AutoPlayVideoSection';
import { Puzzle, Send, User, Blocks } from 'lucide-react';

export default function Home() {
  const [isQROpen, setIsQROpen] = useState(false);
  const [isTryOutOpen, setIsTryOutOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <QRModal isOpen={isQROpen} onClose={() => setIsQROpen(false)} />
        <TryOutModal isOpen={isTryOutOpen} onClose={() => setIsTryOutOpen(false)} />
        <EventModal isOpen={isEventOpen} onClose={() => setIsEventOpen(false)} />
        {isImageOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={() => setIsImageOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-screen h-screen" onClick={(e) => e.stopPropagation()}>
              <Image
                src="/images/4-panels-canvas.png"
                alt="v0.2.0 - production-ready"
                fill
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setIsImageOpen(false); }}
              aria-label="Close full-screen image"
              className="absolute top-4 right-4 text-white text-3xl leading-none z-[101]"
            >
              &times;
            </button>
          </div>
        )}
        {/* Only show header if TryOutModal is NOT open */}
        {!isTryOutOpen && (
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
        )}
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 w-full">
            <div className="max-w-[1200px] mx-auto px-4 py-8 sm:py-16">
              <div className="text-center mb-8 w-full px-4 sm:px-0">
                <div className="flex items-center justify-center mb-3">
                  <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/70 bg-white/10 whitespace-nowrap">
                    <span className="h-2 w-2 rounded-full bg-purple-300"></span>
                    <span className="text-xs sm:text-sm md:text-base text-gray-200">Browser-as-a-Service for Human</span>
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-gray-200" aria-hidden="true" />
                  </div>
                </div>
                <h1 className="text-[1.2rem] sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
                    {/* <Blocks className="w-10 h-10 text-purple-300" aria-hidden="true" /> */}
                    <span>n8n for Browser Automation</span>
                  </span>
                </h1>
                <h2 className="text-base sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Record and Replay browser flows - in one click.
                </h2>
                {/* Add sign up for whitelists */}
                <div className="mb-8 sm:mb-16">
                  <SignUpForm />
                </div>
              </div>
              <div className="flex justify-center items-center w-full mb-8 gap-6 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white"><span className="text-md font-bold">NOT</span> backed by</span>
                  <Image
                    alt="backed by Y Combinator"
                    loading="lazy"
                    width={808}
                    height={161}
                    className="w-32 sm:w-40 md:w-60"
                    style={{ color: 'transparent' }}
                    src="/svgs/YCombinator_logo.svg"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white"> BUT <span className="text-md font-bold">partnered</span> with</span>
                  <Image
                    alt="partnered with Browser-use"
                    loading="lazy"
                    width={808}
                    height={161}
                    className="w-32 sm:w-40 md:w-60"
                    style={{ color: 'transparent' }}
                    src="/images/browser-use-white-text.png"
                  />
                </div>
              </div>
              <a href="https://www.producthunt.com/products/rebrowse?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-rebrowse" target="_blank">
                <img className="block mx-auto w-2/5 sm:w-[250px] h-auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=987539&theme=light&t=1758515080888" alt="Rebrowse - Turn&#0032;screen&#0045;recording&#0032;into&#0032;100&#0032;browser&#0032;flows&#0032;in&#0032;one&#0032;click&#0046; | Product Hunt" width="250" height="54" />
              </a>
              {/* Hero Video Section */}
              <AutoPlayVideoSection 
                videoSrc="/videos/rebrowse-demo-with-music.mp4"
                title=""
                description= ""
                bottomText={"e.g. prompt Grok-4 and post a tweet on X via your account.\nYou can run the multipul browserflows in one click, from your phone.🤯"}
              />
              {/* Hero Title Section */}
              <div className="text-center mb-8 w-full">
                <div className="my-16">
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-16 text-center">
                Turn <span className="text-purple-400">one</span> repetitive browser flow into <span className="text-purple-400">100 runs</span> in one click.
                <br />
                <br />
                for no-API ops, and multi SNS accounts, multi AI tool flow. 
                <br />
                <br />
                import from browser-use and run <span className="text-purple-400">20x</span> faster.
              </h2>
              <div className="flex justify-center w-full mb-8">
                <AnimatedPlayButton onClick={() => setIsTryOutOpen(true)} />
              </div>
              {/* Auto-play Video Section */}
              <AutoPlayVideoSection 
                videoSrc="/videos/demo-grok-post.mp4"
                title=""
                description="v0.1.0 - Grok-powered X bot demo"
              />
               <div className="relative w-full max-w-4xl mx-auto mb-16 px-4">
                 {/* add the oneliner description on the top of the image */}
                 <div className="text-center mb-8">
                   <p className="text-lg sm:text-2xl text-white mb-4">
                     v0.2.0 - Boost concurrency and Control the performance.
                   </p>
                 </div>
                <div 
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 cursor-zoom-in"
                  onClick={() => setIsImageOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsImageOpen(true); } }}
                >
                   <Image 
                     src="/images/4-panels-canvas.png" 
                     alt="v0.2.0 - production-ready" 
                     width={1000} 
                     height={1000}
                     className="w-full h-auto object-cover"
                   />
                 </div>
               </div> 
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
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
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
    </>
  );
}
