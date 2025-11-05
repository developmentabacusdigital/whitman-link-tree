import React from 'react';

export const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
    <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3z" />
  </svg>
);

export const ShareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

export const WhitmanLogo = () => (
  <svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 25L25 100L100 175L175 100L100 25Z" fill="#FFFFFF" stroke="#00529B" strokeWidth="12"/>
    <path d="M60 75L100 115L140 75" stroke="#00529B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M60 100L100 140L140 100" stroke="#00529B" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const InstagramIconSmall = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const FacebookIconSmall = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
  </svg>
);

export const InstagramIcon = () => (
  <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center">
    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#feda75'}} />
            <stop offset="25%" style={{stopColor: '#fa7e1e'}} />
            <stop offset="50%" style={{stopColor: '#d62976'}} />
            <stop offset="75%" style={{stopColor: '#962fbf'}} />
            <stop offset="100%" style={{stopColor: '#4f5bd5'}} />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </div>
  </div>
);

export const FacebookIcon = () => (
  <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"></path>
    </svg>
  </div>
);

export const LinkedInIcon = () => (
  <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </div>
);
