import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Growth() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Growth Playbooks"
        description="Rapid experiment framework, CRO checklist, and landing page blueprints for measurable growth."
        lastUpdated="2025-01-15"
        editor="Growth Team"
      >
        <Link to="/templates">
          <Button>Create Experiment</Button>
        </Link>
      </PageHeader>

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Complete the 5-minute hero audit checklist below",
            "Prioritize experiments using the ICE scoring rubric",
            "File your first experiment brief using the template",
          ]}
        />

        <Separator />

        {/* Rapid Experiment Playbook */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Rapid Experiment Playbook
            </h2>
            <p className="text-muted-foreground">
              Move fast, learn faster. Ship small experiments with clear hypotheses
              and measurable outcomes.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Hypothesis Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4 font-mono text-sm">
                <p className="text-foreground">
                  If we <strong className="text-primary">[change]</strong>, then{" "}
                  <strong className="text-primary">[expected outcome]</strong> for{" "}
                  <strong className="text-primary">[segment]</strong> measured by{" "}
                  <strong className="text-primary">[metric]</strong>.
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <h4 className="font-semibold text-foreground">Example:</h4>
                <p className="text-muted-foreground italic">
                  "If we add a 30-day money-back guarantee badge to the hero section,
                  then hero-to-checkout conversion will increase by 15% for first-time
                  visitors measured by GA4 checkout initiated events."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ICE Prioritization Rubric</CardTitle>
              <p className="text-sm text-muted-foreground">
                Score each experiment 1–10 on Impact, Confidence, and Ease. Average
                the scores to prioritize.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Impact (1–10)
                  </h4>
                  <p className="text-muted-foreground">
                    How much will this move the needle? Consider revenue impact and
                    reach.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Confidence (1–10)
                  </h4>
                  <p className="text-muted-foreground">
                    How certain are you this will work? Based on data, research, and
                    past tests.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Ease (1–10)
                  </h4>
                  <p className="text-muted-foreground">
                    How quick and simple is implementation? Consider dev time and
                    dependencies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 5-Minute Hero Audit */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              5-Minute Hero Audit
            </h2>
            <p className="text-muted-foreground">
              Quick checklist to identify the highest-impact changes for your hero
              section.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {[
                  {
                    q: "Does the H1 make a clear, specific promise?",
                    help: 'Avoid vague language. "Double your conversion" beats "Grow your business"',
                  },
                  {
                    q: "Is there a quantifying subhead with timeline?",
                    help: '"Within 30 days" or "In 3 steps" adds concrete expectation',
                  },
                  {
                    q: "Is there at least one proof element visible?",
                    help: "Stat, testimonial, or trust badge above the fold",
                  },
                  {
                    q: "Is there exactly one primary CTA?",
                    help: "Multiple CTAs create decision paralysis",
                  },
                  {
                    q: "Is there a risk reducer near the CTA?",
                    help: '"Free trial", "No credit card", or "Money-back guarantee"',
                  },
                  {
                    q: "Can a first-time visitor understand the offer in 5 seconds?",
                    help: "Clear value without needing to scroll or read fine print",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-foreground font-medium">{item.q}</p>
                      <p className="text-sm text-muted-foreground">{item.help}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* CRO Checklist */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Conversion Optimization Checklist
            </h2>
            <p className="text-muted-foreground">
              Comprehensive audit for landing pages and product pages.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hero Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>H1 makes specific promise</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Subhead quantifies outcome + timeline</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Primary proof element visible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trust Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Social proof (testimonials, reviews)</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Trust badges or certifications</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Transparent policies visible</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Value Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>What's included is crystal clear</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Benefits stated, not just features</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Risk reducers integrated</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA & Friction</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Single primary CTA per section</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Form fields minimized</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>Page speed &lt; 2 seconds</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Landing Page Blueprint */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Landing Page Blueprint
            </h2>
            <p className="text-muted-foreground">
              A proven structure that maps to the Value Equation. Use this as your
              starting template.
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ol className="space-y-4">
                {[
                  {
                    section: "Hero Section",
                    content:
                      "H1 with big promise, H2 with quantified subhead and risk reducer, proof element like stat or testimonial, and primary CTA",
                  },
                  {
                    section: "Trust Row",
                    content:
                      "Social proof with testimonial or review, trust badge, and press mention or stat",
                  },
                  {
                    section: "Value Stack",
                    content:
                      "Bullet list showing what is included with microcopy explaining benefits and integrated risk reducers",
                  },
                  {
                    section: "How It Works",
                    content:
                      "3-step process showing simplicity and reducing perceived effort",
                  },
                  {
                    section: "Social Proof Section",
                    content:
                      "3–5 testimonials with names, photos, and specific outcomes",
                  },
                  {
                    section: "CTA Row",
                    content:
                      'Primary CTA plus secondary low-friction action like "Watch demo" or "Read case study"',
                  },
                  {
                    section: "Footer",
                    content:
                      "Policies like refund and privacy, FAQ link, and last updated date",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.section}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Why This Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Why this matters
          </h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Testing without a framework is guesswork. The Rapid Experiment Playbook
                ensures every test has a clear hypothesis, prioritization score, and
                success criteria. The 5-minute hero audit identifies quick wins, and
                the landing page blueprint gives you a proven structure to start from.
                Together, these tools turn random changes into systematic, compounding
                improvements.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
