import React from "react";
import { ScrambleText } from "@/components/ui/scramble-text";

export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-dvh w-full">
      <section className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <ScrambleText />
      </section>
      {children}
    </div>
  );
}
