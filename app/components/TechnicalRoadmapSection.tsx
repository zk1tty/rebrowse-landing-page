import React from 'react';

const TechnicalRoadmapSection: React.FC = () => (
  <div className="mx-auto px-4">
    <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
      ## Endgame
    </h2>
    <div className="mx-auto max-w-2xl lg:max-w-[702px]">
      <div className="w-full max-w-[702px] mx-auto mb-6">
        <a
          href="https://github.com/zk1tty/browser-agent-demo/blob/main/roadmap.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/roadmap.png" alt="Technical Roadmap" className="w-full h-auto" />
        </a>
      </div>
    </div>
    <div className="flex justify-center w-full mb-8">
      <a
        href="https://github.com/zk1tty/browser-agent-demo/blob/main/roadmap.md"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-400 transition-colors"
      >
        🤙🏻 Check Roadmap on Github 🤙🏻
      </a>
    </div>
  </div>
);

export default TechnicalRoadmapSection; 