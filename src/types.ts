export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  symptoms: string[];
  modalities: string[];
  treatmentGoals: string[];
  quote: string;
}

export interface OfficeFeature {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Sessions' | 'Insurance' | 'Office';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredFormat: 'in-person' | 'telehealth' | 'either';
  primaryConcern: 'anxiety' | 'panic' | 'trauma' | 'burnout' | 'other';
  preferredTime: 'morning' | 'afternoon' | 'evening';
  message: string;
  consent: boolean;
}
