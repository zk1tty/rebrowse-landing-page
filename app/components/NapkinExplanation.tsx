'use client'
import React from 'react';
import Image from 'next/image';
import rebrowseVision from '../../svgs/rebrowse-vision.jpg';
import rebrowseProblem from '../../svgs/rebrowse-problem.jpg';

const NapkinExplanation: React.FC = () => {
  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## Problem v.s. Solution
      </h2>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-[702px]">
          <div className="w-full max-w-[702px] mx-auto">
            <Image
              src={rebrowseProblem}
              alt="rebrowse Problem"
              width={702}
              height={279}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-[702px] mt-6">
          <div className="w-full max-w-[702px] mx-auto">
            <Image
              src={rebrowseVision}
              alt="rebrowse Vision"
              width={702}
              height={279}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NapkinExplanation; 