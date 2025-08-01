// Global type definitions for the wedding invitation website

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  icon: string;
  color: string;
}

export interface StoryEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

export interface BankAccount {
  id: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  logo: string;
  color: string;
}

export interface EWallet {
  id: string;
  name: string;
  number: string;
  accountName: string;
  logo: string;
  color: string;
}

export interface RSVPFormData {
  name: string;
  email: string;
  phone?: string;
  attendance: 'yes' | 'no';
  guestCount?: number;
  dietaryRestrictions?: string;
  message?: string;
}

export interface GuestbookFormData {
  name: string;
  email: string;
  message: string;
}

export interface GuestMessage {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimeUnit {
  value: number;
  label: string;
  icon: string;
}
