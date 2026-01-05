export function HeroSection() {
  return (
    <section className="sticky top-0 -z-10 flex h-dvh w-full items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
      <h1 className="font-headline text-5xl text-center md:text-8xl lg:text-9xl neon-text select-none">
        The Initiative.V1
      </h1>
    </section>
  );
}
