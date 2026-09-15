import { ServiceItem, OfficeFeature, FaqItem } from '../types';

export const DOCTOR_INFO = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  license: "California Board of Psychology License #PSY 31842",
  location: "Santa Monica, California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  phone: "(310) 555-0194",
  email: "care@drmayareynolds.com",
  image: "/images/dr-maya.png",
  imageAlt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
  experienceYears: 12,
  primaryModalities: ["Cognitive Behavioral Therapy (CBT)", "EMDR Certified Therapist", "Somatic Grounding"],
  bio: `Welcome. If you are reading this, chances are you’ve been carrying a great deal on your shoulders—perhaps the relentless hum of anxiety, the sudden shock of panic, past experiences that refuse to settle, or the deep exhaustion of perfectionism and burnout.

I am a Licensed Clinical Psychologist based in Santa Monica, California. My practice was founded on a simple yet profound belief: healing begins in a space where you feel genuinely seen, physically safe, and clinically supported. 

Rather than relying on sterile textbook prescriptions, my work is collaborative, warm, and deeply evidence-based. We combine the practical cognitive reframing and behavioral tools of Cognitive Behavioral Therapy (CBT) with the profound neurological processing power of Eye Movement Desensitization and Reprocessing (EMDR). Whether we meet in my sunlit private office just blocks from the ocean breeze or through secure California telehealth, my goal is to help you quiet the internal alarm bells, reconnect with your resilience, and reclaim a life of ease and clarity.`,
  education: [
    { degree: "Doctor of Psychology (PsyD) in Clinical Psychology", school: "Pepperdine University", year: "Graduated with Honors" },
    { degree: "B.A. in Psychology & Social Behavior", school: "University of California, Los Angeles (UCLA)", year: "Summa Cum Laude" },
    { degree: "Certified EMDR Therapist", school: "EMDR International Association (EMDRIA)", year: "Advanced Clinical Practice" },
    { degree: "Postdoctoral Fellowship in Anxiety & Trauma Disorders", school: "Southern California Institute for Mental Health", year: "Specialized Residency" },
  ],
  affiliations: [
    "American Psychological Association (APA)",
    "California Psychological Association (CPA)",
    "Los Angeles County Psychological Association (LACPA)",
    "EMDR International Association (EMDRIA)",
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "anxiety",
    title: "Anxiety & Chronic Worry",
    shortDesc: "Quiet relentless 'what-if' thoughts, calm physical restlessness, and regain control of your nervous system.",
    longDesc: "Generalized anxiety can feel like carrying an invisible siren that never fully shuts off. You may find yourself overthinking simple decisions, anticipating worst-case scenarios, or experiencing muscle tension, insomnia, and constant vigilance. Through structured Cognitive Behavioral Therapy (CBT), we examine the cognitive loops that amplify worry and develop practical behavioral strategies to restore equilibrium to your daily life.",
    symptoms: [
      "Persistent rumination and catastrophic 'what-if' loops",
      "Physical tension, jaw clenching, and sleep disturbances",
      "Difficulty relaxing even in peaceful environments",
      "Paralysis by over-analysis and decision fatigue"
    ],
    modalities: ["CBT Thought Restructuring", "Behavioral Exposure", "Mindfulness & Breathwork"],
    treatmentGoals: [
      "Dismantle automatic catastrophic thinking patterns",
      "Learn physiological de-escalation techniques",
      "Cultivate psychological flexibility and tolerance for uncertainty"
    ],
    quote: "Anxiety tells you you are never safe. Therapy teaches your body and mind that right now, in this moment, you are."
  },
  {
    id: "panic",
    title: "Panic Attacks & Agoraphobia",
    shortDesc: "De-escalate sudden surges of terror, overcome fear of your body's sensations, and restore freedom of movement.",
    longDesc: "A panic attack can be terrifying—heart pounding in your chest, shortness of breath, dizziness, and a profound dread that something catastrophic is about to occur. Soon, fear of having another panic attack causes your world to shrink. Using interoceptive CBT exposure and neurological grounding, we strip panic of its power by rewiring how your brain interprets harmless bodily sensations.",
    symptoms: [
      "Sudden heart palpitations, chest tightness, and hyperventilation",
      "Dizziness, dissociation, and intense fear of losing control",
      "Avoidance of freeway driving, crowded stores, or flying",
      "Constant body scanning and anticipatory dread"
    ],
    modalities: ["Interoceptive CBT Exposure", "Nervous System Regulation", "Panic Disconfirmation"],
    treatmentGoals: [
      "Understand the biology of the fight-or-flight response",
      "Break the fear-of-fear loop with gentle guided exposures",
      "Confidently travel and inhabit previously avoided spaces"
    ],
    quote: "Panic is a false alarm of the nervous system. When you learn to let the wave pass without fighting it, the wave loses its crest."
  },
  {
    id: "trauma",
    title: "Trauma & PTSD Recovery (EMDR)",
    shortDesc: "Gently process painful memories, release somatic triggers, and reclaim a felt sense of safety.",
    longDesc: "Trauma isn't just what happened in the past; it's how the past continues to live in your body, emotions, and nervous system today. As a Certified EMDR Therapist (EMDRIA), I use Eye Movement Desensitization and Reprocessing to help your brain reprocess unresolved traumatic memories, relational wounds, or acute stressors without forcing you to verbally recount every painful detail over and over.",
    symptoms: [
      "Intrusive flashbacks, nightmares, or emotional triggers",
      "Emotional numbness alternating with sudden irritability",
      "Deeply ingrained negative beliefs ('I am unsafe', 'It was my fault')",
      "Hypervigilance and difficulty trusting relationships"
    ],
    modalities: ["EMDR 8-Phase Protocol", "Bilateral Stimulation", "Somatic Trauma Processing"],
    treatmentGoals: [
      "Reprocess and neutralize target traumatic memories",
      "Install adaptive core beliefs ('I am safe now', 'I am worthy')",
      "Restore nervous system regulation and emotional steadiness"
    ],
    quote: "You do not have to live as a prisoner to your past. EMDR allows your brain's natural healing mechanism to finish processing what got stuck."
  },
  {
    id: "burnout",
    title: "Burnout & High-Functioning Exhaustion",
    shortDesc: "Untangle perfectionism, heal executive fatigue, and establish sustainable boundaries in high-demand lives.",
    longDesc: "In the fast-paced environments of Los Angeles and Silicon Beach, high achievers, founders, healthcare providers, and creative professionals frequently push past their physiological limits. When your sense of worth is fused with relentless productivity, chronic exhaustion and cynicism inevitably set in. We explore the roots of your perfectionism and craft authentic boundaries so you can thrive without depleting your spirit.",
    symptoms: [
      "Chronic emotional, mental, and physical depletion",
      "Cynicism, detachment, and diminishing joy in accomplishments",
      "Inability to disconnect from work without guilt",
      "Imposter syndrome masked behind unrelenting perfectionism"
    ],
    modalities: ["CBT for Perfectionism", "Values-Aligned Living", "Somatic Recovery Cycles"],
    treatmentGoals: [
      "Identify the emotional drivers of overfunctioning",
      "Establish non-negotiable personal and professional boundaries",
      "Reclaim vitality, restorative leisure, and present-moment joy"
    ],
    quote: "Rest is not a reward you earn after collapse; it is the essential soil in which sustainable creativity and well-being take root."
  }
];

