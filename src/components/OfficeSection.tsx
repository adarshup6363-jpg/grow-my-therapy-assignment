import React, { useState } from 'react';
import { 
  MapPin, 
  Sun, 
  ShieldCheck, 
  Coffee, 
  Sparkles, 
  Car, 
  Check, 
  Copy, 
  Navigation,
  Clock,
  Compass
} from 'lucide-react';
import { DOCTOR_INFO, OFFICE_FEATURES } from '../data/therapyData';

interface OfficeSectionProps {
  onOpenBooking: () => void;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(DOCTOR_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#B87D38]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#3D5B4D]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#8A5A44]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#3F6370]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#517565]" />;
      default:
        return <Compass className="w-5 h-5 text-[#3D5B4D]" />;
    }
  };

  return (
    <section id="office" className="py-20 bg-white relative border-b border-[#ECE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Required Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#4D6D5F]" />
            <span>Santa Monica, California</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2924] font-normal tracking-tight">
            Our Office - A Calm Space for Healing
          </h2>

          <p className="text-[#55645E] text-base sm:text-lg leading-relaxed">
            Located at <strong className="text-[#213129] font-medium">{DOCTOR_INFO.address}</strong>, our private Santa Monica sanctuary was thoughtfully designed from floor to ceiling to soothe an overactive nervous system the moment you step through the door.
          </p>
        </div>

        {/* Visual Showcase: Main Office Photography & Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Photo Gallery Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5DDD2] bg-[#F7F4EF]">
              <img
                src="/src/assets/images/calm_office_space_1789450446116.jpg"
                alt="Sunlit private psychotherapy office in Santa Monica at 123th Street 45 W"
                className="w-full h-[380px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-medium uppercase tracking-widest text-[#D4E4DC]">Santa Monica Consultation Suite</p>
                <p className="font-serif text-lg sm:text-xl font-medium">Private, sunlit therapy room with gentle natural lighting & organic textures</p>
              </div>
            </div>

            {/* Coastal & Ambient details row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-44 border border-[#E5DDD2]">
                <img
                  src="/src/assets/images/santa_monica_coast_1789450463627.jpg"
                  alt="Santa Monica coastal atmosphere"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-semibold">Minutes from Santa Monica Beach</p>
                  <p className="text-[11px] text-[#E0ECE5]">Quiet coastal sea breezes & peaceful walks</p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E5DDD2] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#3D5B4D] mb-1.5">
                    <Sun className="w-4 h-4 text-[#C48C45]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Natural Daylight</span>
                  </div>
                  <p className="text-xs text-[#52635C] leading-relaxed">
                    Diffused, warm Southern California sunlight designed to avoid harsh fluorescent glare and foster deep nervous system ease.
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#71827B] border-t border-[#EAE3DA]">
                  Sound-attenuated acoustic privacy &bull; HEPA filtered
                </div>
              </div>
            </div>
          </div>

          {/* Office Description & Details Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E6DDD0] space-y-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4E685B]">
                  Sanctuary In Santa Monica
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#E3EFE8] text-[#2C4A3C] font-medium">
                  Private Practice
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1E2C25] font-semibold">
                A Safe Physical Container
              </h3>
              <p className="text-[#4E5E57] text-sm leading-relaxed">
                When working through deep-seated anxiety, panic sensations, or painful trauma memories with EMDR, your environment matters immensely. You cannot regulate an overstimulated nervous system in a chaotic or clinical setting.
              </p>
              <p className="text-[#4E5E57] text-sm leading-relaxed">
                Here at <strong className="text-[#203028]">123th Street 45 W, Santa Monica</strong>, every detail—from the acoustic insulation and comfortable linen armchairs to the calming herbal teas and warm lighting—is intentionally curated to help your body recognize that you are safe.
              </p>
            </div>

            {/* Quick Address Card with copy action */}
            <div className="p-4 bg-white rounded-2xl border border-[#DFD6CA] space-y-3 shadow-xs">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#3F5B4D] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#25362F] uppercase tracking-wider">Office Location</p>
                    <p className="text-sm font-medium text-[#1E2B25] mt-0.5">{DOCTOR_INFO.address}</p>
                    <p className="text-xs text-[#62736C]">Santa Monica, California 90401</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-xl bg-[#FAF8F5] hover:bg-[#EFE9DF] text-[#415C4E] border border-[#DDD3C6] transition-colors cursor-pointer shrink-0"
                  title="Copy address to clipboard"
                  aria-label="Copy address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#F0EBE3] text-xs text-[#52635C]">
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#3D5B4D]" />
                  <span>On-site Garage Parking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#3D5B4D]" />
                  <span>Mon – Fri By Appointment</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#344C3F] hover:bg-[#25392F] text-white text-sm font-medium shadow-sm transition-all"
              >
                <span>Request Santa Monica In-Person Session</span>
              </button>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(DOCTOR_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#BACCC1] text-[#344C3F] hover:bg-white text-sm font-medium transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Directions</span>
              </a>
            </div>

          </div>

        </div>

        {/* 6 Key Architectural & Therapeutic Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICE_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E8DFD3] hover:border-[#BACCC1] transition-all duration-200 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#DDD4C7] flex items-center justify-center shadow-xs">
                {getFeatureIcon(feature.icon)}
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#202E27]">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#54645E] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
