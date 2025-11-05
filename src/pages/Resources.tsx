import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Video, Image, ExternalLink } from "lucide-react";

const caseStudies = [
  {
    title: "Skincare Brand: 2.1% to 4.8% Hero Conversion",
    description:
      "How we doubled hero conversion with TCE audit and 3 targeted experiments over 30 days",
    outcome: "+127% conversion lift",
    date: "2024-12",
    link: "#",
  },
  {
    title: "SaaS Pricing Page: $200k ARR Boost",
    description:
      "Risk reducer copy changes and CTA redesign increased trial signups by 34%",
    outcome: "+34% trial signups",
    date: "2024-11",
    link: "#",
  },
  {
    title: "E-commerce Checkout: Abandoned Cart Recovery",
    description:
      "Email flow redesign using value-first tone recovered 18% of abandoned carts",
    outcome: "+18% recovery rate",
    date: "2024-10",
    link: "#",
  },
];

const recordings = [
  {
    title: "TCE Framework Deep Dive",
    description:
      "45-minute workshop covering Trustworthy, Compelling, Easy-to-act with live examples",
    duration: "45 min",
    date: "2025-01-10",
    link: "#",
  },
  {
    title: "Value Equation Masterclass",
    description:
      "How to use the Value Equation to design offers that sell themselves",
    duration: "60 min",
    date: "2024-12-15",
    link: "#",
  },
  {
    title: "Rapid Experiment Playbook Walkthrough",
    description:
      "Step-by-step guide to running high-velocity experiments from hypothesis to rollout",
    duration: "35 min",
    date: "2024-11-20",
    link: "#",
  },
];

const designAssets = [
  {
    name: "Mechanism Design System",
    description: "Figma library with all brand colors, typography, and components",
    type: "Figma",
    link: "#",
  },
  {
    name: "Icon Pack",
    description: "200+ custom icons for landing pages and marketing materials",
    type: "SVG",
    link: "#",
  },
  {
    name: "Hero Image Collection",
    description: "High-quality hero images optimized for web performance",
    type: "Images",
    link: "#",
  },
  {
    name: "Email Templates",
    description: "Pre-built email layouts compatible with Klaviyo and Mailchimp",
    type: "HTML",
    link: "#",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Resources"
        description="Case studies, recordings, design assets, and reference materials to accelerate your work."
        lastUpdated="2025-01-15"
        editor="Knowledge Base Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Review case studies relevant to your current project type",
            "Watch recordings to deepen understanding of key frameworks",
            "Download design assets and templates to speed up execution",
          ]}
        />

        <Separator />

        {/* Case Studies */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Case Studies
            </h2>
            <p className="text-muted-foreground">
              Real results from client engagements, with metrics and key learnings.
            </p>
          </div>

          <div className="space-y-4">
            {caseStudies.map((study, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <CardTitle className="text-lg">{study.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {study.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-lg font-bold text-primary">
                        {study.outcome}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {study.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileText className="h-4 w-4" />
                    Read Case Study
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Recordings */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Workshop Recordings
            </h2>
            <p className="text-muted-foreground">
              Deep dives on frameworks, tools, and best practices from the team.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {recordings.map((recording, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-base">{recording.title}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {recording.duration} • {recording.date}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {recording.description}
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Video className="h-4 w-4" />
                    Watch Recording
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Design Assets */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Design Assets
            </h2>
            <p className="text-muted-foreground">
              Brand files, templates, and visual resources ready to use.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {designAssets.map((asset, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Image className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <CardTitle className="text-base">{asset.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{asset.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {asset.description}
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Access Asset
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
                Resources turn abstract concepts into concrete examples. Case studies
                show what good looks like, recordings deepen your understanding, and
                design assets eliminate starting-from-scratch. Together, they
                accelerate learning and reduce the time from "I need to do X" to "X
                is done."
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
