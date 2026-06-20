import { getProgress } from './storageService';

// Helper to check if sound is enabled
const isSoundEnabled = () => {
  const progress = getProgress();
  return progress.settings?.soundEnabled !== false;
};

// Simple Web Audio API synthesizer
let audioCtx: AudioContext | null = null;
let hasInteracted = false;

if (typeof window !== 'undefined') {
  const mark = () => {
    hasInteracted = true;
    window.removeEventListener('click', mark);
    window.removeEventListener('touchstart', mark);
    window.removeEventListener('keydown', mark);
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  };
  window.addEventListener('click', mark);
  window.addEventListener('touchstart', mark);
  window.addEventListener('keydown', mark);
}

const getAudioContext = () => {
  if (!hasInteracted) return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended' && hasInteracted) {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
};

const playTone = (frequency: number, type: OscillatorType, duration: number, volume = 0.1) => {
  if (!isSoundEnabled()) return;

  try {
    const ctx = getAudioContext();
    if (!ctx || ctx.state === 'suspended') return;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

export const playCorrectSound = () => {
  if (!isSoundEnabled()) return;
  // Two quick high-pitched beeps
  playTone(600, 'sine', 0.1, 0.1);
  setTimeout(() => playTone(800, 'sine', 0.15, 0.1), 100);
};

export const playIncorrectSound = () => {
  if (!isSoundEnabled()) return;
  // Low-pitched boop
  playTone(300, 'triangle', 0.15, 0.1);
  setTimeout(() => playTone(200, 'triangle', 0.2, 0.1), 150);
};

export const playLevelUpSound = () => {
  if (!isSoundEnabled()) return;
  // Arpeggio
  const ctx = getAudioContext();
  if (!ctx || ctx.state === 'suspended') return;
  const now = ctx.currentTime;
  const frequencies = [400, 500, 600, 800];
  
  frequencies.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 'sine', 0.2, 0.1), i * 100);
  });
};

export const playBadgeClickSound = () => {
  if (!isSoundEnabled()) return;
  // A sparkly, magical sound
  const ctx = getAudioContext();
  if (!ctx || ctx.state === 'suspended') return;
  const frequencies = [600, 800, 1000, 1200];
  
  frequencies.forEach((freq, i) => {
    setTimeout(() => playTone(freq, 'sine', 0.1, 0.05), i * 50);
  });
};
