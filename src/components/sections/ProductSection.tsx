const ProductSection = () => {
  return (
    <div className="px-4 sm:px-6 max-w-2xl mx-auto w-full">
      <div className="animate-fade-in glass-card rounded-xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Product Specification
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-glow-subtle">
          [Bukky]
        </h2>
        <div className="space-y-4 text-sm sm:text-base">
          <div className="opacity-0 animate-fade-in-delay-1">
            <h3 className="text-foreground font-semibold mb-2 font-mono text-xs uppercase tracking-wider">
              ✨ Core Features
            </h3>
            <ul className="space-y-1.5 text-muted-foreground ml-4">
              <li>• Smile that crashes my thought process</li>
              <li>• Infectious Laugh that could fix any bad day</li>
              <li>• Brain that actually understands what I'm saying</li>
              <li>• Vibe compatibility: <span className="text-primary">99.9%</span></li>
            </ul>
          </div>
          <div className="opacity-0 animate-fade-in-delay-2">
            <h3 className="text-foreground font-semibold mb-2 font-mono text-xs uppercase tracking-wider">
              🐛 Known Bugs
            </h3>
            <ul className="space-y-1.5 text-muted-foreground ml-4">
              <li>• Makes me forget what I was going to say</li>
              <li>• Causes unexpected smiling in public</li>
              <li>• Memory leak: to an extent, can't stop thinking about her (God Abeg)</li>
            </ul>
          </div>
          <div className="opacity-0 animate-fade-in-delay-3">
            <h3 className="text-foreground font-semibold mb-2 font-mono text-xs uppercase tracking-wider">
              📊 Status
            </h3>
            <p className="text-muted-foreground ml-4">
              Classification: <span className="text-primary font-semibold">Absolutely one of a kind</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
