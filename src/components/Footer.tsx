import React from 'react';
import { MapPin, Phone, Mail, Compass, ShieldAlert, ArrowUp } from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1F2C26] text-[#D8E3DD] pt-16 pb-12 border-t border-[#2D3E36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2E4238]">
          
          {/* Col 1: Brand & Licensing */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#2E4238] border border-[#445E51] flex items-center justify-center text-[#8EA99A]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-medium text-white block">
                  Dr. Maya Reynolds, PsyD
                </span>
                <span className="text-xs uppercase tracking-widest text-[#8FA498]">
                  Clinical Psychologist
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#A7B9AF] leading-relaxed">
              Evidence-based psychotherapy specializing in Anxiety, Panic Disorders, Trauma Recovery (EMDR), and Executive Burnout. Offering warm, trauma-informed care in Santa Monica, California and statewide telehealth.
            </p>

            <div className="p-3 bg-[#26372F] rounded-xl border border-[#354C41] text-[11px] text-[#B5C7BD] space-y-1">
              <p><strong>Licensure:</strong> {DOCTOR_INFO.license}</p>
              <p><strong>Practice:</strong> Santa Monica, CA &bull; Telehealth Statewide</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Explore Practice
            </h4>
            <ul className="space-y-2 text-xs text-[#A7B9AF]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dr. Reynolds</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Specialized Services (CBT & EMDR)</a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors">Our Office - Santa Monica Sanctuary</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">How CBT & EMDR Work Together</a>
              </li>
              <li>
                <a href="#grounding" className="hover:text-white transition-colors">Interactive Grounding Tool</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">Insurance & Superbills FAQ</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Santa Monica Office Coordinates */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Santa Monica Office & Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#A7B9AF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8EA99A] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{DOCTOR_INFO.address}</p>
                  <p className="text-[#8FA498]">Santa Monica, CA 90401 (Reserved Garage Parking)</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8EA99A] shrink-0" />
                <a href="tel:3105550194" className="hover:text-white transition-colors">
                  {DOCTOR_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8EA99A] shrink-0" />
                <a href={`mailto:${DOCTOR_INFO.email}`} className="hover:text-white transition-colors">
                  {DOCTOR_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#3D5749] hover:bg-[#4E6F5E] text-white text-xs font-medium transition-all shadow-xs"
              >
                Schedule Free 15-Minute Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Clinical Emergency & Good Faith Estimate Notice */}
        <div className="py-6 border-b border-[#2E4238] space-y-3">
          <div className="flex items-start gap-2.5 text-[11px] text-[#A1B3A9] leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-[#B58A7A] shrink-0 mt-0.5" />
            <p>
              <strong>Crisis Notice:</strong> If you are experiencing a psychiatric emergency, suicidal thoughts, or severe danger, please do not use this website. Call <strong>911</strong> or text/call the Suicide & Crisis Lifeline at <strong>988</strong> immediately.
            </p>
          </div>
          <p className="text-[11px] text-[#86998E] leading-relaxed">
            <strong>Good Faith Estimate & No Surprises Act:</strong> You have the right to receive a Good Faith Estimate explaining how much your medical and mental health care will cost under federal law. A Good Faith Estimate will be provided in writing before our first scheduled appointment.
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86998E]">
          <p>
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved. Santa Monica, California.
          </p>

          <div className="flex items-center gap-4">
            <span>HIPAA Compliant Practice</span>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
