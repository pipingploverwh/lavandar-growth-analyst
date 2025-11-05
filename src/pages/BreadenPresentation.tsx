import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import mechanismLogo from "@/assets/mechanism-logo-full.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BreadenPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 17;

  useEffect(() => {
    trackEvent("breaden_presentation_view");
    const savedSlide = localStorage.getItem("breadenPresentationSlide");
    if (savedSlide) {
      setCurrentSlide(parseInt(savedSlide, 10));
    }
  }, []);

  useEffect(() => {
    const slides = [
      "Title Slide",
      "Executive Snapshot",
      "Goals & Guardrails",
      "What We Shipped",
      "Experiments & Results",
      "Key Insights",
      "Metrics Rollup",
      "Risks, Blockers & Mitigations",
      "Decision Menu",
      "Next 2-Week Plan",
      "TellTales Acquisition",
      "Strategic Framing",
      "Financial & Unit Economics",
      "Critical Path Timeline",
      "Immediate Next Steps",
      "Appendix",
      "Thank You",
    ];
    
    trackEvent("slide_view", { 
      slideNumber: currentSlide + 1,
      slideName: slides[currentSlide]
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

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-bold mb-6 font-['EB_Garamond']">Last 3 Weeks: Progress & Insights</h1>
            <p className="text-2xl text-muted-foreground mb-4">Presentation for Breanden</p>
            <p className="text-xl text-muted-foreground">November 18, 2024</p>
            <img src={mechanismLogo} alt="Mechanism" className="mt-12 h-8 opacity-60" />
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Executive Snapshot</h1>
              <p className="text-xl text-muted-foreground">High-level summary of the last 3 weeks</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Primary Objective</h3>
                <p className="text-lg text-muted-foreground">&lt;What were we trying to move?&gt;</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Top 3 Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                  <li>&lt;Win #1&gt;</li>
                  <li>&lt;Learning #1&gt;</li>
                  <li>&lt;Blocker #1&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Current Status</h3>
                <p className="text-lg text-muted-foreground">&lt;Green/Yellow/Red&gt; - &lt;Brief explanation why&gt;</p>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Goals & Guardrails</h1>
              <p className="text-xl text-muted-foreground">Metrics and constraints guiding our decisions</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">North-Star Metric</h3>
                <p className="text-lg text-muted-foreground">&lt;e.g., paid conversion rate / CAC / LTV:CAC&gt;</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Supporting Metrics</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>&lt;Signup conversion rate&gt;</li>
                  <li>&lt;Activation %&gt;</li>
                  <li>&lt;Time-to-value&gt;</li>
                  <li>&lt;AOV&gt;</li>
                  <li>&lt;Churn rate&gt;</li>
                </ul>
              </div>

              <div className="col-span-2">
                <h3 className="text-2xl font-semibold mb-3">Constraints</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>&lt;Budget limitations&gt;</li>
                  <li>&lt;Timeline requirements&gt;</li>
                  <li>&lt;Engineering bandwidth&gt;</li>
                  <li>&lt;Compliance requirements&gt;</li>
                </ul>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">What We Shipped</h1>
              <p className="text-xl text-muted-foreground">Chronological view of the last 3 weeks</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Week -3 &lt;dates&gt;</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Experiments:</strong> &lt;Tests launched&gt;</li>
                  <li><strong>Content/UX:</strong> &lt;Changes made&gt;</li>
                  <li><strong>Audience/Offer:</strong> &lt;Targeting updates&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Week -2 &lt;dates&gt;</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Experiments:</strong> &lt;Tests launched&gt;</li>
                  <li><strong>Content/UX:</strong> &lt;Changes made&gt;</li>
                  <li><strong>Audience/Offer:</strong> &lt;Targeting updates&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Week -1 &lt;dates&gt;</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Experiments:</strong> &lt;Tests launched&gt;</li>
                  <li><strong>Content/UX:</strong> &lt;Changes made&gt;</li>
                  <li><strong>Audience/Offer:</strong> &lt;Targeting updates&gt;</li>
                </ul>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Experiments & Results</h1>
              <p className="text-xl text-muted-foreground">ICE/TIR framework with lift analysis</p>
            </div>

            <div className="space-y-6">
              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Test #1: &lt;Test Name&gt;</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Hypothesis:</strong> &lt;If we do X for Y segment, then Z metric will improve because...&gt;</p>
                  <p><strong>Variants:</strong> &lt;A = n, B = n&gt;</p>
                  <p><strong>Outcome:</strong> &lt;+/- %, p-value, directionally significant?&gt;</p>
                  <p><strong>Impact:</strong> &lt;Estimated $ or KPI delta&gt;</p>
                  <p><strong>Decision:</strong> &lt;Rollout / iterate / kill&gt;</p>
                </div>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Test #2: &lt;Test Name&gt;</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Hypothesis:</strong> &lt;If we do X for Y segment, then Z metric will improve because...&gt;</p>
                  <p><strong>Variants:</strong> &lt;A = n, B = n&gt;</p>
                  <p><strong>Outcome:</strong> &lt;+/- %, p-value, directionally significant?&gt;</p>
                  <p><strong>Impact:</strong> &lt;Estimated $ or KPI delta&gt;</p>
                  <p><strong>Decision:</strong> &lt;Rollout / iterate / kill&gt;</p>
                </div>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Key Insights</h1>
              <p className="text-xl text-muted-foreground">Trustworthy • Compelling • Easy framework</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Trustworthy</h3>
                <p className="text-sm text-muted-foreground mb-2">&lt;What reduced friction or anxiety?&gt;</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>&lt;Insight 1&gt;</li>
                  <li>&lt;Insight 2&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Compelling</h3>
                <p className="text-sm text-muted-foreground mb-2">&lt;Which value props/offers resonated?&gt;</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>&lt;Insight 1&gt;</li>
                  <li>&lt;Insight 2&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Easy</h3>
                <p className="text-sm text-muted-foreground mb-2">&lt;Where did we remove steps or cognitive load?&gt;</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>&lt;Insight 1&gt;</li>
                  <li>&lt;Insight 2&gt;</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-3">Audience Segmentation</h3>
              <p className="text-muted-foreground">&lt;Which cohorts moved? Why did they respond differently?&gt;</p>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Metrics Rollup</h1>
              <p className="text-xl text-muted-foreground">Before → After performance comparison</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Topline Conversion</h4>
                <p className="text-3xl font-bold text-primary">&lt;x%&gt; → &lt;y%&gt;</p>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Activation Rate</h4>
                <p className="text-3xl font-bold text-primary">&lt;x%&gt; → &lt;y%&gt;</p>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">CPA / CAC</h4>
                <p className="text-3xl font-bold text-primary">&lt;$x&gt; → &lt;$y&gt;</p>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Revenue / LTV</h4>
                <p className="text-3xl font-bold text-primary">&lt;$x&gt; → &lt;$y&gt;</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Attribution Notes</h3>
              <p className="text-muted-foreground">&lt;Holdouts, seasonality, confounders, or other factors affecting measurement&gt;</p>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Risks, Blockers & Mitigations</h1>
              <p className="text-xl text-muted-foreground">Current challenges and proposed solutions</p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="border border-border/40 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold mb-3">Risk/Blocker #{num}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Description:</strong> &lt;What's the issue?&gt;</p>
                    <p><strong>Owner:</strong> &lt;Who's responsible?&gt;</p>
                    <p><strong>Mitigation/Ask:</strong> &lt;What do we need?&gt;</p>
                  </div>
                </div>
              ))}
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 8:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Decision Menu</h1>
              <p className="text-xl text-muted-foreground">Specific asks requiring Breanden's input</p>
            </div>

            <div className="space-y-6">
              <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-semibold mb-2">Decision #1</h3>
                <p className="text-muted-foreground">&lt;e.g., Approve 2-week engineering support for pricing test&gt;</p>
              </div>

              <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-semibold mb-2">Decision #2</h3>
                <p className="text-muted-foreground">&lt;e.g., Increase creative budget by $X for the best-performing segment&gt;</p>
              </div>

              <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-semibold mb-2">Decision #3</h3>
                <p className="text-muted-foreground">&lt;e.g., Greenlight rollout of Variant B to 100%&gt;</p>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 9:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Next 2-Week Plan</h1>
              <p className="text-xl text-muted-foreground">Nov 18 → Dec 2</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Focus Theme</h3>
                <p className="text-lg text-muted-foreground">&lt;What's the primary objective for the next sprint?&gt;</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Planned Tests</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>&lt;Test #1&gt;</li>
                  <li>&lt;Test #2&gt;</li>
                  <li>&lt;Test #3&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Key Milestones</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>&lt;Date: Milestone 1&gt;</li>
                  <li>&lt;Date: Milestone 2&gt;</li>
                  <li>&lt;Date: Milestone 3&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Owners & Responsibilities</h3>
                <p className="text-muted-foreground">&lt;Who does what for each test/milestone&gt;</p>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 10:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">TellTales Acquisition</h1>
              <p className="text-xl text-muted-foreground">Quick Reference Overview</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Business Model</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Product:</strong> Custom storybook business (Print-on-Demand journals for parents)</li>
                  <li><strong>Platform:</strong> Shopify-based</li>
                  <li><strong>Fulfillment:</strong> UnifyDropshipping (JYS Trade Co.)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Current State</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Status:</strong> Distressed</li>
                  <li><strong>Revenue Drop:</strong> ~$200K/mo → $20K/mo</li>
                  <li><strong>Cause:</strong> Ad-account hack & pixel corruption</li>
                  <li><strong>Owner:</strong> De-prioritized/burned out</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Acquisition Scope</h3>
                <p className="text-sm text-muted-foreground mb-2"><strong>Asset Sale Only</strong></p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Brand IP ownership</li>
                  <li>70K customer list</li>
                  <li>Established supply chain/printer deal</li>
                  <li>Rebuild: New Shopify/Klaviyo/Meta pixel instance</li>
                </ul>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 11:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Strategic Framing</h1>
              <p className="text-xl text-muted-foreground">DTC Operating Platform vs Microbrand Roll-up</p>
            </div>

            <div className="space-y-6">
              <div className="border border-primary/40 rounded-lg p-6 bg-primary/5">
                <h3 className="text-2xl font-semibold mb-3">Chosen Strategy</h3>
                <p className="text-lg">"DTC Operating Platform" - Proprietary value creation engine</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Why This Matters</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Focused on systematic value creation</li>
                  <li>Repeatable playbook development</li>
                  <li>Infrastructure-first approach</li>
                  <li>Scalable operational processes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">SlashSpiders Context</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>AI-first infrastructure already built</li>
                  <li>Analytics tracking operational for e-commerce on Stripe</li>
                  <li>Engineering complete: Saves ~$250K initial costs</li>
                  <li>Can pivot with infrastructure intact</li>
                  <li>Note: Would need UserTesting to improve product</li>
                </ul>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 12:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Financial & Unit Economics</h1>
              <p className="text-xl text-muted-foreground">Key metrics and valuation targets</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Historical Performance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>LTM Revenue:</strong> ~$2.6M</li>
                  <li><strong>2024 Profit:</strong> ~$300K - $350K</li>
                  <li className="text-sm italic">Confirms market size and prior profitability before issues</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Pricing Structure</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Asking Price:</strong> $250K (negotiable)</li>
                  <li><strong>Target Purchase:</strong> $100K - $150K</li>
                  <li className="text-sm italic">Target valuation for the assets</li>
                </ul>
              </div>

              <div className="col-span-2 border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Unit Economics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">AOV</p>
                    <p className="text-2xl font-bold">~$52 - $55</p>
                    <p className="text-xs text-muted-foreground">(stable)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Target CPA</p>
                    <p className="text-2xl font-bold">Low $40s</p>
                    <p className="text-xs text-muted-foreground">Critical threshold: Must be sub-$60</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">COGS</p>
                    <p className="text-2xl font-bold">~$1.10/unit</p>
                    <p className="text-xs text-muted-foreground">+ shipping</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Inventory Risk</p>
                    <p className="text-2xl font-bold">Low</p>
                    <p className="text-xs text-muted-foreground">(Print-on-Demand)</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/40">
                  <p className="text-sm font-semibold">Success Criteria</p>
                  <p className="text-sm text-muted-foreground">CPA must prove the business is scalable/profitable at sub-$60 target</p>
                </div>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 13:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Critical Path Timeline</h1>
              <p className="text-xl text-muted-foreground">Structured evaluation leading to Thanksgiving close</p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-3">
                <h3 className="text-xl font-semibold mb-1">ASAP - Technical Fix</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Task:</strong> Resolve Pixel Deduplication & Event Coverage errors</p>
                <p className="text-sm"><span className="text-red-500 font-semibold">Status:</span> Critical Blocker - In Progress</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-3">
                <h3 className="text-xl font-semibold mb-1">Nov 6 (Latest) - Test Launch</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Task:</strong> Feasibility Micro-Test MUST be LIVE</p>
                <p className="text-sm text-muted-foreground mb-1"><strong>Duration:</strong> 1-week test</p>
                <p className="text-sm"><span className="text-orange-500 font-semibold">Status:</span> Critical Path</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 py-3">
                <h3 className="text-xl font-semibold mb-1">Nov 13 - Analysis & Decision</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Task:</strong> Analyze test results; Make GO / NO-GO decision</p>
                <p className="text-sm"><span className="text-yellow-500 font-semibold">Status:</span> Critical Path</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-3">
                <h3 className="text-xl font-semibold mb-1">Nov 18 - TTL Summit</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Task:</strong> Presentation (Focus: M&A Diligence/Justification)</p>
                <p className="text-sm"><span className="text-blue-500 font-semibold">Status:</span> Due Today</p>
              </div>

              <div className="border-l-4 border-green-500 pl-6 py-3">
                <h3 className="text-xl font-semibold mb-1">Nov 27 - Close Deadline</h3>
                <p className="text-sm text-muted-foreground mb-1"><strong>Task:</strong> Thanksgiving Close (If proceeding with acquisition)</p>
                <p className="text-sm"><span className="text-green-500 font-semibold">Status:</span> Critical Path</p>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 14:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Immediate Next Steps</h1>
              <p className="text-xl text-muted-foreground">This Week: Nov 4 - 8</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Technical</h3>
                <p className="text-sm text-muted-foreground mb-2"><strong>Priority:</strong> Fix Pixel data integrity issues</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>0% Event Coverage resolution</li>
                  <li>Deduplication errors fix</li>
                </ul>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Testing</h3>
                <p className="text-sm text-muted-foreground mb-2">Ensure test launches by Nov 6</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Budget: ≤ $500</li>
                  <li>Daily spend: ~$75 - $100/day</li>
                </ul>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Operations</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Receive and evaluate product sample (Wed-Thu)</li>
                </ul>
              </div>

              <div className="border border-border/40 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Diligence</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Isabel to record 5-min Loom</li>
                  <li>Topic: Unit economics framework for healthy Meta account</li>
                  <li>Review: CPA, CTR, CVR metrics</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 border border-primary/40 rounded-lg p-4 bg-primary/5">
              <h4 className="font-semibold mb-2">Key Focus Areas</h4>
              <p className="text-sm text-muted-foreground">Technical resolution is blocking test launch. All efforts prioritized to unblock and launch by Nov 6 deadline.</p>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 15:
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 font-['EB_Garamond']">Appendix: Raw Inputs</h1>
              <p className="text-xl text-muted-foreground">Supporting materials and detailed data</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Reference Materials</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>&lt;Link to dashboard 1&gt;</li>
                  <li>&lt;Link to call recordings&gt;</li>
                  <li>&lt;Link to chat threads&gt;</li>
                  <li>&lt;Link to detailed notes&gt;</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Detailed Analysis</h3>
                <p className="text-muted-foreground">&lt;Paste or link to in-depth analysis, cohort breakdowns, statistical details, etc.&gt;</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">Additional Context</h3>
                <p className="text-muted-foreground">&lt;Any other supporting information not covered in main slides&gt;</p>
              </div>
            </div>

            <img src={mechanismLogo} alt="Mechanism" className="absolute bottom-12 right-12 h-6 opacity-40" />
          </div>
        );

      case 16:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-bold mb-6 font-['EB_Garamond']">Thank You</h1>
            <p className="text-2xl text-muted-foreground mb-12">Questions & Discussion</p>
            <p className="text-sm text-muted-foreground">Use arrow keys to navigate • Press 'S' for speaker notes</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-foreground font-['Barlow'] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-7xl relative min-h-[600px]">
          {renderSlide()}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => changeSlide(-1)}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <span className="text-sm text-muted-foreground">
            Slide <span className="font-semibold">{currentSlide + 1}</span> of {totalSlides}
          </span>

          <button
            onClick={() => changeSlide(1)}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next slide"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreadenPresentation;
