'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
  className?: string;
}

const IPhoneMockup = ({ children, className = '' }: IPhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative mx-auto" style={{ width: '375px', maxWidth: '100%' }}>
        {/* Outer bezel with shadow */}
        <div className="relative bg-[#1c1c1e] rounded-[3rem] p-3 shadow-2xl">
          {/* Inner frame */}
          <div className="relative bg-black bg-gradient-to-br from-[#FF6F3C] to-[#E8B77D] top-0 rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
              <div className="bg-black rounded-b-3xl px-8 pt-2 pb-6 shadow-lg">
                <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-3">
                  {/* Camera */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a2e] border border-[#2d2d3a]" />
                  {/* Speaker */}
                  <div className="w-12 h-1.5 rounded-full bg-[#1a1a2e]" />
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 z-40 px-6 pt-3 pb-2 flex items-center justify-between text-white text-xs font-semibold">
              <div className="flex items-center gap-1">
                <span>9:41</span>
              </div>
              <div className="flex items-center gap-1.5">
                {/* Signal */}
                <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 12">
                  <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
                  <rect x="4.5" y="5" width="2.5" height="7" rx="0.5" />
                  <rect x="9" y="2" width="2.5" height="10" rx="0.5" />
                  <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
                </svg>
                {/* WiFi */}
                <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 12">
                  <path d="M8 12C8.828 12 9.5 11.328 9.5 10.5S8.828 9 8 9s-1.5.672-1.5 1.5S7.172 12 8 12zm3.5-3.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM8 6c1.381 0 2.631.559 3.536 1.464l1.414-1.414C11.438 4.537 9.793 3.75 8 3.75s-3.438.787-4.95 2.3l1.414 1.414C5.369 6.559 6.619 6 8 6z"/>
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-0.5">
                  <div className="w-6 h-3 border border-white/60 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-white rounded-sm" />
                  </div>
                  <div className="w-0.5 h-1.5 bg-white/60 rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* Screen content */}
            <div className="relative overflow-hidden bg-transparent" style={{ height: '667px' }}>
              <div className="h-full flex flex-col">
                {/* Spacer for status bar */}
                <div className="h-10" />
                {children}
              </div>
            </div>
          </div>

          {/* Side button (right) */}
          <div className="absolute right-0 top-32 w-1 h-16 bg-[#2c2c2e] rounded-l-sm shadow-inner" />

          {/* Volume buttons (left) */}
          <div className="absolute left-0 top-28 w-1 h-8 bg-[#2c2c2e] rounded-r-sm shadow-inner" />
          <div className="absolute left-0 top-40 w-1 h-8 bg-[#2c2c2e] rounded-r-sm shadow-inner" />

          {/* Silent switch (left top) */}
          <div className="absolute left-0 top-20 w-1 h-6 bg-[#2c2c2e] rounded-r-sm shadow-inner" />
        </div>

        {/* iPhone shadow glow */}
        <div className="absolute inset-0 rounded-[3rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] pointer-events-none" />
      </div>
    </div>
  );
};

export default IPhoneMockup;
