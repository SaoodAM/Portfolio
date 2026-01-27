import TypingText from "./TypingText";

function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background layer - sits behind content */}
      <div className="absolute inset-0 z-0 animated-hero-bg opacity-60" />

      {/* Content - sits above background */}
      <div className="relative z-10 text-center space-y-5 sm:space-y-6 -mt-10 sm:-mt-16">
        <p className="text-[14px] uppercase tracking-[0.25em] text-sky-400">
          Computer Science • UofT
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
          Hi, I&apos;m{" "}
          <span className="animated-name-gradient bg-clip-text text-transparent">
            Saood
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed sm:leading-7">
          <TypingText />
        </p>

      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] sm:text-xs text-slate-400"
      >
        <span className="tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-[22px] h-[34px] rounded-full border border-slate-500/70 flex items-start justify-center p-[4px]">
          <div className="w-[4.5px] h-[8px] rounded-full bg-slate-300 animate-scroll-dot" />
        </div>
      </a>
    </div>
  );
}

export default Hero;
