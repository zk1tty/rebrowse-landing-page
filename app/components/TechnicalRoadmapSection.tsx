import React from 'react';

const TechnicalRoadmapSection: React.FC = () => (
  <div className="mx-auto px-4">
    <h2 className="text-2xl mb-6 border-b border-stone-800 pb-2 text-stone-50 mt-8">
      ## Why Rebrowse?
    </h2>
    <p className="text-lg sm:text-2xl max-w-xl mx-auto mb-4 text-center">
       If you're a marketer/operator, don't waist your time at fixing HTTP API errors at n8n.io. Just record.
    </p>
    <div className="mx-auto max-w-2xl lg:max-w-[702px]">
      <div className="w-full max-w-[702px] mx-auto mb-6">
        <div style={{
          position: 'relative', 
          width: '100%', 
          height: 0, 
          paddingTop: '56.2500%',
          paddingBottom: 0, 
          boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', 
          marginTop: '1.6em', 
          marginBottom: '0.9em', 
          overflow: 'hidden',
          borderRadius: '8px', 
          willChange: 'transform'
        }}>
          <iframe 
            loading="lazy" 
            style={{
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              top: 0, 
              left: 0, 
              border: 'none', 
              padding: 0,
              margin: 0
            }}
            src="https://www.canva.com/design/DAGqsjrzrZM/Pa9SqZuYuc2dnK-VnW8KHQ/view?embed" 
            allowFullScreen
            allow="fullscreen">
          </iframe>
        </div>
        <div className="text-center mt-4">
          <a 
            href="https://www.canva.com/design/DAGqsjrzrZM/Pa9SqZuYuc2dnK-VnW8KHQ/view?utm_content=DAGqsjrzrZM&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
            target="_blank" 
            rel="noopener"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
          >
            LP-story
          </a>
          <span className="text-gray-400 text-sm"> by Norika Kizawa</span>
        </div>
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