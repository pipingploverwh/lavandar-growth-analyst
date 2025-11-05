import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Plus, Download } from "lucide-react";

const templates = [
  {
    name: "Experiment Brief",
    description: "Document hypothesis, success criteria, and implementation steps for rapid testing",
    fields: [
      "Hypothesis (If/Then/For/Measured by format)",
      "Primary metric and success threshold",
      "Technical implementation steps",
      "Assets required (design, copy, dev)",
      "QA checklist",
      "Rollout and rollback procedures",
    ],
  },
  {
    name: "Offer One-Pager",
    description: "Design high-converting offers using the Value Equation framework",
    fields: [
      "Title / One-liner promise",
      "Target customer persona",
      "Outcome & timeline (quantified)",
      "Value drivers (3-5 bullets)",
      "Risk reducers (guarantee, proof)",
      "Price architecture & payment options",
      "Urgency / scarcity levers",
      "Success metrics (KPIs)",
      "Experiment plan",
    ],
  },
  {
    name: "Post-mortem Template",
    description: "Capture learnings from completed experiments to build institutional knowledge",
    fields: [
      "Experiment name and date range",
      "Original hypothesis",
      "Metric delta (actual vs. expected)",
      "What worked (top 2-3 insights)",
      "What didn't work",
      "Confounding factors",
      "Next steps and follow-up tests",
    ],
  },
  {
    name: "Landing Page Wireframe",
    description: "Pre-structured landing page layout based on conversion best practices",
    fields: [
      "Hero: H1, H2, proof, CTA",
      "Trust row: testimonial, badge, stat",
      "Value stack: bullets with microcopy",
      "How it works: 3-step process",
      "Social proof: 3-5 testimonials",
      "CTA row: primary + secondary action",
      "Footer: policies and FAQ",
    ],
  },
  {
    name: "Email Subject Line Pack",
    description: "20 tested subject line formulas for various campaign types",
    fields: [
      "Benefit-focused formulas (5)",
      "Urgency-driven formulas (5)",
      "Curiosity-based formulas (5)",
      "Social proof formulas (5)",
    ],
  },
];

export default function Templates() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Templates & Assets"
        description="Reusable templates and frameworks for rapid execution and consistent quality."
        lastUpdated="2025-01-15"
        editor="Operations Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Browse templates relevant to your current project",
            "Download or duplicate the template to start working",
            "Customize placeholders with your specific content",
          ]}
        />

        <Separator />

        {/* Templates Library */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Templates Library
            </h2>
            <p className="text-muted-foreground">
              Structured templates that encode our frameworks and best practices.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {templates.map((template, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {template.fields.map((field, fieldIdx) => (
                        <li key={fieldIdx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{field}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Create New
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Example: Experiment Brief */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Example: Experiment Brief
            </h2>
            <p className="text-muted-foreground">
              A filled-in template showing how to structure your experiment
              documentation.
            </p>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Hero Guarantee Badge Test</CardTitle>
              <p className="text-sm text-muted-foreground">2025-01-10 to 2025-01-24</p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Hypothesis</h4>
                <p className="text-muted-foreground">
                  If we add a "30-day money-back guarantee" badge to the hero
                  section, then hero-to-checkout conversion will increase by 15% for
                  first-time visitors measured by GA4 checkout initiated events.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Metric</h4>
                <p className="text-muted-foreground">
                  Hero-to-checkout conversion rate. Current baseline: 2.3%. Target:
                  2.7%+
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Success Criteria
                </h4>
                <p className="text-muted-foreground">
                  Statistically significant lift (p &lt; 0.05) with minimum 1,000
                  visitors per variant
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Technical Steps
                </h4>
                <ul className="space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>Design guarantee badge (Design team, 1 day)</li>
                  <li>Add badge component to hero section (Dev, 2 hours)</li>
                  <li>Set up A/B test in Optimizely (Growth, 1 hour)</li>
                  <li>Configure GA4 event tracking (Growth, 1 hour)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  QA Checklist
                </h4>
                <ul className="space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>Badge visible on mobile and desktop</li>
                  <li>A/B split is 50/50</li>
                  <li>GA4 events fire correctly in both variants</li>
                  <li>No layout shift or performance impact</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-1">Rollback</h4>
                <p className="text-muted-foreground">
                  If conversion drops &gt;5% or page speed degrades, pause test
                  immediately and revert to control.
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
                Templates eliminate decision fatigue and ensure consistency. When
                everyone uses the same Experiment Brief structure, reviews are faster
                and nothing gets missed. Templates also encode best practices—like
                including rollback procedures and QA checklists—so even new team
                members can execute at a high level from day one.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
