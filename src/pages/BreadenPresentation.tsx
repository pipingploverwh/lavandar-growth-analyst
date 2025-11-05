import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const BreadenPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 17;

  useEffect(() => {
    trackEvent("breaden_presentation_view");
  }, []);

  useEffect(() => {
    const savedSlide = localStorage.getItem("breadenPresentationSlide");
    if (savedSlide) {
      setCurrentSlide(parseInt(savedSlide, 10));
    }
  }, []);

  const slides = [
    { title: "Title Slide", content: "Breaden Presentation - Title" },
    { title: "Executive Snapshot", content: "Executive Summary" },
    { title: "Goals & Guardrails", content: "Project Goals" },
    { title: "What We Shipped", content: "Deliverables" },
    { title: "Experiments & Results", content: "Test Results" },
    { title: "Insights (TCE Framework)", content: "Key Insights" },
    { title: "Metrics Rollup", content: "Performance Metrics" },
    { title: "Risks, Blockers & Mitigations", content: "Risk Management" },
    { title: "Asks for Breanden", content: "Action Items" },
    { title: "Next 2-Week Plan", content: "Roadmap" },
    { title: "Draft Slides - TellTales Overview", content: "TellTales" },
    { title: "Draft Slides - Strategic Context", content: "Strategy" },
    { title: "Draft Slides - Financial Overview", content: "Financials" },
    { title: "Draft Slides - Critical Timeline", content: "Timeline" },
    { title: "Draft Slides - Next Steps", content: "Next Steps" },
    { title: "Appendix", content: "Additional Information" },
    { title: "Thank You", content: "Thank You" },
  ];

  useEffect(() => {
    trackEvent("slide_view", { 
      slideNumber: currentSlide + 1,
      slideName: slides[currentSlide]?.title 
    });
  }, [currentSlide]);

  const changeSlide = (direction: number) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < totalSlides) {
      setCurrentSlide(newSlide);
      localStorage.setItem("breadenPresentationSlide", newSlide.toString());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentSlide > 0) {
        changeSlide(-1);
      } else if (e.key === "ArrowRight" && currentSlide < totalSlides - 1) {
        changeSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-charcoal text-white font-['Barlow'] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold mb-2">{slides[currentSlide].title}</h1>
          <p className="text-lg text-muted-foreground">{slides[currentSlide].content}</p>
        </div>

        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => changeSlide(-1)}
            disabled={currentSlide === 0}
            className="px-6 py-3 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            ← Previous
          </button>
          
          <span className="text-sm text-muted-foreground">
            Slide {currentSlide + 1} of {totalSlides}
          </span>

          <button
            onClick={() => changeSlide(1)}
            disabled={currentSlide === totalSlides - 1}
            className="px-6 py-3 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            Next →
          </button>
        </div>

        <div className="mt-8 text-sm text-muted-foreground text-center">
          Use arrow keys to navigate
        </div>
      </div>
    </div>
  );
};

export default BreadenPresentation;
