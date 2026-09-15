import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/therapyData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Sessions', 'Insurance', 'Office'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FAF8F5] relative border-b border-[#ECE5DB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2924] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#55645E] text-base leading-relaxed">
            Clear, transparent answers to help you feel informed and comfortable every step of the way.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#344C3F] text-white shadow-xs'
                  : 'bg-white text-[#566861] border border-[#DDD4C7] hover:bg-[#F2EDE4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5]/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-medium text-[#1F2E27]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#FAF8F5] border border-[#E2D8CA] text-[#4E6B5C] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#EBF1ED]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4E5E57] leading-relaxed border-t border-[#F3ECE4] bg-[#FAF8F5]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-[#E8DFD3] max-w-xl mx-auto space-y-2">
          <p className="font-serif text-lg text-[#203028] font-medium">Have a specific question not covered here?</p>
          <p className="text-xs text-[#5C6E66]">
            Dr. Maya Reynolds is glad to speak with you directly during a complimentary phone consultation.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#344C3F] text-white text-xs font-medium hover:bg-[#25392F] transition-all"
            >
              Schedule Free 15-Min Phone Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
