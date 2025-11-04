'use client';
import AnimatedPlayButton from './components/AnimatedPlayButton';
import FigmaEmbed from './components/FigmaEmbed'
import ThreeStepFlows from './components/ThreeStepFlows'
import FeatureShowcase from './components/FeatureShowcase'
import TargetAudience from './components/TargetAudience'
import AngelUsers from './components/AngelUsers'
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
import SlotMachineSwitcher from './components/SlotMachineSwitcher';
import TypingText from '@/components/ui/shadcn-io/typing-text';

export default function Home() {
  const [isQROpen, setIsQROpen] = useState(false);
  const [isTryOutOpen, setIsTryOutOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-app text-white overflow-x-hidden max-w-full">
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
          <header className="w-full fixed top-0 left-0 right-0 z-50 bg-app/90 backdrop-blur h-16 sm:h-20">
            <div className="container-app h-full flex items-center">
              <nav className="flex justify-between items-center w-full">
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
        <div className={`flex flex-col min-h-screen ${!isTryOutOpen ? 'pt-16 sm:pt-20' : ''}`}>
          <main className="flex-1 w-full">
            <div className="container-app py-8 sm:py-16">
              {/* Hero Section with overlays */}
              <div className="relative overflow-hidden mb-8">
                {/* ambient glow + subtle grid + noise */}
                <div className="grid-overlay"></div>
                <div className="hero-ambient"></div>
                <div className="hero-noise pointer-events-none"></div>
                <div className="relative text-center mb-4 w-full px-0 rounded-xl">
              {/* Backed by badge */}
              <div className="flex items-center justify-center mb-2">
                <span className="text-[10px] sm:text-xs text-gray-300 mr-2">Partnered with</span>
                <Image
                  alt="Browser-use"
                  loading="lazy"
                  width={808}
                  height={161}
                  className="h-4 sm:h-5 md:h-6 w-auto opacity-90"
                  style={{ color: 'transparent' }}
                  src="/images/browser-use-white-text.png"
                />
              </div>
                <h1 className="relative z-[1] mt-4 leading-tight sm:leading-snug text-[clamp(1rem,6.2vw,1.6rem)] sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up tracking-tight font-['Times_New_Roman',_Times,_serif]" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-flex items-center justify-center whitespace-nowrap text-hero-soft">
                    <span>
                      <span className="text-hero-accent">Screen recording</span>
                      {' '}turned into{' '}
                      <span className="text-hero-accent">Agent</span>
                      </span>
                    </span>
                </h1>
                <h2 className="relative z-[1] text-sm sm:text-lg md:text-xl font-normal mb-2 sm:mb-3 pb-4 sm:pb-6 animate-fade-in-up text-white" style={{ animationDelay: '0.3s' }}>
                  1. Record your screen.
                  <br />
                  2. Call <span className="inline-block bg-gray-900 border border-gray-600 rounded px-2 py-1 font-mono text-md text-gray-300">app-flow</span> from <SlotMachineSwitcher /> in-context.
                  <br />
                  Get your job done{' '}
                  <span className="text-hero-accent font-bold">20x</span> faster than{' '}
                  <Image
                    src="/images/Comet-logo.png"
                    alt="Comet"
                    width={100}
                    height={25}
                    className="inline-block h-6 sm:h-6 md:h-8 w-auto align-bottom"
                  />.
                </h2>
                {/* Add sign up for whitelists */}
                <div className="mb-4 sm:mb-8">
                  <SignUpForm />
                </div>
              </div>

              {/* Recording Demo */}
              <AutoPlayVideoSection 
                videos={[
                  {
                    src: "/videos/Rebrowse-flow-demo.mp4",
                    title: "",
                    description: "",
                    type: "video",
                    duration: 10000
                  }
                ]}
                useTypingAnimation={false}
              />  

              {/* LLM Tool call Demo */}
              <AutoPlayVideoSection 
                videoSrc="/videos/PH-Apollo-Recording.mp4"
                title= "Step 1: Recording"
                description= "Recording ProductHunt -> Apollo email extraction workflow"
                useTypingAnimation={false}
              />        

              {/* Hero Video Section */}
              <AutoPlayVideoSection 
                videoSrc="/videos/rebrowse-demo-with-music.mp4"
                title="Step 2: Test agent on cloud"
                description= "See how the agent browser works in real-time"
                bottomText={"🪄 Agent auto-corrects workflows on your behalf 🪄"}
                useTypingAnimation={false}
              />

              {/* Advanced: Call workflow from ChatGPT */}
              <AutoPlayVideoSection 
                videos={[
                  {
                    src: "/images/chatbot-apollo.png",
                    title: "Step 3: Call workflow from ChatGPT",
                    description: "Talk to ChatGPT to run the Apollo workflow",
                    type: "image",
                    duration: 2000
                  },
                  {
                    src: "/videos/LLM-tool-call-demo.mp4",
                    title: "Step 3: Call workflow from ChatGPT",
                    description: "Search founder's name on ProductHunt and save emails on Apollo",
                    duration: 11000
                  }
                ]}
                useTypingAnimation={false}
              />
              
              {/* <div className="flex justify-center w-full mb-8">
                <AnimatedPlayButton onClick={() => setIsTryOutOpen(true)} />
              </div> */}
              </div>
              {/* End Hero Section */}

              <AngelUsers />


              {/* How it works */}
              <div className="relative w-full max-w-4xl mx-auto mb-8 sm:mb-12">
                {/* add padding to the top of image with mb-8 with width of 100% and text-center */}
                <div className="mb-8 w-full"></div>
                <Image
                  src="/images/rebrowse-system-arc.png"
                  alt="System Architecture"
                  width={640}
                  height={320}
                  className="w-full h-auto rounded-lg"
                  priority
                />
                <h2 className="text-2xl font-bold mb-4 text-center text-white mt-8 w-full">How it works</h2>
              </div>

              {/* <TechnicalRoadmapSection /> */}
              {/* Add sign up for whitelists */}
              <div className="mb-8 sm:mb-16">
              <h2 className="sm:w-auto mx-auto text-center text-4xl font-bold mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8 font-['Times_New_Roman',_Times,_serif]">
                try now!
              </h2>
                <SignUpForm />
              </div>
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