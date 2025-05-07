'use client'
import React from 'react';
import Image from 'next/image';
import rebrowseVision from '../../svgs/rebrowse-vision.jpg';
import rebrowseProblem from '../../svgs/rebrowse-problem.jpg';

const NapkinExplanation: React.FC = () => {
  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## Why you choose Rebrowse?
      </h2>
      <h3 className="text-lg mb-4 text-center">
        <span className="text-stone-100 font-semibold block mt-1">
          Because you can share/choose cross-app workflows by recording, instead of node editors.
        </span>
      </h3>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-[702px]">
          <div className="w-full max-w-[702px] mx-auto">
            <Image
              src="/images/bell-curve-with-logos.png"
              alt="rebrowse Problem"
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