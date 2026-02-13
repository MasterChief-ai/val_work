const IntroSection = () => {
  return (
    <div className="text-center px-6 max-w-2xl mx-auto">
      <div className="animate-fade-in">
        <p className="font-mono text-sm text-muted-foreground mb-6 tracking-wider">
          <span className="text-primary">$</span> cat feelings.log
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
          So I know this might be{" "}
          <span className="text-primary text-glow-subtle">too late</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in-delay-1">
          And we're still talking or whatever we're calling it for now...
        </p>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-4 opacity-0 animate-fade-in-delay-2">
          But I figured I'd do something{" "}
          <span className="text-primary">a little different</span> this Valentine's Day.
        </p>
        <div className="mt-8 opacity-0 animate-fade-in-delay-3">
          <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
