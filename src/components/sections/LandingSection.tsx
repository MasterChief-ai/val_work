const LandingSection = ({ onContinue }: { onContinue: () => void }) => {
  return (
    <div className="text-center px-6 max-w-lg mx-auto">
      <div className="animate-fade-in">
        <p className="text-muted-foreground font-mono text-sm mb-4 tracking-widest uppercase">
          // incoming_transmission
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-glow">
          Happy Valentine's Day
        </h1>
        <p className="text-primary text-lg sm:text-xl mb-2 animate-pulse-soft">💝</p>
        <p className="text-muted-foreground text-sm sm:text-base mb-10 opacity-0 animate-fade-in-delay-2">
          I built something for you...
        </p>
      </div>
      <button
        onClick={onContinue}
        className="opacity-0 animate-fade-in-delay-3 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-[0_0_30px_hsl(351_100%_71%/0.4)] transition-all duration-300 hover:scale-105 active:scale-95 neon-border"
      >
        Open it →
      </button>
    </div>
  );
};

export default LandingSection;
