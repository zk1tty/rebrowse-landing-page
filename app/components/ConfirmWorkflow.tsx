'use client'
import React, { useState } from 'react';
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

// Define data for the flow section
const flowSteps = [
  {
    image: "🍱", // Original food image
    model: null,
    prompt: null,
  },
  {
    image: "🎨", // Ghibli-style transformed image
    model: "GPT-4o",
    prompt: "Turn this image into Ghibli world.",
  },
  {
    image: "🔥", // Final enhanced image
    model: "Wan 2.1",
    prompt: "make this food look very hot and tasty",
  },
];

// Define emojis for each step
const stepEmojis = {
  step1: ["🎥", "📹", "🎬"], // Recording related emojis
  step2: ["🔄", "⏯️", "▶️"], // Replay related emojis
  step3: ["🤖", "📤", "🌐"], // Share related emojis
};

// Step 1 Display Component
const Step1Display = () => (
  <div className="flex flex-col h-full w-full">
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={step1Flow}
        alt="Step 1 Flow Diagram"
        width={702}
        height={279}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

// Step 2 Display Component
const Step2Display = () => (
  <div className="flex flex-col h-full w-full">
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={step2Flow}
        alt="Step 2 Flow Diagram"
        width={702}
        height={279}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

// Step 3 Display Component
const Step3Display = () => (
  <div className="flex flex-col h-full w-full">
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={step3Flow}
        alt="Step 3 Flow Diagram"
        width={702}
        height={279}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

const StopRecording: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [currentEmojis, setCurrentEmojis] = useState<string[]>(stepEmojis.step1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
    switch (step) {
      case 1:
        setCurrentEmojis(stepEmojis.step1);
        break;
      case 2:
        setCurrentEmojis(stepEmojis.step2);
        break;
      case 3:
        setCurrentEmojis(stepEmojis.step3);
        break;
      default:
        setCurrentEmojis(stepEmojis.step1);
    }
  };

  return (
    <div className="w-[702px] mx-auto">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## What you can rebrowse
      </h2>
      
      <div className="flex gap-2 pb-3 overflow-x-auto">
        <button className="px-4 py-2 rounded-sm text-sm whitespace-nowrap cursor-pointer bg-amber-600 text-stone-950 font-bold">
          Ghibli Movie
        </button>
        <button className="px-4 py-2 rounded-sm text-sm whitespace-nowrap cursor-pointer bg-stone-800 hover:bg-stone-700 text-stone-300">
          Alipay ➜ Shopfy
        </button>
      </div>

      <p className="text-stone-400 mb-6 text-sm md:text-base">
        Transform your food images into Ghibli-style artwork with AI.
      </p>

      <div className="bg-stone-800 border border-stone-700 rounded-sm mb-6 overflow-hidden flex flex-col h-[450px] sm:h-[500px]">
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
            <RotateCw className="w-4 h-4" />
            <MoreVertical className="w-4 h-4" />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 bg-stone-800 flex items-center justify-center relative overflow-y-auto">
          {activeStep === 1 && <Step1Display />}
          {activeStep === 2 && <Step2Display />}
          {activeStep === 3 && <Step3Display />}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between mb-4">
        <button
          onClick={() => handleStepClick(1)}
          className={`flex-1 p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
            activeStep === 1 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
          }`}
        >
          <div className={`text-sm font-bold mb-1 ${activeStep === 1 ? 'text-amber-500' : 'text-stone-400'}`}>
            STEP 1
          </div>
          <div className="text-stone-300">Record your screen</div>
          {activeStep === 1 && (
            <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 animate-progress" style={{ animationDuration: '7s' }}></div>
            </div>
          )}
        </button>

        <button
          onClick={() => handleStepClick(2)}
          className={`flex-1 p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
            activeStep === 2 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
          }`}
        >
          <div className={`text-sm font-bold mb-1 ${activeStep === 2 ? 'text-amber-500' : 'text-stone-400'}`}>
            STEP 2
          </div>
          <div className="text-stone-300">Replay workflow</div>
          {activeStep === 2 && (
            <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 animate-progress" style={{ animationDuration: '7s' }}></div>
            </div>
          )}
        </button>

        <button
          onClick={() => handleStepClick(3)}
          className={`flex-1 p-4 rounded-sm border text-left transition-colors duration-300 cursor-pointer ${
            activeStep === 3 ? 'bg-stone-800 border-amber-500' : 'bg-stone-900 border-stone-700 hover:bg-stone-800'
          }`}
        >
          <div className={`text-sm font-bold mb-1 ${activeStep === 3 ? 'text-amber-500' : 'text-stone-400'}`}>
            STEP 3
          </div>
          <div className="text-stone-300">Share workflow agent</div>
          {activeStep === 3 && (
            <div className="mt-2 h-1 bg-stone-700 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 animate-progress" style={{ animationDuration: '7s' }}></div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default StopRecording;
