import { useState, useEffect, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ParticleField from "@/components/ParticleField";
import LandingSection from "@/components/sections/LandingSection";
import IntroSection from "@/components/sections/IntroSection";
import ProductSection from "@/components/sections/ProductSection";
import CodeSection from "@/components/sections/CodeSection";
import FinalSection from "@/components/sections/FinalSection";

type Section = "landing" | "intro" | "product" | "code" | "final";

const SECTION_ORDER: Section[] = ["landing", "intro", "product", "code", "final"];
const AUTO_TIMES: Record<Section, number | null> = {
  landing: null,
  intro: 6000,
  product: 9000,
  code: 7000,
  final: null,
};

const Index = () => {
  const [current, setCurrent] = useState<Section>("landing");
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((next: Section) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(next);
      setVisible(true);
    }, 400);
  }, []);

  const advance = useCallback(() => {
    const idx = SECTION_ORDER.indexOf(current);
    if (idx < SECTION_ORDER.length - 1) {
      goTo(SECTION_ORDER[idx + 1]);
    }
  }, [current, goTo]);

  useEffect(() => {
    const autoTime = AUTO_TIMES[current];
    if (!autoTime) return;
    const timer = setTimeout(advance, autoTime);
    return () => clearTimeout(timer);
  }, [current, advance]);

  return (
    <div className="min-h-[100svh] bg-gradient-dark relative overflow-hidden">
      <ParticleField />
      <FloatingHearts />
      <div
        className={`relative z-10 min-h-[100svh] flex items-center justify-center transition-opacity duration-400 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {current === "landing" && <LandingSection onContinue={advance} />}
        {current === "intro" && <IntroSection />}
        {current === "product" && <ProductSection />}
        {current === "code" && <CodeSection />}
        {current === "final" && <FinalSection />}
      </div>
    </div>
  );
};

export default Index;
