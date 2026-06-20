let sharedCtx: AudioContext | null = null;
let hasUserInteracted = false;

if (typeof window !== 'undefined') {
  const markInteracted = () => {
    hasUserInteracted = true;
    window.removeEventListener('click', markInteracted);
    window.removeEventListener('touchstart', markInteracted);
    window.removeEventListener('keydown', markInteracted);
    if (sharedCtx && sharedCtx.state === 'suspended') {
      sharedCtx.resume().catch(() => {});
    }
  };
  window.addEventListener('click', markInteracted);
  window.addEventListener('touchstart', markInteracted);
  window.addEventListener('keydown', markInteracted);
}

const getAudioContext = (requiresGesture: boolean) => {
  if (requiresGesture) {
    hasUserInteracted = true;
  }
  if (!hasUserInteracted) {
    return null;
  }

  if (!sharedCtx) {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      sharedCtx = new AudioContext();
    }
  }
  // Resume it in case it's suspended (browsers block audio until user interaction)
  if (sharedCtx && sharedCtx.state === 'suspended' && hasUserInteracted) {
    sharedCtx.resume().catch(() => {});
  }
  return sharedCtx;
};

export const playSound = (type: 'hover' | 'click') => {
  try {
    const ctx = getAudioContext(type === 'click');
    if (!ctx || ctx.state === 'suspended') return;
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.025);
      gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.05);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    }
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
  } catch (e) {
    // Web Audio might be blocked or not supported
  }
};
