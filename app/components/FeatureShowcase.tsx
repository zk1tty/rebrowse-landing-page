'use client'
import React, { useState } from 'react';
import { CreditCard, Mails, Brain, Ear, CirclePlay } from 'lucide-react';
import TryOutModal from './TryOutModal';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  videoUrl?: string;
  imageUrl?: string;
  link?: string;
  colSpan: string;
  roundedCorner?: string;
  id?: string;
}

const features: Feature[] = [
  {
    title: "record: Tweet on X",
    description: "Record your tweet flow, and replay it at 5x speed.",
    icon: <CirclePlay className="size-5 mb-1 text-emerald-500" />,
    videoUrl: "/videos/record-replay-mode-rebrowse.mov",
    link: "https://youtu.be/lPN4lYGrzzQ",
    colSpan: "lg:col-span-5",
    roundedCorner: "lg:rounded-tr-[2rem]"
  },
  {
    title: "prompt: Airbnb Booking",
    description: "If you already logged in to your Airbnb account, full automation from searching the place to payment is done.",
    icon: <CreditCard className="size-5 mb-1 text-rose-400" />,
    videoUrl: "/videos/airbnb-booking-5x.mp4",
    link: "https://www.youtube.com/watch?v=1kQu8oYG-2g",
    colSpan: "lg:col-span-5",
    roundedCorner: "lg:rounded-tr-[2rem]"
  },
  {
    title: "prompt: Luma -> LinkedIn DM",
    description: "Extract the Linkedin link from the Luma event guest list, request Connect, and send LinkedIn DM.",
    icon: <Mails className="size-5 mb-1 text-emerald-500" />,
    videoUrl: "/videos/luma-linkedin-dming-4x.mp4",
    link: "https://www.youtube.com/watch?v=ozXZqgxUJK0",
    colSpan: "lg:col-span-5",
    roundedCorner: "lg:rounded-tr-[2rem]"
  },
  {
    id: "try-out-card",
    title: "Tell me your workflow 🤙🏻",
    description: "Click here and tell me your workflow. I will do it for you.",
    icon: <Ear className="size-5 mb-1 text-emerald-500" />,
    imageUrl: "/images/ask-me-rick-rubin.png",
    link: "",
    colSpan: "lg:col-span-5",
    roundedCorner: "lg:rounded-tr-[2rem]"
  }
];

const FeatureShowcase: React.FC = () => {
  const [isTryOutModalOpen, setIsTryOutModalOpen] = useState(false);
  const toggleTryOutModal = () => setIsTryOutModalOpen(!isTryOutModalOpen);

  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
        ## Showcase
      </h2>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-10">
            {features.map((feature, index) => (
              <div key={index} className={`flex p-px transition-all duration-300 hover:scale-[1.02] ${feature.colSpan}`}>
                {feature.link ? (
                  <a href={feature.link} target="_blank" rel="noopener noreferrer" className={`relative rounded-lg bg-[#171717] ring-1 ring-white/10 ${feature.roundedCorner} cursor-pointer w-full block`}>
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity opacity-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                    
                    <div className="relative mx-auto overflow-hidden bg-black/50 rounded-t-lg">
                      <div className="relative w-full pt-[56.25%]">
                        {feature.videoUrl ? (
                          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                            <source src={feature.videoUrl} type="video/mp4" />
                          </video>
                        ) : feature.imageUrl ? (
                          <img 
                            src={feature.imageUrl} 
                            alt={feature.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                    </div>

                    <div className="p-4">
                      {feature.icon}
                      <p className="text-lg font-medium tracking-tight text-white">{feature.title}</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">{feature.description}</p>
                    </div>
                  </a>
                ) : (
                  <div 
                    onClick={feature.id === 'try-out-card' ? toggleTryOutModal : undefined}
                    className={`relative rounded-lg bg-[#171717] ring-1 ring-white/10 ${feature.roundedCorner} ${feature.id === 'try-out-card' ? 'cursor-pointer' : ''} w-full`}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity opacity-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                    
                    <div className="relative mx-auto overflow-hidden bg-black/50 rounded-t-lg">
                      <div className="relative w-full pt-[56.25%]">
                        {feature.videoUrl ? (
                          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                            <source src={feature.videoUrl} type="video/mp4" />
                          </video>
                        ) : feature.imageUrl ? (
                          <img 
                            src={feature.imageUrl} 
                            alt={feature.title}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                    </div>

                    <div className="p-4">
                      {feature.icon}
                      <p className="text-lg font-medium tracking-tight text-white">{feature.title}</p>
                      <p className="mt-2 max-w-lg text-sm/6 text-zinc-400">{feature.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TryOutModal isOpen={isTryOutModalOpen} onClose={toggleTryOutModal} />
    </div>
  );
};

export default FeatureShowcase;