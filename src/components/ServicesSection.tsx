import React, { useState } from 'react';
import { Activity, ShieldAlert, Sparkles, Flame, CheckCircle, ArrowRight, X, HeartPulse, Brain } from 'lucide-react';
import { SERVICES_DATA } from '../data/therapyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (prefillConcern?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'anxiety':
        return <Activity className="w-6 h-6 text-[#3F5B4D]" />;
      case 'panic':
        return <ShieldAlert className="w-6 h-6 text-[#9E5D4B]" />;
      case 'trauma':
        return <HeartPulse className="w-6 h-6 text-[#456C78]" />;
      case 'burnout':
        return <Flame className="w-6 h-6 text-[#A8723C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#3F5B4D]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Specialized Clinical Focus</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2924] font-normal tracking-tight">
            Targeted Care for <span className="italic font-medium text-[#375245]">Anxiety, Panic, Trauma & Burnout</span>
          </h2>
          <p className="text-[#55645E] text-base sm:text-lg leading-relaxed">
            Grounded in the science of the nervous system, our treatment combines Cognitive Behavioral Therapy (CBT) and Eye Movement Desensitization and Reprocessing (EMDR) for lasting relief.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E8DFD3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#BACCC1]"
            >
              <div className="space-y-6">
                {/* Header with Icon and Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-2xl bg-[#F4EFEA] group-hover:bg-[#EBF1ED] transition-colors shrink-0">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {service.modalities.slice(0, 2).map((mod, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#EBF1ED] text-[#334E41] tracking-wide"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1F2C26] mb-2.5 group-hover:text-[#2E483A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#4E5C56] text-base leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Common signs addressed */}
                <div className="pt-2">
                  <p className="text-xs font-semibold text-[#304138] uppercase tracking-wider mb-2.5">
                    Common Experiences Addressed:
                  </p>
                  <ul className="space-y-2">
                    {service.symptoms.slice(0, 3).map((symp, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm text-[#4E5D57]">
                        <CheckCircle className="w-4 h-4 text-[#688577] shrink-0 mt-0.5" />
                        <span>{symp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grounding Quote */}
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#ECE5DC] text-xs italic text-[#596A63]">
                  &ldquo;{service.quote}&rdquo;
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#EFE9DF] flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-sm font-medium text-[#3A5346] hover:text-[#24352D] inline-flex items-center gap-1.5 cursor-pointer group-hover:underline underline-offset-4"
                >
                  <span>Read Clinical Protocol</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="px-4 py-2 rounded-full bg-[#3B5447] hover:bg-[#2A3F34] text-white text-xs font-medium transition-colors shadow-xs"
                >
                  Consult on This
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for CBT & EMDR synergy */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#ECE6DE] via-[#E7EFEA] to-[#ECE6DE] border border-[#DCD3C7] text-center max-w-4xl mx-auto space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl text-[#23332B] font-semibold">
            Not sure whether CBT or EMDR is best for your current symptoms?
          </h3>
          <p className="text-sm sm:text-base text-[#4F5F58] max-w-2xl mx-auto">
            During our initial phone consultation, we discuss what you are feeling and tailor a synergistic blend of both methods to your personal timeline and comfort level.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#344C3F] text-white text-sm font-medium hover:bg-[#25392F] transition-all shadow-xs"
            >
              <span>Schedule a Free 15-Minute Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#DFD6CA] shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F2ECE4] text-[#4F5E58] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#EBF1ED]">
                  {getServiceIcon(selectedService.id)}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#1E2C25] font-semibold">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-[#5C6E66]">Dr. Maya Reynolds, PsyD &bull; Clinical Treatment Plan</p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E9E0D4] text-sm text-[#46554F] leading-relaxed">
                {selectedService.longDesc}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#25362F] uppercase tracking-wider mb-2">
                  Key Treatment Modalities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.modalities.map((mod, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-[#EBF1ED] text-[#2F473B] text-xs font-medium border border-[#C5D5CC]"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#25362F] uppercase tracking-wider mb-2">
                  Clinical Goals in Therapy
                </h4>
                <ul className="space-y-2">
                  {selectedService.treatmentGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#4B5A53]">
                      <CheckCircle className="w-4 h-4 text-[#537464] shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#ECE5DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#62736C]">
                  Available in Santa Monica & via California Telehealth
                </p>
                <button
                  onClick={() => {
                    const concern = selectedService.id;
                    setSelectedService(null);
                    onOpenBooking(concern);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3B5447] hover:bg-[#2A3F34] text-white text-sm font-medium transition-all"
                >
                  Book Consultation for {selectedService.title.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
