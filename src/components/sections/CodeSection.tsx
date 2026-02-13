const CodeSection = () => {
  return (
    <div className="px-4 sm:px-6 max-w-2xl mx-auto w-full">
      <div className="animate-fade-in">
        <p className="font-mono text-xs text-muted-foreground mb-4 tracking-wider">
          <span className="text-primary">$</span> node feelings.js
        </p>
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-accent/60" />
            <span className="w-3 h-3 rounded-full bg-primary/40" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">feelings.js</span>
          </div>
          <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
            <code>
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">feelings</span> = {"{\n"}
              {"  "}
              <span className="text-muted-foreground">initial:</span>{" "}
              <span className="text-accent">"just talking / Getting to know her"</span>,{"\n"}
              {"  "}
              <span className="text-muted-foreground">month_2:</span>{" "}
              <span className="text-accent">"okay she's cool"</span>,{"\n"}
              {"  "}
              <span className="text-muted-foreground">month_3:</span>{" "}
              <span className="text-accent">"wait she's really cool"</span>,{"\n"}
              {"  "}
              <span className="text-muted-foreground">month_5:</span>{" "}
              <span className="text-accent">"omo, e don go far, can't stop thinking about her"</span>,{"\n"}
              {"  "}
              <span className="text-muted-foreground">valentine:</span>{" "}
              <span className="text-accent">"building websites at 2am"</span>,{"\n"}
              {"}\n\n"}
              <span className="text-primary">if</span> (feelings.
              <span className="text-foreground">valentine</span>) {"{\n"}
              {"  "}console.
              <span className="text-foreground">log</span>(
              <span className="text-accent">"yeah, she's special 😭"</span>);{"\n"}
              {"}"}
            </code>
          </pre>
        </div>
        <p className="text-center text-muted-foreground text-xs mt-4 font-mono opacity-0 animate-fade-in-delay-2">
          // output: <span className="text-primary">yeah, she's special</span>
        </p>
      </div>
    </div>
  );
};

export default CodeSection;
