'use client'
import React from 'react';
import Image from 'next/image';
import rebrowseVision from '../../svgs/rebrowse-vision.jpg';
import rebrowseProblem from '../../svgs/rebrowse-problem.jpg';

const NapkinExplanation: React.FC = () => {
  return (
    <div className="w-[702px] mx-auto">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## Problem v.s. Solution
      </h2>
      
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <div className="bg-stone-800 border border-stone-700 rounded-sm overflow-hidden">
            <Image
              src={rebrowseProblem}
              alt="rebrowse Problem"
              width={702}
              height={279}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="bg-stone-800 border border-stone-700 rounded-sm overflow-hidden">
            <Image
              src={rebrowseVision}
              alt="rebrowse Vision"
              width={702}
              height={279}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NapkinExplanation; 