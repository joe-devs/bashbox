// === FILE PATH: components/ui/ScanlineOverlay.tsx ===
"use client";

export default function ScanlineOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Moving Scanline */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />

      {/* Subtle Static Flickering */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Top-to-Bottom Line Sweep */}
      <div className="absolute h-1 w-full bg-white/[0.02] top-0 animate-[scan_8s_linear_infinite]" />
    </div>
  );
}