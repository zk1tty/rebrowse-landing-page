'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  MoreVertical,
  Play,
  RotateCw,
  User,
  Video,
} from "lucide-react";
import Image from 'next/image';
import step1Flow from '../../svgs/LP-Step1.svg';
import step2Flow from '../../svgs/LP-Step2.svg';
import step3Flow from '../../svgs/LP-Step3.svg';

// Step 1 Display Component
const Step1Display = () => (
  <video
    src="/videos/step1-5.5s.mp4"
    autoPlay
    loop
    muted
    playsInline
    width="100%"
    height="100%"
    className="object-contain"
  />
);

// Step 2 Display Component
const Step2Display = () => (
  <video
    src="/videos/step2-5.5s.mp4"
    autoPlay
    loop
    muted
    playsInline
    width="100%"
    height="100%"
    className="object-contain"
  />
);

// Step 3 Display Component
const Step3Display = () => (
  <video
    src="/videos/step3-5.5s.mp4"
    autoPlay
    loop
    muted
    playsInline
    width="100%"
    height="100%"
    className="object-contain"
  />
);

const ThreeStepFlows: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasCompletedRef = useRef(false);

  const moveToNextStep = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setProgress(0);
      setActiveStep(prev => prev === 3 ? 1 : prev + 1);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }
  }, [activeStep, isTransitioning]);

  useEffect(() => {
    hasCompletedRef.current = false;
    
    if (activeStep > 3) return;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100 && !hasCompletedRef.current) {
          hasCompletedRef.current = true;
          clearInterval(timer);
          moveToNextStep();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [activeStep, moveToNextStep]);

  const handleStepClick = (step: number) => {
    if (isTransitioning) return;
    setProgress(0);
    setActiveStep(step);
    hasCompletedRef.current = false;
  };

  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## 3 Steps to Rebrowse
      </h2>
      {/* 3-Step Workflow */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full aspect-video bg-purple-600/20 rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src="/videos/step-1-3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-purple-600/20 rounded-2xl" />
            <svg className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-medium">1. Screen recording</span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full aspect-video bg-purple-600/20 rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src="/videos/step-2-3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-purple-600/20 rounded-2xl" />
            <svg className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
           </svg>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-medium">2. Share URL</span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full aspect-video bg-purple-600/20 rounded-2xl flex items-center justify-center mb-3 overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src="/videos/step-3-3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-purple-600/20 rounded-2xl" />
            <svg className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-medium">3. Run flows on mobile</span>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-[702px]">
          <div className="flex gap-2 pb-3 overflow-x-auto">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm text-xs sm:text-sm whitespace-nowrap cursor-pointer bg-amber-600 text-stone-950 font-bold">
              Ghibli Movie Generator
            </button>
          </div>

          <p className="text-white mb-4 sm:mb-6 text-sm md:text-base">
            prompt 💬 → [ChatGPT] → Ghibli image 🖼️ → [Krea.ai] → movie 🎦
          </p>

          <div className="bg-stone-800 border border-stone-700 rounded-sm mb-6 overflow-hidden flex flex-col h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
            {/* Browser window header */}
            <div className="bg-stone-800 border-b border-stone-700 py-2 px-3 flex items-center flex-shrink-0">
              <div className="flex space-x-1.5 sm:space-x-2 mr-2 sm:mr-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-stone-700 rounded-sm py-0.5 px-2 sm:py-1 sm:px-3 text-[10px] sm:text-xs text-stone-400 flex items-center">
                <span className="mr-1 sm:mr-2 text-xs">🔒</span>
                <span className="truncate">rebrowse.me</span>
              </div>
              <div className="flex space-x-2 sm:space-x-3 ml-2 sm:ml-4 text-stone-400 text-xs sm:text-base">
                <RotateCw className="w-3 h-3 sm:w-4 sm:h-4" />
                <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 bg-stone-800 flex items-center justify-center relative overflow-y-auto">
              {activeStep === 1 && <Step1Display />}
              {activeStep === 2 && <Step2Display />}
              {activeStep === 3 && <Step3Display />}
            </div>
          </div>

          <div className="flex flex-row gap-2 justify-between mb-4 w-full overflow-x-auto px-1">
            <button
              onClick={() => handleStepClick(1)}
              className={`flex-1 min-w-[80px] p-2 sm:p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
                activeStep === 1 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
              }`}
            >
              <div className={`text-xs sm:text-sm font-bold mb-1 ${activeStep === 1 ? 'text-amber-500' : 'text-stone-400'}`}>
                STEP 1
              </div>
              <div className="text-xs sm:text-base text-stone-300">Record screen</div>
              {activeStep === 1 && (
                <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>

            <button
              onClick={() => handleStepClick(2)}
              className={`flex-1 min-w-[80px] p-2 sm:p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
                activeStep === 2 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
              }`}
            >
              <div className={`text-xs sm:text-sm font-bold mb-1 ${activeStep === 2 ? 'text-amber-500' : 'text-stone-400'}`}>
                STEP 2
              </div>
              <div className="text-xs sm:text-base text-stone-300">Analyze flow</div>
              {activeStep === 2 && (
                <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>

            <button
              onClick={() => handleStepClick(3)}
              className={`flex-1 min-w-[80px] p-2 sm:p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
                activeStep === 3 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
              }`}
            >
              <div className={`text-xs sm:text-sm font-bold mb-1 ${activeStep === 3 ? 'text-amber-500' : 'text-stone-400'}`}>
                STEP 3
              </div>
              <div className="text-xs sm:text-base text-stone-300">Automate flow</div>
              {activeStep === 3 && (
                <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeStepFlows;