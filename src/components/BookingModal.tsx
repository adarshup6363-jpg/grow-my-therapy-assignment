import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldCheck, Video, Building } from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillConcern?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillConcern = 'anxiety'
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [format, setFormat] = useState<'in-person' | 'telehealth'>('in-person');
  const [selectedDay, setSelectedDay] = useState<string>('Tomorrow');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState(prefillConcern);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const days = [
    { label: 'Tomorrow', date: 'Wednesday' },
    { label: 'Thursday', date: 'Oct 15' },
    { label: 'Friday', date: 'Oct 16' },
    { label: 'Monday', date: 'Oct 19' },
  ];

  const timeSlots = [
    '9:30 AM',
    '10:30 AM',
    '11:45 AM',
    '1:30 PM',
    '3:00 PM',
    '4:15 PM'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleResetAndClose = () => {
    setIsBooked(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full max-h-[95vh] overflow-y-auto border border-[#DFD6CA] shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE9DF] text-[#4E5F57] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF1ED] text-[#2F4B3C] border border-[#BACCC1] flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B24] font-semibold">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-[#4E5E57] max-w-md mx-auto leading-relaxed">
              We look forward to speaking with you, <strong className="text-[#1F2E27]">{name}</strong>. A calendar invitation and call details have been dispatched to <span className="underline">{email}</span>.
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#E4DACD] text-left max-w-sm mx-auto text-xs text-[#52635C] space-y-1.5">
              <p><strong>Appointment:</strong> 15-Minute Clinical Consultation</p>
              <p><strong>Date & Time:</strong> {selectedDay} at {selectedTime}</p>
              <p>
                <strong>Format:</strong> {format === 'in-person' ? `In-Person (${DOCTOR_INFO.address})` : 'California Telehealth (Secure Video)'}
              </p>
              <p><strong>Clinician:</strong> {DOCTOR_INFO.name}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full bg-[#344C3F] text-white text-xs font-medium hover:bg-[#25392F] transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4C685A]">
                Complimentary 15-Min Phone Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E2B24] font-semibold">
                Schedule Time With Dr. Reynolds
              </h3>
              <p className="text-xs text-[#5E7068]">
                A confidential, no-obligation conversation to discuss your goals and review CBT/EMDR fit.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              
              {/* Step 1: Format & Time Slot */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider">
                  1. Choose Session Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormat('in-person')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      format === 'in-person'
                        ? 'border-[#3D5749] bg-white ring-2 ring-[#3D5749]/10 shadow-xs'
                        : 'border-[#DDD4C7] bg-[#FAF8F5] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#344C3F] mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-xs font-bold">Santa Monica Office</span>
                    </div>
                    <p className="text-[11px] text-[#63746C]">123th Street 45 W</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormat('telehealth')}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      format === 'telehealth'
                        ? 'border-[#3D5749] bg-white ring-2 ring-[#3D5749]/10 shadow-xs'
                        : 'border-[#DDD4C7] bg-[#FAF8F5] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#344C3F] mb-1">
                      <Video className="w-4 h-4" />
                      <span className="text-xs font-bold">CA Telehealth</span>
                    </div>
                    <p className="text-[11px] text-[#63746C]">Secure HIPAA Video</p>
                  </button>
                </div>
              </div>

              {/* Day & Time selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider">
                  2. Select Consultation Day & Window
                </label>
                
                <div className="grid grid-cols-4 gap-2">
                  {days.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setSelectedDay(d.label)}
                      className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                        selectedDay === d.label
                          ? 'bg-[#344C3F] text-white border-[#344C3F] font-semibold'
                          : 'bg-white border-[#DDD4C7] text-[#3D4F46] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      <p className="text-xs font-medium">{d.label}</p>
                      <p className="text-[10px] opacity-75">{d.date}</p>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-2 text-center rounded-xl text-xs border transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-[#EBF1ED] border-[#425F50] text-[#243E31] font-bold shadow-xs'
                          : 'bg-white border-[#DDD4C7] text-[#55675F] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2 border-t border-[#E8DFD3]">
                <label className="block text-xs font-semibold text-[#293A32] uppercase tracking-wider">
                  3. Your Details
                </label>

                <div className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD4C7] text-sm text-[#1E2B24] placeholder:text-[#9EA8A3] outline-none focus:border-[#3D5749]"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD4C7] text-sm text-[#1E2B24] placeholder:text-[#9EA8A3] outline-none focus:border-[#3D5749]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD4C7] text-sm text-[#1E2B24] placeholder:text-[#9EA8A3] outline-none focus:border-[#3D5749]"
                    />
                  </div>

                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#DDD4C7] text-sm text-[#1E2B24] outline-none focus:border-[#3D5749] cursor-pointer"
                  >
                    <option value="anxiety">Anxiety & Chronic Worry</option>
                    <option value="panic">Panic Attacks & Bodily Sensations</option>
                    <option value="trauma">Trauma & PTSD Recovery (EMDR)</option>
                    <option value="burnout">High-Functioning Burnout & Perfectionism</option>
                    <option value="other">General Life Transition</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#344C3F] hover:bg-[#24382E] text-white font-medium text-sm transition-all shadow-md cursor-pointer"
                >
                  Confirm Free Consultation &bull; {selectedDay} at {selectedTime}
                </button>
              </div>

              <p className="text-[11px] text-[#71827B] text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4D6D5E]" />
                <span>Confidential. No credit card required. Zero obligation.</span>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
