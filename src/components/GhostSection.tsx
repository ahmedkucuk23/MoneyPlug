"use client";

import dynamic from "next/dynamic";

const GhostCursor = dynamic(() => import("./GhostCursor"), { ssr: false });

export default function GhostSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <GhostCursor
        className=""
        style={{}}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1}
        brightness={2}
        color="#B19EEF"
        edgeIntensity={0}
        targetPixels={undefined}
        fadeDelayMs={undefined}
        fadeDurationMs={undefined}
      />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-black to-transparent pointer-events-none z-30" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-30" />

      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-2xl">
          <span className="font-space text-[10px] tracking-[5px] text-white uppercase block mb-4">
            WHY ME?
          </span>
          <div className="w-12 h-[2px] bg-white mb-8 mx-auto" />
          <h2 className="font-montserrat font-black text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight mb-6">
            I Am the Guy in the Shadows
          </h2>
          <p className="text-white text-[15px] leading-relaxed max-w-lg mx-auto">
            You won&apos;t see my name on your product. Your audience will never
            know I exist. But behind every sale, every launch, every system that
            prints money — there&apos;s me, building it all from the dark.
          </p>
        </div>
      </div>
    </section>
  );
}
