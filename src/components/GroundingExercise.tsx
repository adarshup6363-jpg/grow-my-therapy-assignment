import React, { useState, useEffect } from 'react';
import { Wind, Eye, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';

export const GroundingExercise: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'breathing' | 'sensory'>('breathing');
  
  // Breathing state
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Pause'>('Inhale');
  const [countdown, setCountdown] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  // 5-4-3-2-1 sensory step
  const [sensoryStep, setSensoryStep] = useState(0);

  const sensoryPrompts = [
    { count: '5', label: 'Things You Can See', prompt: 'Look around your room right now. Notice 5 objects—a shaft of light, a plant leaf, the grain in a wooden table, a ceramic mug, a shadow.' },
    { count: '4', label: 'Things You Can Touch', prompt: 'Reach out and touch 4 textures: the fabric of your sweater, the cool surface of a desk, the weight of your feet on the floor, the edge of a book.' },
    { count: '3', label: 'Things You Can Hear', prompt: 'Close your eyes for a moment. Listen for 3 distinct sounds: distant traffic, the hum of a fan or refrigerator, your own gentle breath.' },
    { count: '2', label: 'Things You Can Smell', prompt: 'Notice 2 scents in the air: morning coffee, fresh air from a window, a scented candle, or simply the neutral scent of your room.' },
    { count: '1', label: 'Thing You Feel Grateful For', prompt: 'Anchor yourself with 1 comforting thought or feeling: taking this moment to care for yourself right now.' }
  ];

  useEffect(() => {
    let timer: any = null;
    if (isBreathingActive) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            // transition phase
            if (breathPhase === 'Inhale') {
              setBreathPhase('Hold');
              return 4;
            } else if (breathPhase === 'Hold') {
              setBreathPhase('Exhale');
              return 4;
            } else if (breathPhase === 'Exhale') {
              setBreathPhase('Pause');
              return 4;
            } else {
              setBreathPhase('Inhale');
              setCycleCount((c) => c + 1);
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isBreathingActive, breathPhase]);

  const toggleBreathing = () => {
    setIsBreathingActive(!isBreathingActive);
  };

  const resetBreathing = () => {
    setIsBreathingActive(false);
    setBreathPhase('Inhale');
    setCountdown(4);
    setCycleCount(0);
  };

  return (
    <section id="grounding" className="py-20 bg-white relative border-b border-[#ECE5DB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1ED] text-[#344C3F] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Somatic Regulation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2924] font-normal tracking-tight">
            Take a Grounding Moment
          </h2>
          <p className="text-[#55645E] text-base leading-relaxed">
            If you are feeling overwhelmed, take 60 seconds with Dr. Maya's guided nervous system reset tool below.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-[#F0EAE1] border border-[#DDD3C6]">
            <button
              onClick={() => setActiveMode('breathing')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'breathing'
                  ? 'bg-white text-[#25392F] shadow-xs font-semibold'
                  : 'text-[#65766F] hover:text-[#25392F]'
              }`}
            >
              <Wind className="w-4 h-4" />
              <span>Box Breathing (4-4-4-4)</span>
            </button>
            <button
              onClick={() => setActiveMode('sensory')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeMode === 'sensory'
                  ? 'bg-white text-[#25392F] shadow-xs font-semibold'
                  : 'text-[#65766F] hover:text-[#25392F]'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>5-4-3-2-1 Sensory Grounding</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Box Breathing */}
        {activeMode === 'breathing' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E8DFD3] text-center max-w-xl mx-auto shadow-xs">
            {/* Visual breathing circle */}
            <div className="relative w-56 h-56 mx-auto flex items-center justify-center mb-8">
              {/* Outer pulsing ring */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-1000 ease-in-out border-4 ${
                  breathPhase === 'Inhale'
                    ? 'scale-110 border-[#8EA99A] bg-[#EBF1ED]/80'
                    : breathPhase === 'Hold'
                    ? 'scale-110 border-[#4D6D5F] bg-[#E0ECE5]'
                    : breathPhase === 'Exhale'
                    ? 'scale-75 border-[#BACCC1] bg-[#F2EDE4]/60'
                    : 'scale-75 border-[#BACCC1] bg-[#FAF8F5]'
                }`}
              />

              {/* Inner content */}
              <div className="relative z-10 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#5B6C65]">
                  {isBreathingActive ? breathPhase : 'Ready'}
                </p>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-[#1E2B24]">
                  {isBreathingActive ? countdown : '4'}
                </p>
                <p className="text-[11px] text-[#71827B]">
                  {isBreathingActive ? `Cycle ${cycleCount + 1}` : 'Seconds'}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#4F5E57] max-w-md mx-auto mb-6 leading-relaxed">
              {breathPhase === 'Inhale' && 'Inhale gently through your nose, filling your lower belly with calm.'}
              {breathPhase === 'Hold' && 'Gently hold this breath, resting peacefully without strain.'}
              {breathPhase === 'Exhale' && 'Release slowly through parted lips, letting your shoulders drop.'}
              {breathPhase === 'Pause' && 'Rest quietly in the stillness before the next gentle breath.'}
              {!isBreathingActive && 'Box breathing stimulates the vagus nerve, sending an immediate signal of biological safety to your brain.'}
            </p>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={toggleBreathing}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#344C3F] hover:bg-[#25392F] text-white text-sm font-medium transition-all shadow-sm"
              >
                {isBreathingActive ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause Exercise</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Start Breathing Reset</span>
                  </>
                )}
              </button>

              <button
                onClick={resetBreathing}
                className="p-3 rounded-full bg-white border border-[#D5CDC1] hover:bg-[#F2ECE4] text-[#425E50] transition-colors"
                title="Reset"
                aria-label="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Mode 2: 5-4-3-2-1 Sensory Grounding */}
        {activeMode === 'sensory' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E8DFD3] max-w-2xl mx-auto shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#E9E1D5] pb-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#EBF1ED] text-[#2F493D] font-serif text-xl font-bold flex items-center justify-center">
                  {sensoryPrompts[sensoryStep].count}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1E2B25]">
                    {sensoryPrompts[sensoryStep].label}
                  </h3>
                  <p className="text-xs text-[#5F7068]">Step {sensoryStep + 1} of 5 &bull; Sensory Reconnection</p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#465E52] bg-white px-3 py-1 rounded-full border border-[#D8CEBF]">
                5-4-3-2-1 Method
              </span>
            </div>

            <p className="text-base text-[#3E4F47] leading-relaxed py-2">
              {sensoryPrompts[sensoryStep].prompt}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-[#E9E1D5]">
              <button
                onClick={() => setSensoryStep((prev) => Math.max(0, prev - 1))}
                disabled={sensoryStep === 0}
                className="px-4 py-2 rounded-xl text-xs font-medium border border-[#D5CDC1] disabled:opacity-30 hover:bg-white text-[#30473B]"
              >
                Previous
              </button>

              <div className="flex gap-1.5">
                {sensoryPrompts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSensoryStep(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      sensoryStep === i ? 'bg-[#344C3F] scale-125' : 'bg-[#D3C8B9]'
                    }`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSensoryStep((prev) => Math.min(sensoryPrompts.length - 1, prev + 1))}
                disabled={sensoryStep === sensoryPrompts.length - 1}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-[#344C3F] text-white disabled:opacity-30 hover:bg-[#25392F]"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
