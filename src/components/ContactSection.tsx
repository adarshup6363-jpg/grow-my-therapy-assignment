import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Send, 
  AlertCircle,
  ShieldCheck,
  Building2,
  Navigation
} from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';
import { ConsultationFormData } from '../types';

interface ContactSectionProps {
  prefillConcern?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillConcern }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredFormat: 'in-person',
    primaryConcern: (prefillConcern as any) || 'anxiety',
    preferredTime: 'morning',
    message: '',
    consent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real brief network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredFormat: 'in-person',
      primaryConcern: 'anxiety',
      preferredTime: 'morning',
      message: '',
      consent: true
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Dr. Reynolds</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E2924] font-normal tracking-tight">
            Begin Your Healing Journey
          </h2>
          <p className="text-[#55645E] text-base sm:text-lg leading-relaxed">
            Reach out to schedule your free 15-minute consultation, ask a question about CBT/EMDR, or request an initial intake at our Santa Monica office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details & Location & Safety notice */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Santa Monica Office Card */}
            <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] space-y-5">
              <h3 className="font-serif text-xl font-semibold text-[#1F2E27] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#3D5B4D]" />
                <span>Santa Monica Practice</span>
              </h3>

              <div className="space-y-4 text-sm text-[#4E5E57]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#3D5B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#203028] block">Office Address:</strong>
                    <span>{DOCTOR_INFO.address}</span>
                    <span className="block text-xs text-[#71827B]">Santa Monica, California 90401</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(DOCTOR_INFO.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#3A5649] hover:underline mt-1"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#3D5B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#203028] block">Direct Phone:</strong>
                    <a href="tel:3105550194" className="hover:text-[#284135] font-medium transition-colors">
                      {DOCTOR_INFO.phone}
                    </a>
                    <p className="text-xs text-[#71827B]">Confidential practice voicemail</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#3D5B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#203028] block">Confidential Email:</strong>
                    <a href={`mailto:${DOCTOR_INFO.email}`} className="hover:text-[#284135] font-medium transition-colors">
                      {DOCTOR_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#3D5B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#203028] block">Practice Hours:</strong>
                    <span>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</span>
                    <p className="text-xs text-[#71827B]">By Appointment Only</p>
                  </div>
                </div>
              </div>

              {/* Confidentiality seal */}
              <div className="p-3 bg-white rounded-xl border border-[#E3D9CC] flex items-center gap-2.5 text-xs text-[#52635C]">
                <ShieldCheck className="w-4 h-4 text-[#426152] shrink-0" />
                <span>Strict HIPAA Compliance &bull; Complete Medical Privacy</span>
              </div>
            </div>

            {/* Crisis Disclaimer Card */}
            <div className="p-5 bg-[#F9F5F1] rounded-2xl border border-[#E8DFD3] space-y-2">
              <div className="flex items-center gap-2 text-[#995B48]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">Crisis & Emergency Notice</span>
              </div>
              <p className="text-xs text-[#5E6D67] leading-relaxed">
                If you are experiencing a life-threatening psychological emergency, acute suicidal distress, or immediate danger, please do not use this contact form. Call <strong>911</strong> or contact the 24/7 Suicide & Crisis Lifeline by dialing <strong>988</strong> immediately.
              </p>
            </div>

          </div>

          {/* Right Column: Consultation Request Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-[#E8DFD3] shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#EBF1ED] text-[#344C3F] flex items-center justify-center mx-auto border border-[#BACCC1]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2924] font-semibold">
                  Consultation Request Received
                </h3>
                <p className="text-[#51615A] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#203028]">{formData.fullName}</strong>. Dr. Maya Reynolds personally reviews all inquiries and will be in touch via {formData.email || formData.phone} within 24–48 business hours.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-[#E4DACD] text-left max-w-sm mx-auto text-xs text-[#576962] space-y-1.5">
                  <p><strong>Preferred Format:</strong> {formData.preferredFormat === 'in-person' ? 'In-Person (Santa Monica Office)' : 'California Telehealth'}</p>
                  <p><strong>Primary Clinical Area:</strong> {formData.primaryConcern.toUpperCase()}</p>
                  <p><strong>Time of Day:</strong> {formData.preferredTime.toUpperCase()}</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#BACCC1] text-[#344C3F] text-xs font-medium hover:bg-white transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#E7DFD3] pb-4 mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1E2924] font-semibold">
                    Request a Free 15-Minute Consultation
                  </h3>
                  <p className="text-xs text-[#5D6F67] mt-1">
                    Please share a few brief details. All submissions are strictly confidential.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Alexandra Bennett"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] placeholder:text-[#9EA8A3] transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., alexandra@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] placeholder:text-[#9EA8A3] transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., (310) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] placeholder:text-[#9EA8A3] transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Preferred Session Format
                    </label>
                    <select
                      value={formData.preferredFormat}
                      onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] transition-all outline-none cursor-pointer"
                    >
                      <option value="in-person">In-Person (123th Street 45 W, Santa Monica)</option>
                      <option value="telehealth">California Telehealth (Virtual)</option>
                      <option value="either">Flexible / Hybrid (Either)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Primary Focus Area
                    </label>
                    <select
                      value={formData.primaryConcern}
                      onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] transition-all outline-none cursor-pointer"
                    >
                      <option value="anxiety">Anxiety & Chronic Worry (CBT)</option>
                      <option value="panic">Panic Attacks & Bodily Sensations (CBT)</option>
                      <option value="trauma">Trauma & PTSD Recovery (EMDR)</option>
                      <option value="burnout">Burnout & Perfectionism</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                      Best Time for 15-Min Call
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] transition-all outline-none cursor-pointer"
                    >
                      <option value="morning">Morning (9:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="evening">Late Afternoon / Evening (4:00 PM – 6:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider mb-1.5">
                    What brings you to therapy? (Optional & Confidential)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are seeking support with, or any questions about CBT/EMDR..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C6] focus:border-[#4B6858] focus:ring-1 focus:ring-[#4B6858] text-sm text-[#1E2924] placeholder:text-[#9EA8A3] transition-all outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent-check"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded text-[#344C3F] focus:ring-[#344C3F] cursor-pointer"
                  />
                  <label htmlFor="consent-check" className="text-xs text-[#55675F] leading-snug cursor-pointer">
                    I understand this form transmits confidential inquiry details to Dr. Maya Reynolds, PsyD to coordinate a consultation and is not for acute emergency medical services.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#344C3F] hover:bg-[#25392F] text-white font-medium shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#BACCC1]" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
