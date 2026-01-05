import React from "react";

export function HeroSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-dvh w-full">
      <section className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <h1 className="select-none text-center font-headline text-5xl neon-text md:text-8xl lg:text-9xl">
          The Initiative.V1
        </h1>
      </section>
      {children}
    </div>
  );
}
