import React, { useState } from 'react';
import fallbackPortrait from '../assets/images/dr_maya_official_1789451815736.jpg';

export interface DoctorPortraitProps {
  /**
   * Source path for the image. Defaults to the official placeholder path '/images/dr-maya.png'
   * You can drop your image file into /public/images/dr-maya.png to replace it directly.
   */
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  variant?: 'hero' | 'about' | 'compact' | 'rounded';
  showBadge?: boolean;
  badgeText?: string;
  priority?: boolean;
}

/**
 * DoctorPortrait Component
 * Displays the official portrait image of Dr. Maya Reynolds, PsyD.
 * Default source is configured to '/images/dr-maya.png' so you can easily replace it
 * by placing your image in the public folder, with seamless fallback to the AI-generated portrait.
 */
export const DoctorPortrait: React.FC<DoctorPortraitProps> = ({
  src = '/images/dr-maya.png',
  alt = 'Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA',
  className = '',
  imgClassName = '',
  variant = 'hero',
  showBadge = true,
  badgeText = 'Santa Monica Coastal Practice',
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // If the primary image path fails (e.g. if a custom path is missing), fall back to the bundled portrait
  const handleError = () => {
    if (!hasError && imgSrc !== fallbackPortrait) {
      setHasError(true);
      setImgSrc(fallbackPortrait);
    }
  };

  if (variant === 'hero') {
    return (
      <div className={`relative w-full max-w-md ${className}`}>
        {/* Soft organic glow around the frame */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#7B9586]/30 via-[#DDD2C4]/40 to-[#AFC2B7]/30 blur-md transform -rotate-1 pointer-events-none" />

        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F3EFEA]">
          {/* Shimmer skeleton while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#EFEAE2] via-[#F8F5F0] to-[#EFEAE2] animate-pulse" />
          )}

          <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            className={`w-full h-[460px] sm:h-[500px] object-cover object-top transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${imgClassName}`}
          />

          {/* Floating credential caption card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E6DFD5] shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-base font-semibold text-[#222E28]">Dr. Maya Reynolds, PsyD</p>
                <p className="text-xs text-[#5E6D66]">Clinical Psychologist &bull; 12+ Years Clinical Practice</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#EBF1ED] flex items-center justify-center text-[#3D5A4D] text-xs font-serif font-bold">
                PsyD
              </div>
            </div>
            <p className="text-xs italic text-[#4F5E58] mt-2 pt-2 border-t border-[#F0EBE3]">
              &ldquo;Therapy isn&apos;t about fixing what is broken; it is about providing the safety your nervous system needs to heal.&rdquo;
            </p>
          </div>
        </div>

        {/* Location pill badge */}
        {showBadge && (
          <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#D5DDD7] shadow-md text-xs font-medium text-[#30483C]">
            <span className="w-2 h-2 rounded-full bg-[#628574]"></span>
            <span>{badgeText}</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className={`relative rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#F3EFEA] ${className}`}>
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#EFEAE2] via-[#F8F5F0] to-[#EFEAE2] animate-pulse" />
        )}
        <img
          src={imgSrc}
          alt={alt}
          onError={handleError}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          className={`w-full h-64 sm:h-72 object-cover object-top transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="font-serif text-sm sm:text-base font-medium drop-shadow-sm">Dr. Maya Reynolds, PsyD</p>
          <p className="text-[11px] text-[#E0EBE4] drop-shadow-sm">CA License #PSY 31842 &bull; Santa Monica Office</p>
        </div>
      </div>
    );
  }

  // Compact or default variant
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#E2DAD0] bg-[#F5F0E8] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#ECE5DC] animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  );
};