export const OFFICE_FEATURES: OfficeFeature[] = [
  {
    icon: "Sun",
    title: "Sunlit Architectural Sanctuary",
    description: "Bathed in soft natural California daylight through sheer linen drapes, with organic white oak finishes, tactile ceramics, and serene indoor botanical accents."
  },
  {
    icon: "ShieldCheck",
    title: "Strict Confidentiality & Acoustic Privacy",
    description: "Engineered with soundproofed double-insulated walls, white noise masking outside session rooms, and a discrete private entrance for absolute peace of mind."
  },
  {
    icon: "Coffee",
    title: "Mindful Welcome Lounge",
    description: "Arrive early to decompress in our calm waiting alcove featuring organic herbal teas, filtered mountain water, curated art books, and soothing ambient soundscapes."
  },
  {
    icon: "MapPin",
    title: "Prime Coastal Santa Monica Location",
    description: "Conveniently situated at 123th Street 45 W, Santa Monica, CA, just minutes from the Pacific ocean breeze, with reserved on-site garage parking and elevator access."
  },
  {
    icon: "Sparkles",
    title: "Medical-Grade Clean Air & Comfort",
    description: "Outfitted with hospital-grade True HEPA filtration, individual climate comfort, organic linen seating, and weighted grounding throws if desired."
  },
  {
    icon: "Laptop",
    title: "Flexible Hybrid Care",
    description: "Enjoy in-person appointments in our tranquil Santa Monica suite, or seamless secure HIPAA-compliant telehealth throughout all of California when traveling or busy."
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What should I expect during our first session?",
    answer: "Our first meeting is an initial clinical intake (60 minutes) dedicated to understanding your personal history, current challenges, and primary hopes for therapy. It is an unhurried, collaborative conversation where we assess your nervous system needs, review past therapeutic experiences, and outline a tailored roadmap combining CBT and EMDR."
  },
  {
    id: "faq-2",
    category: "Sessions",
    question: "How does EMDR therapy actually work?",
    answer: "EMDR (Eye Movement Desensitization and Reprocessing) is a specialized, research-backed therapy that uses bilateral stimulation (such as guided eye movements or gentle hand tappers) to reactivate your brain's natural information processing system. Unlike traditional talk therapy where you might recount traumatic events repeatedly, EMDR helps your brain reprocess stuck emotional memories into adaptive, resolved narratives."
  },
  {
    id: "faq-3",
    category: "Office",
    question: "Where is the office located, and is parking available?",
    answer: "Our office is located in a peaceful professional building at 123th Street 45 W, Santa Monica, CA 90401. Reserved patient parking is provided in the building's subterranean structure with dedicated guest validation, and there is ample metered street parking along the tree-lined avenue. Elevator access is available directly to our floor."
  },
  {
    id: "faq-4",
    category: "Insurance",
    question: "Do you take insurance, or provide superbills?",
    answer: "I am an out-of-network provider, which allows us to maintain the highest standard of personalized, confidential care without restrictive third-party insurance oversight. I provide comprehensive monthly 'Superbills' (detailed diagnostic billing statements) that you can easily submit to your PPO insurance for reimbursement. Most clients receive between 50% to 80% out-of-network coverage."
  },
  {
    id: "faq-5",
    category: "Sessions",
    question: "Do you offer online telehealth sessions?",
    answer: "Yes! While many clients cherish visiting our sunlit Santa Monica sanctuary in person, I also offer secure, HIPAA-compliant telehealth therapy to residents residing anywhere across the state of California. Many clients utilize a hybrid model—visiting in person when possible and connecting virtually on hectic weeks."
  },
  {
    id: "faq-6",
    category: "General",
    question: "What is the 15-minute free consultation?",
    answer: "Finding the right psychologist is essential. The free 15-minute phone consultation is a relaxed opportunity for us to speak directly, discuss what is bringing you to therapy, answer any questions you have about my CBT and EMDR approach, and determine if my Santa Monica practice is the right clinical fit for your goals."
  }
];
