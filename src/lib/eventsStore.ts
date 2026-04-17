import { useSyncExternalStore } from 'react';
import e1 from '@/assets/gallery/e1.jpg';
import e2 from '@/assets/gallery/e2.jpg';
import e3 from '@/assets/gallery/e3.jpg';
import e4 from '@/assets/gallery/e4.jpg';
import e5 from '@/assets/gallery/e5.jpg';
import e6 from '@/assets/gallery/e6.jpg';
import e7 from '@/assets/gallery/e7.jpg';
import e8 from '@/assets/gallery/e8.jpg';
import e9 from '@/assets/gallery/e9.jpg';

export type EventCategory = 'Weddings' | 'Corporate' | 'Birthdays' | 'Brand Activations';

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  image: string; // URL or data URL
  alt: string;
}

const STORAGE_KEY = 'lafolie.events.v2';

const defaults: EventItem[] = [
  { id: 'evt-1', title: 'Be The Inspiration', category: 'Corporate', image: e1, alt: 'Be The Inspiration corporate event photobooth' },
  { id: 'evt-2', title: 'Tropical Night', category: 'Weddings', image: e2, alt: 'Tropical themed wedding photobooth Lebanon' },
  { id: 'evt-3', title: 'Evening Celebration', category: 'Weddings', image: e3, alt: 'Evening celebration photobooth Lebanon' },
  { id: 'evt-4', title: 'Private Event', category: 'Birthdays', image: e4, alt: 'Private birthday photobooth Lebanon' },
  { id: 'evt-5', title: 'USEK Christmas Fiesta', category: 'Corporate', image: e5, alt: 'USEK Christmas Fiesta photobooth' },
  { id: 'evt-6', title: 'Happy Birthday Trio', category: 'Birthdays', image: e6, alt: 'Teen birthday photobooth Lebanon' },
  { id: 'evt-7', title: 'KPMG Season', category: 'Corporate', image: e7, alt: 'KPMG Celebrating The Season Together photobooth' },
  { id: 'evt-8', title: 'Kinder 50', category: 'Brand Activations', image: e8, alt: 'Kinder 50 brand activation photobooth' },
  { id: 'evt-9', title: 'Recent Event', category: 'Weddings', image: e9, alt: 'Recent event photobooth Lebanon' },
];

const listeners = new Set<() => void>();

function read(): EventItem[] {
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as EventItem[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaults;
  } catch {
    return defaults;
  }
}

function write(items: EventItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  for (const l of listeners) l();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useEvents() {
  return useSyncExternalStore(subscribe, read, () => defaults);
}

export function saveEvents(items: EventItem[]) {
  write(items);
}

export function resetEvents() {
  write(defaults);
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
