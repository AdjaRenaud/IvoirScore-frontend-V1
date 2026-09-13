import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const iconDimensions = {
    sm: 'w-6.5 h-6.5 sm:w-8 sm:h-8 rounded-md sm:rounded-xl p-0.5 sm:p-1',
    md: 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-2xl p-1 sm:p-1.5',
    lg: 'w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl p-1 sm:p-2'
  }[size];

  const textSizes = {
    sm: 'text-base sm:text-xl',
    md: 'text-[19px] sm:text-2xl md:text-[27px]',
    lg: 'text-2xl sm:text-3xl'
  }[size];

  return (
    <div id="brand-logo-content" className={`flex items-center gap-2 sm:gap-2.5 md:gap-3 select-none ${className}`}>
      {/* SQUIRCLE ICON: Elephant & Basketball Emblem */}
      <div
        className={`relative ${iconDimensions} bg-gradient-to-br from-[#FF6500] via-[#FF7800] via-40% to-[#009A60] flex items-center justify-center shadow-lg shadow-orange-500/25 shrink-0 ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-[1.03]`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white filter drop-shadow-sm"
        >
          {/* Elephant Ear & Head (Left) */}
          <path
            d="M46 8 C30 8 16 18 10 32 C6 40 5 48 7 55 C9 62 15 67 22 68 C27 64 32 58 36 48 C41 35 45 20 47 8 Z"
            fill="currentColor"
          />

          {/* Elephant Forehead, Brow & Face */}
          <path
            d="M47 8 C40 22 34 37 29 52 C26 60 22 66 16 70 C10 72 5 79 7 86 C9 92 15 95 21 93 C26 90 29 83 30 76 C32 65 36 56 42 48 C43 55 45 65 46 75 C47 84 49 92 53 96 C57 100 63 99 66 92 C69 84 65 73 62 63 C59 51 55 35 52 20 C51 15 49 11 47 8 Z"
            fill="currentColor"
          />

          {/* Elephant Tusk (curved downwards) */}
          <path
            d="M28 60 C26 69 22 80 15 87 C10 91 7 93 6 92 C8 86 14 77 20 69 C24 64 26 61 28 60 Z"
            fill="currentColor"
          />

          {/* Elephant Trunk looping into ball contour */}
          <path
            d="M48 24 C50 40 52 59 54 75 C55 88 56 96 60 98 C64 99 68 94 69 86 C70 76 68 64 65 53 C70 58 77 65 83 73 C86 78 91 83 95 85 C92 78 86 70 80 62 C73 52 66 43 59 35 C55 30 51 25 48 24 Z"
            fill="currentColor"
          />

          {/* Basketball Seams & Quadrants (Right) */}
          <path
            d="M54 8 C70 10 83 19 90 31 C85 33 77 39 67 47 C62 38 59 26 54 8 Z"
            fill="currentColor"
          />

          <path
            d="M92 34 C98 45 99 57 97 68 C88 67 78 65 68 60 C77 49 86 40 92 34 Z"
            fill="currentColor"
          />

          <path
            d="M96 73 C92 85 84 93 74 98 C73 92 73 85 74 76 C81 75 89 74 96 73 Z"
            fill="currentColor"
          />

          <path
            d="M70 99 C60 103 49 103 39 99 C43 95 48 90 52 84 C57 91 63 96 70 99 Z"
            fill="currentColor"
          />

          {/* Center Seam Arcs */}
          <path
            d="M50 8 C52 20 57 40 64 57 C71 70 81 83 93 92 C88 96 82 98 75 99 C65 92 57 80 51 64 C46 50 43 32 43 8 Z"
            fill="currentColor"
            opacity="0.95"
          />

          <path
            d="M13 69 C25 65 41 60 58 58 C71 57 85 59 97 65 C97 68 96 71 95 74 C83 68 69 65 57 67 C41 69 28 74 17 79 C14 75 13 73 13 69 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* TYPOGRAPHY: voirScore */}
      <div className={`flex items-baseline font-black tracking-tight ${textSizes} leading-none`}>
        <span className="text-[#009A60] tracking-[-0.03em] font-extrabold">voir</span>
        <span className="text-[#FF6500] tracking-[-0.02em] font-black">Score</span>
      </div>
    </div>
  );
};
