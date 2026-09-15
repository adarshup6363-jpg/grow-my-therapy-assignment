import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MethodologyExplainer } from './components/MethodologyExplainer';
import { OfficeSection } from './components/OfficeSection';
import { GroundingExercise } from './components/GroundingExercise';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefillConcern, setPrefillConcern] = useState<string | undefined>(undefined);

  const handleOpenBooking = (concern?: string) => {
    setPrefillConcern(concern);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPrefillConcern(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#262E2B]">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Me Section using her text */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section: Anxiety, Panic, Trauma, Burnout (CBT & EMDR) */}
        <ServicesSection onOpenBooking={(concern) => handleOpenBooking(concern)} />

        {/* 4. Methodology: CBT & EMDR in Depth */}
        <MethodologyExplainer onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Custom Required Section: Our Office - A Calm Space for Healing */}
        <OfficeSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Interactive Somatic Grounding & Breathing Tool */}
        <GroundingExercise />

        {/* 7. FAQs */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Contact & Consultation Request */}
        <ContactSection prefillConcern={prefillConcern} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking / Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        prefillConcern={prefillConcern}
      />
    </div>
  );
}
