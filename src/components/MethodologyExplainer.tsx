import React, { useState } from 'react';
import { Brain, Eye, Sparkles, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface MethodologyProps {
  onOpenBooking: () => void;
}

export const MethodologyExplainer: React.FC<MethodologyProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'cbt' | 'emdr' | 'integration'>('cbt');

  return (
    <section id="methodology" className="py-20 bg-[#FAF8F5] relative border-b border-[#ECE5DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Evidence-Based Foundations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2924] font-normal tracking-tight">
            How CBT & EMDR Work Together
          </h2>
          <p className="text-[#55645E] text-base sm:text-lg leading-relaxed">
            True healing engages both the conscious cognitive mind and the deeper subcortical nervous system. Here is how our dual-evidence approach produces sustainable relief.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#EFE8DE] border border-[#DDD3C6] max-w-xl w-full">
            <button
              onClick={() => setActiveTab('cbt')}
              className={`flex-1 py-2.5 px-3 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'cbt'
                  ? 'bg-white text-[#22332A] shadow-sm font-semibold'
                  : 'text-[#61716A] hover:text-[#22332A]'
              }`}
            >
              Cognitive Behavioral (CBT)
            </button>
            <button
              onClick={() => setActiveTab('emdr')}
              className={`flex-1 py-2.5 px-3 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'emdr'
                  ? 'bg-white text-[#22332A] shadow-sm font-semibold'
                  : 'text-[#61716A] hover:text-[#22332A]'
              }`}
            >
              EMDR Therapy
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`flex-1 py-2.5 px-3 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'integration'
                  ? 'bg-white text-[#22332A] shadow-sm font-semibold'
                  : 'text-[#61716A] hover:text-[#22332A]'
              }`}
            >
              The Integrated Path
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD3] shadow-sm max-w-5xl mx-auto">
          
          {activeTab === 'cbt' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1ED] text-[#2D4539] text-xs font-semibold">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Cognitive Behavioral Therapy (CBT)</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2E27] font-semibold">
                  Rewiring Thought Patterns & Calming the Body
                </h3>
                <p className="text-[#4E5E57] text-sm sm:text-base leading-relaxed">
                  CBT is the gold standard for anxiety and panic. It operates on the empirically verified premise that our thoughts, emotions, physiological reactions, and behaviors are inextricably linked.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4C6C5C] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">Identifying Cognitive Traps:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">Notice catastrophizing, mind-reading, and perfectionistic standards that trigger unnecessary fight-or-flight reactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4C6C5C] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">Gentle Behavioral Exposure:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">Gradually re-engage with avoided activities, driving, social settings, or physiological panic sensations until they lose their threat value.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#4C6C5C] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">Practical Tools for Life:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">You will leave each session with concrete exercises to apply in your everyday routine between appointments.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DFD3] space-y-4">
                <h4 className="font-serif text-lg text-[#213028] font-semibold border-b border-[#EBE3D7] pb-2">
                  Best Suited For:
                </h4>
                <ul className="text-xs sm:text-sm text-[#4E5F58] space-y-2.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537666]"></span>
                    <span>Persistent generalized worry & "what-if" thoughts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537666]"></span>
                    <span>Panic disorder & physical sensation sensitivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537666]"></span>
                    <span>High-functioning perfectionism & imposter anxiety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#537666]"></span>
                    <span>Social anxiety and workplace performance fears</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'emdr' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEF1] text-[#294B56] text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>EMDR Certified (EMDRIA)</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2E27] font-semibold">
                  Neurological Reprocessing for Trauma & Triggers
                </h3>
                <p className="text-[#4E5E57] text-sm sm:text-base leading-relaxed">
                  Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched, non-invasive psychotherapy designed to resolve trauma and somatic distress that logic alone cannot touch.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E6573] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">Bilateral Stimulation:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">Uses alternating eye movements, acoustic tones, or gentle tactile pulsers to stimulate the brain’s natural REM-like information processing state.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E6573] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">No Endless Retelling:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">You do not have to describe traumatic memories in graphic detail. EMDR facilitates internal neurobiological resolution without retraumatization.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#3E6573] shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm text-[#203028]">Positive Belief Integration:</strong>
                      <p className="text-xs sm:text-sm text-[#576861]">Transforms crippling core beliefs like "I am in danger" or "I am powerless" into empowering truths like "I survived, and I am safe now."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DFD3] space-y-4">
                <h4 className="font-serif text-lg text-[#213028] font-semibold border-b border-[#EBE3D7] pb-2">
                  Best Suited For:
                </h4>
                <ul className="text-xs sm:text-sm text-[#4E5F58] space-y-2.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#416875]"></span>
                    <span>Single-event trauma (accidents, medical shocks, loss)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#416875]"></span>
                    <span>Complex relational trauma & childhood emotional neglect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#416875]"></span>
                    <span>Phobias, severe panic triggers & intrusive flashbacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#416875]"></span>
                    <span>Chronic burnout linked to subconscious fear of failure</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'integration' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE5] text-[#865942] text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Holistic Treatment Synergy</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2E27] font-semibold">
                  Why Both Modalities Together?
                </h3>
                <p className="text-[#4E5E57] text-sm sm:text-base leading-relaxed">
                  Many clients say: &ldquo;I understand my anxiety intellectually, but my body still reacts like it’s in mortal danger.&rdquo; That disconnect is why integrating CBT and EMDR is so powerful.
                </p>
                <p className="text-[#4E5E57] text-sm sm:text-base leading-relaxed">
                  CBT provides the immediate conscious grounding, reality-testing, and daily habits. EMDR reaches underneath to heal the stored emotional memories that generate the anxious or panic response in the first place.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#344C3F] text-white text-sm font-medium hover:bg-[#25392F] transition-all shadow-xs"
                  >
                    <span>Discuss Your Treatment Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DFD3] space-y-4">
                <div className="p-4 bg-white rounded-xl border border-[#E2D8CA] text-xs text-[#4F5F58]">
                  <strong className="text-sm text-[#25372F] block mb-1">Top-Down + Bottom-Up Care</strong>
                  <span className="text-[#5A6C64]">
                    Top-down (CBT) helps you make sense of your thoughts. Bottom-up (EMDR & Somatics) settles the body's autonomic nervous system.
                  </span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#E2D8CA] text-xs text-[#4F5F58]">
                  <strong className="text-sm text-[#25372F] block mb-1">Personalized Pacing</strong>
                  <span className="text-[#5A6C64]">
                    We never rush into traumatic memories until you possess solid self-regulation tools and feel 100% safe in session.
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
