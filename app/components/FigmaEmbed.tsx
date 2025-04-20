'use client'

import React from 'react'

export default function FigmaEmbed() {
  return (
    <div className="relative w-full max-w-[800px] aspect-video">
      <iframe 
        className="w-full h-full rounded-xl border border-white/10 shadow-[0_0_20px_rgba(255,0,255,0.3)]"
        src="https://embed.figma.com/proto/CTamlV3eFXZ6pdHWTYSSL5/Rebrowse?node-id=707-7891&scaling=scale-down&content-scaling=fixed&page-id=412%3A192&starting-point-node-id=707%3A7891&show-proto-sidebar=1&embed-host=share" 
        allowFullScreen
      />
    </div>
  )
}