import { useState } from "react";

const FinalSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="text-center px-6 max-w-2xl mx-auto">
      {!revealed ? (
        <div className="animate-fade-in">
          <p className="font-mono text-sm text-muted-foreground mb-6 tracking-wider">
            <span className="text-primary">$</span> cat final_message.txt
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            One last thing...
          </h2>
          <p className="text-muted-foreground mb-8">
            This part is just for you. No auto-advance.
          </p>
          <button
            onClick={() => setRevealed(true)}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:shadow-[0_0_30px_hsl(351_100%_71%/0.4)] transition-all duration-300 hover:scale-105 active:scale-95 neon-border"
          >
            Read it 💌
          </button>
        </div>
      ) : (
        <div className="animate-scale-in">
          <div className="glass-card rounded-xl p-6 sm:p-8 text-left">
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-4">
              I'm not great at this stuff. I overthink everything and
              usually talk myself out of saying how I feel but you know what,
              you only live once, and life's too short to not let people know how you
              feel about them.
            </p>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-4">
              And talking to you feels like finding a{" "}
              <span className="text-primary text-glow-subtle font-semibold">
                missing semicolon
              </span>{" "}
              that makes everything finally work.
            </p>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-4">
              Like deploying code and seeing{" "}
              <span className="text-primary text-glow-subtle font-semibold">
                zero errors
              </span>{" "}
              for the first time.
            </p>
            <p className="text-foreground text-base sm:text-lg leading-relaxed mb-6">
              I don't know where this goes, but I know I'd like to
              find out. With you.
            </p>
            <p className="text-right text-primary font-semibold text-lg text-glow-subtle">
              Happy Valentine's Day 💝
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalSection;
