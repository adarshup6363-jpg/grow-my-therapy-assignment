import React, { useState } from 'react';
import { Award, GraduationCap, BookOpen, CheckCircle2, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';
import { DoctorPortrait } from './DoctorPortrait';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'approach' | 'credentials'>('bio');

  return (
    <section id="about" className="py-20 bg-white border-y border-[#ECE5DB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2924] font-normal tracking-tight">
            Hi, I’m <span className="italic font-medium text-[#375245]">Dr. Maya Reynolds</span>.
          </h2>
          <p className="text-[#55645E] text-lg mt-3 leading-relaxed">
            I am a Licensed Clinical Psychologist based in Santa Monica, CA, dedicated to helping individuals navigate the complexities of anxiety, panic, trauma, and burnout with deep warmth and rigorous clinical tools.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#E8E1D7] mb-10 gap-2 sm:gap-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('bio')}
            className={`pb-3 text-sm sm:text-base font-medium cursor-pointer transition-all border-b-2 whitespace-nowrap px-1 ${
              activeTab === 'bio'
                ? 'border-[#3D5649] text-[#203129] font-semibold'
                : 'border-transparent text-[#6F7D77] hover:text-[#203129]'
            }`}
          >
            My Story & Philosophy
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`pb-3 text-sm sm:text-base font-medium cursor-pointer transition-all border-b-2 whitespace-nowrap px-1 ${
              activeTab === 'approach'
                ? 'border-[#3D5649] text-[#203129] font-semibold'
                : 'border-transparent text-[#6F7D77] hover:text-[#203129]'
            }`}
          >
            How We Work Together
          </button>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`pb-3 text-sm sm:text-base font-medium cursor-pointer transition-all border-b-2 whitespace-nowrap px-1 ${
              activeTab === 'credentials'
                ? 'border-[#3D5649] text-[#203129] font-semibold'
                : 'border-transparent text-[#6F7D77] hover:text-[#203129]'
            }`}
          >
            Education & Licensure
          </button>
        </div>

        {/* Tab 1: Bio & Story */}
        {activeTab === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-6 text-[#3F4D47] text-base sm:text-lg leading-relaxed font-normal">
              <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#EBE3D7] shadow-xs">
                <p className="font-serif italic text-xl text-[#2B3B33] leading-relaxed">
                  &ldquo;Welcome. If you are reading this, chances are you’ve been carrying a great deal on your shoulders—perhaps the relentless hum of anxiety, the sudden shock of panic, past experiences that refuse to settle, or the deep exhaustion of perfectionism and burnout.&rdquo;
                </p>
              </div>

              <p>
                My practice was founded on a simple yet profound belief: <strong className="text-[#1E2924] font-semibold">healing begins in a space where you feel genuinely seen, physically safe, and clinically supported.</strong> In modern culture, especially in high-intensity hubs like Los Angeles, we are often rewarded for pushing past our distress and wearing emotional exhaustion as a badge of honor.
              </p>

              <p>
                Rather than relying on sterile textbook prescriptions or vague platitudes, my work is collaborative, human, and grounded in neurobiology. We combine the practical cognitive reframing and behavioral tools of Cognitive Behavioral Therapy (CBT) with the profound neurological processing power of Eye Movement Desensitization and Reprocessing (EMDR).
              </p>

              <p>
                Whether we meet in my sunlit private office at <span className="underline decoration-[#7C9789] underline-offset-4 text-[#24352D] font-medium">123th Street 45 W in Santa Monica</span> just blocks from the ocean breeze, or through secure California telehealth, my goal is to help you quiet the internal alarm bells, reconnect with your resilience, and reclaim a life of ease, dignity, and authentic joy.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full bg-[#3B5447] text-white font-medium hover:bg-[#2C3F35] transition-all text-sm shadow-sm"
                >
                  Schedule an Initial Intake
                </button>
                <a
                  href="#office"
                  className="px-6 py-3 rounded-full border border-[#BACCC1] text-[#344C3F] font-medium hover:bg-[#F4EFEA] transition-all text-sm"
                >
                  Explore The Santa Monica Office
                </a>
              </div>
            </div>

            {/* Sidebar info card with Doctor Portrait */}
            <div className="lg:col-span-4 bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] space-y-6">
              {/* Doctor Portrait Image Component */}
              <DoctorPortrait
                src="/images/dr-maya.png"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                variant="about"
                className="shadow-sm"
              />

              <h3 className="font-serif text-xl text-[#213028] font-semibold border-b border-[#E6DDD1] pb-3">
                At a Glance
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF1ED] text-[#395346] shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#202E27]">Doctor of Psychology (PsyD)</h4>
                    <p className="text-xs text-[#5D6B65]">Pepperdine University • Clinical Psychology</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF1ED] text-[#395346] shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#202E27]">Certified EMDR Therapist</h4>
                    <p className="text-xs text-[#5D6B65]">EMDRIA Credentialed Trauma Specialist</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF1ED] text-[#395346] shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#202E27]">Warm & Collaborative</h4>
                    <p className="text-xs text-[#5D6B65]">No clinical jargon, no judgment, real solutions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#EBF1ED] text-[#395346] shrink-0 mt-0.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#202E27]">12+ Years Experience</h4>
                    <p className="text-xs text-[#5D6B65]">Serving high-achievers, creatives & trauma survivors</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DDD1] text-xs text-[#62736C] space-y-1">
                <p><strong>License:</strong> {DOCTOR_INFO.license}</p>
                <p><strong>Office:</strong> {DOCTOR_INFO.address}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Clinical Approach */}
        {activeTab === 'approach' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E9E1D5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1ED] text-[#375245] flex items-center justify-center font-serif text-lg font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F2C26]">Somatic & Nervous System Safety</h3>
              <p className="text-sm text-[#52605A] leading-relaxed">
                Before we examine distressing thoughts or memories, we establish a grounded baseline. You learn real-time physiological techniques to de-escalate anxiety and panic before they escalate into overwhelming loops.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E9E1D5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1ED] text-[#375245] flex items-center justify-center font-serif text-lg font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F2C26]">CBT Thought Restructuring</h3>
              <p className="text-sm text-[#52605A] leading-relaxed">
                We unmask cognitive distortions—such as catastrophizing, black-and-white thinking, and harsh self-criticism. We replace automatic fear scripts with adaptive, resilient mental models that hold up under pressure.
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] rounded-2xl border border-[#E9E1D5] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF1ED] text-[#375245] flex items-center justify-center font-serif text-lg font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1F2C26]">EMDR Memory Desensitization</h3>
              <p className="text-sm text-[#52605A] leading-relaxed">
                For traumatic events or painful developmental experiences, EMDR utilizes bilateral stimulation to process the emotional charge out of past memories, allowing you to recall them without somatic distress.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Credentials & Training */}
        {activeTab === 'credentials' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8DFD3] space-y-6">
              <h3 className="font-serif text-xl text-[#213028] font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#425F51]" />
                <span>Academic & Clinical Degrees</span>
              </h3>
              <div className="space-y-4">
                {DOCTOR_INFO.education.map((item, idx) => (
                  <div key={idx} className="pb-3 border-b border-[#ECE3D8] last:border-0 last:pb-0">
                    <p className="font-semibold text-sm text-[#23332B]">{item.degree}</p>
                    <p className="text-xs text-[#55675F] mt-0.5">{item.school} &bull; <span className="italic text-[#75847D]">{item.year}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E8DFD3] space-y-6">
              <h3 className="font-serif text-xl text-[#213028] font-semibold flex items-center gap-2">
                <Award className="w-5 h-5 text-[#425F51]" />
                <span>Professional Memberships & Affiliations</span>
              </h3>
              <ul className="space-y-3">
                {DOCTOR_INFO.affiliations.map((org, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-[#3E4E47]">
                    <CheckCircle2 className="w-4 h-4 text-[#567566] shrink-0" />
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-white rounded-xl border border-[#E2D9CC] text-xs text-[#5D6B64] space-y-1">
                <p className="font-semibold text-[#25362E]">State Licensure Verification</p>
                <p>Licensed by the California Board of Psychology under license number PSY 31842. Verified in good standing.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
