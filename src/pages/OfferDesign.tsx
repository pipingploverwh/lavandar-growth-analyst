import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function OfferDesign() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Offer Design"
        description="Value Equation framework and Offer One-Pager template for creating high-converting offers."
        lastUpdated="2025-01-15"
        editor="Growth Team"
      >
        <Link to="/templates">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Offer One-Pager
          </Button>
        </Link>
      </PageHeader>

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Review the Value Equation and identify your current weak points",
            "Create an Offer One-Pager for your primary offer",
            "Review example offers to understand best practices",
          ]}
        />

        <Separator />

        {/* Value Equation */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              The Value Equation
            </h2>
            <p className="text-muted-foreground">
              The foundation of every high-converting offer. Maximize the top,
              minimize the bottom.
            </p>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8">
              <div className="text-center space-y-6">
                <div className="text-4xl font-bold text-foreground">
                  Perceived Value
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <div className="text-2xl font-bold text-primary">÷</div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="text-2xl font-semibold text-muted-foreground">
                  Time + Money + Effort + Risk
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  ↑ Increase Perceived Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Dream outcome:</strong>{" "}
                      Make the promise bigger and more specific
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Perceived likelihood:</strong>{" "}
                      Use proof, testimonials, case studies
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Quantified outcomes:
                      </strong>{" "}
                      "2x conversion" beats "better results"
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">
                        Premium positioning:
                      </strong>{" "}
                      Show exclusivity or limited availability
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  ↓ Reduce Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Time delay:</strong> "Get
                      results in 30 days" not "eventually"
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Effort & sacrifice:</strong>{" "}
                      "Done for you" beats "DIY toolkit"
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Risk:</strong> Money-back
                      guarantees, free trials, refund policy
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>
                      <strong className="text-foreground">Friction:</strong> Single
                      CTA, simple forms, clear next steps
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Offer One-Pager Template */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Offer One-Pager Template
            </h2>
            <p className="text-muted-foreground">
              A structured framework to design and document high-value offers. Use
              this template for every new offer.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Required Fields</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Title / One-liner
                    </h4>
                    <p className="text-muted-foreground">
                      Clear promise in one sentence
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Target Customer
                    </h4>
                    <p className="text-muted-foreground">
                      Specific persona and segment
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Outcome & Timeline
                    </h4>
                    <p className="text-muted-foreground">
                      Quantified result with timeframe
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Value Drivers
                    </h4>
                    <p className="text-muted-foreground">3–5 key benefits</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Risk Reducers
                    </h4>
                    <p className="text-muted-foreground">
                      Guarantee, refund, proof points
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Price Architecture
                    </h4>
                    <p className="text-muted-foreground">
                      Pricing and payment options
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Urgency / Scarcity
                    </h4>
                    <p className="text-muted-foreground">
                      Time or quantity limits
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Success Metrics
                    </h4>
                    <p className="text-muted-foreground">KPIs to track</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Example Offer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Example Offer</h2>

          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-xl">
                Hero Page Conversion Accelerator
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                "We help DTC founders double conversion on their hero page within 30
                days — or we run the next experiment for free."
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Target Customer
                </h4>
                <p className="text-muted-foreground">
                  DTC founders with &gt;10k monthly visitors and &lt;3% hero
                  conversion rate
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Value Drivers
                </h4>
                <ul className="space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>TCE audit of current hero page (delivered in 48 hours)</li>
                  <li>3 high-impact experiment designs targeting biggest friction</li>
                  <li>A/B test setup and monitoring included</li>
                  <li>Weekly review calls with conversion data</li>
                  <li>Post-mortem documentation and playbook</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Risk Reducers
                </h4>
                <ul className="space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>
                    Guarantee: If no 2x lift in 30 days, next experiment is free
                  </li>
                  <li>
                    Case study: Increased hero conversion from 2.1% to 4.8% for
                    skincare brand
                  </li>
                  <li>Full refund if project doesn't launch within 7 days</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Price & Timeline
                </h4>
                <p className="text-muted-foreground">
                  $4,997 one-time or 3 × $1,799. 30-day engagement with option to
                  extend.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Urgency</h4>
                <p className="text-muted-foreground">
                  Limited to 5 active clients per month
                </p>
              </div>
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
                A well-designed offer can increase conversion by 2–5x without changing
                the product. The Value Equation ensures you're addressing all four
                dimensions of buyer psychology. When you can articulate exactly why
                your offer is valuable and low-risk, you can test and optimize with
                confidence. Every experiment should tie back to improving one element
                of the Value Equation.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
