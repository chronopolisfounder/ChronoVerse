import React from 'react'

export default function BackgroundGlow({ className = '', ...props }) {
  return (
    <div
      className={
        'pointer-events-none fixed inset-0 z-0 bg-black overflow-hidden ' +
        className
      }
      aria-hidden="true"
      {...props}
    >
      <div className="absolute left-1/2 top-1/2 w-[60vw] h-[60vw] -translate-x-1/2 -translate-y-1/2">
        <div className="animate-pulseSlow bg-cyan-400/20 blur-[80px] rounded-full w-full h-full" />
        <div className="absolute inset-0 bg-indigo-400/10 blur-[110px] rounded-full" />
        <div className="absolute inset-0 bg-cyan-200/7 blur-[140px] rounded-full" />
      </div>
      <style>
        {`
          @keyframes pulseSlow {
            0%, 100% { opacity: 0.7; filter: blur(80px);}
            50% { opacity: 1; filter: blur(100px);}
          }
          .animate-pulseSlow {
            animation: pulseSlow 5.5s cubic-bezier(0.4,0,0.6,1) infinite;
          }
        `}
      </style>
    </div>
  )
}
