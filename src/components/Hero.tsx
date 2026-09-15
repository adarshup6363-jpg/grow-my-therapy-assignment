import React from 'react';
import { Calendar, ShieldCheck, Heart, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';
import { DoctorPortrait } from './DoctorPortrait';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] pt-8 pb-16 lg:py-20">
      {/* Subtle organic background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E2EBE5]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#E8DFD3]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio snippet & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top location & credentials badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] border border-[#BACCC1] text-[#2F4A3E] text-xs sm:text-sm font-medium shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#4D6D5F]" />
              <span>Santa Monica, CA &bull; {DOCTOR_INFO.license}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1E2924] leading-[1.18]">
                A compassionate space to <span className="italic font-medium text-[#375245]">untangle anxiety</span>, heal trauma, and find your center.
              </h1>
              <p className="text-lg sm:text-xl text-[#4A5752] font-normal leading-relaxed max-w-2xl pt-2">
                Evidence-based psychotherapy for high-achieving adults, creatives, and professionals navigating chronic worry, panic, unresolved trauma, and executive burnout.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#344C3F] hover:bg-[#25392F] text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#C1D4C9]" />
                <span>Book Free 15-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F2ECE4] border border-[#D9D1C5] text-[#344C3F] text-base font-medium transition-all duration-200 shadow-xs hover:border-[#BACCC1]"
              >
                <span>Explore Specializations</span>
              </a>
            </div>

            {/* Key Clinical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5DDD2]">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#EBF1ED] text-[#3D5A4D] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-[#25352E] uppercase tracking-wider">Evidence-Based</h2>
                  <p className="text-xs text-[#5C6B64] mt-0.5">Cognitive Behavioral (CBT) & EMDR Certified</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F5ECE5] text-[#8C6353] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-[#25352E] uppercase tracking-wider">Sanctuary Office</h2>
                  <p className="text-xs text-[#5C6B64] mt-0.5">123th Street 45 W, Santa Monica, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E5ECEF] text-[#365A66] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold text-[#25352E] uppercase tracking-wider">Hybrid Flexibility</h2>
                  <p className="text-xs text-[#5C6B64] mt-0.5">In-Person & Secure CA Telehealth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait component */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DoctorPortrait
              src="/images/dr-maya.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
              variant="hero"
              priority={true}
              showBadge={true}
              badgeText="Santa Monica Coastal Practice"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
