import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="We turn clear offers into repeatable growth."
        description="Rapid experiments, persuasive value, and lower friction so customers buy faster."
        lastUpdated="2025-01-15"
        editor="Growth Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        {/* Purpose */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Purpose of this page</h2>
          <p className="text-muted-foreground leading-relaxed">
            A quick orientation for any new hire or partner: what we do, who we serve,
            the promises we make, and how to get started in 30 minutes.
          </p>
        </section>

        <Separator />

        {/* Quick Start */}
        <QuickStart
          items={[
            "Read TCE definition and examples in Operating Principles",
            "Open the Offer One-Pager template and fill target + promise",
            "Run a 5-minute hero audit (headline clarity, one stat, one risk reducer, single CTA)",
            "File an Experiment Brief for the single highest-impact change",
          ]}
        />

        <Separator />

        {/* Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Help ambitious founders and product teams scale predictable revenue by
            designing high-value offers and running fast, measurable experiments that
            reduce friction and build trust.
          </p>
        </section>

        <Separator />

        {/* Positioning */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Positioning</h2>
          <p className="text-muted-foreground leading-relaxed">
            Mechanism Ventures is a growth and conversion partner for DTC and productized
            businesses. We combine CRO, productized offers, and rapid test loops (backed
            by AI and playbook automation) to increase conversion and lifetime value —
            quickly and transparently.
          </p>
        </section>

        <Separator />

        {/* Core Values */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Core Values</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  TCE — Trustworthy, Compelling, Easy-to-act
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every offer, page, and experiment must pass this test.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Move fast, learn faster</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ship small, measure, iterate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Clarity above cleverness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear language and clear outcomes beat clever copy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evidence over opinion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Prioritize data, tests, and repeatable results.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ownership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ship it, own it, share the learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Target Customers */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Target customers</h2>
          <div className="space-y-3">
            <div>
              <Badge className="mb-2">Primary</Badge>
              <p className="text-muted-foreground">
                DTC founders and productized-service founders who need measurable
                conversion lifts and repeatable acquisition offers.
              </p>
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                Secondary
              </Badge>
              <p className="text-muted-foreground">
                Growth teams at SMBs and early-stage startups looking to systemize
                offers and experiments.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* What We Promise */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What we promise</h2>
          <p className="text-muted-foreground leading-relaxed">
            We design offers and funnels that increase perceived value while cutting
            time, money, effort, and risk for the buyer — using the value equation as
            our north star.
          </p>
        </section>

        <Separator />

        {/* How We Work */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How we work</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle className="text-lg">Diagnose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15–30 minute audit to identify the highest friction point.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle className="text-lg">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  An Offer One-Pager mapping promise → value drivers → risk reducers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle className="text-lg">Experiment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fast hypothesis, one variant, measurable success criteria.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="text-xl font-bold">4</span>
                </div>
                <CardTitle className="text-lg">Scale or Kill</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  If it wins, scale; if not, capture learning and iterate.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Quick Org Map */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Quick org map</h2>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Growth Lead / Owner:</span>
              <a href="#" className="font-medium text-primary hover:underline">
                [Name]
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Design / Brand:</span>
              <a href="#" className="font-medium text-primary hover:underline">
                [Name]
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Engineering / Integrations:</span>
              <a href="#" className="font-medium text-primary hover:underline">
                [Name]
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Growth Ops:</span>
              <a href="#" className="font-medium text-primary hover:underline">
                [Name]
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
