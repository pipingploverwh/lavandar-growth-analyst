import { Helmet } from "react-helmet-async";
import { 
  Gauge, 
  Target, 
  Beaker, 
  BookOpen, 
  Code2, 
  Database, 
  Brain, 
  TrendingUp,
  Linkedin,
  Share2,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/ProjectCard";
import { ShareableBlock } from "@/components/ShareableBlock";

const projects = [
  {
    title: "TCE Analyzer",
    description: "AI-powered landing page analysis tool that scores websites on Trustworthy, Compelling, and Easy-to-act dimensions. Identifies conversion blockers in seconds.",
    techStack: ["React", "TypeScript", "Supabase", "LLM", "Edge Functions"],
    metrics: [
      { label: "Analysis Time", value: "<30s" },
      { label: "Dimensions Scored", value: "3" },
    ],
    liveUrl: "/tce-analyzer",
    icon: <Gauge className="h-5 w-5" />,
  },
  {
    title: "TCE Framework",
    description: "Proprietary conversion rate optimization methodology with documented 127%+ conversion lifts. Systematic scoring system for landing page evaluation.",
    techStack: ["Methodology", "CRO", "A/B Testing", "Analytics"],
    metrics: [
      { label: "Max Lift", value: "+127%" },
      { label: "Case Studies", value: "3+" },
    ],
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Rapid Experiment Playbook",
    description: "High-velocity testing methodology that reduces experiment cycle time from weeks to days. Workflow: Diagnose → Design → Experiment → Scale/Kill.",
    techStack: ["Experimentation", "Growth", "Analytics", "Process"],
    metrics: [
      { label: "Cycle Time", value: "Days" },
      { label: "Phases", value: "4" },
    ],
    icon: <Beaker className="h-5 w-5" />,
  },
  {
    title: "Growth Knowledge Base",
    description: "Comprehensive internal documentation system at mechanismventures.work. Mobile-first, accessible, with sub-2s load times.",
    techStack: ["React", "Vite", "Tailwind", "Supabase"],
    metrics: [
      { label: "Pages", value: "10+" },
      { label: "Load Time", value: "<2s" },
    ],
    liveUrl: "/",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const capabilities = [
  { icon: <Code2 className="h-5 w-5" />, label: "Frontend", skills: "React, TypeScript, Tailwind, Vite" },
  { icon: <Database className="h-5 w-5" />, label: "Backend", skills: "Supabase, PostgreSQL, Edge Functions" },
  { icon: <Brain className="h-5 w-5" />, label: "AI/ML", skills: "LLM Integration, Prompt Engineering" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Growth", skills: "CRO, A/B Testing, Analytics" },
];

const results = [
  { metric: "+127%", label: "Hero Conversion Lift", context: "Skincare Brand" },
  { metric: "+$200k", label: "ARR Increase", context: "SaaS Pricing Page" },
  { metric: "+18%", label: "Cart Recovery Rate", context: "E-commerce Flow" },
];

const shareableContent = {
  linkedInBio: `Growth Engineer & CRO Specialist at Mechanism Ventures

Building AI-powered conversion optimization tools and systematic growth frameworks.

🔧 Open Source: TCE Analyzer - AI landing page scoring
📊 Methodology: TCE Framework with documented +127% lifts
🚀 Focus: High-velocity experimentation & systematic offer design

Tech: React • TypeScript • Supabase • LLM Integration`,

  projectDescription: `🚀 Just shipped: TCE Analyzer - an AI-powered landing page analysis tool

It scores any landing page across 3 dimensions:
✅ Trustworthy - Trust signals & credibility
✅ Compelling - Value proposition clarity
✅ Easy-to-act - Friction & CTA optimization

Built with React, TypeScript, and LLM integration.

The underlying TCE Framework has driven 127%+ conversion lifts in production.

Check it out: mechanismventures.work/tce-analyzer

#CRO #GrowthEngineering #AI #OpenSource`,

  elevatorPitch: `Mechanism Ventures builds AI-powered growth tools and systematic conversion optimization frameworks.

Our flagship TCE Analyzer scores landing pages on Trust, Compelling, and Easy-to-act dimensions - identifying conversion blockers in seconds instead of hours.

We've documented 127%+ conversion lifts using our methodology and open-source our tools for the growth community.`,
};

export default function LinkedInPortfolio() {
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.origin + "/linkedin-portfolio");
    const text = encodeURIComponent("Check out the growth tools and frameworks we're building at Mechanism Ventures 🚀");
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Mechanism Ventures - Project Portfolio | Growth Engineering & CRO</title>
        <meta 
          name="description" 
          content="Explore Mechanism Ventures' open-source growth tools, CRO frameworks, and AI-powered conversion optimization projects." 
        />
        <meta property="og:title" content="Mechanism Ventures - Project Portfolio" />
        <meta property="og:description" content="AI-powered growth tools and systematic conversion optimization frameworks. TCE Analyzer, Growth Playbooks, and more." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <span className="text-xl font-bold text-primary-foreground">M</span>
              </div>
            </div>
            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Mechanism Ventures
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              Building AI-powered growth tools and systematic conversion optimization frameworks
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={handleLinkedInShare} className="gap-2">
                <Linkedin className="h-4 w-4" />
                Share on LinkedIn
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Visit Site
                </a>
              </Button>
            </div>
          </header>

          {/* At-a-Glance Metrics */}
          <section className="mb-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "5+", label: "Open Source Tools" },
                { value: "4", label: "Frameworks" },
                { value: "3+", label: "Case Studies" },
                { value: "+127%", label: "Max Conversion Lift" },
              ].map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Projects & Tools</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          {/* Technical Capabilities */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Technical Capabilities</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap) => (
                <Card key={cap.label}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="text-primary">{cap.icon}</div>
                      <CardTitle className="text-base">{cap.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cap.skills}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Documented Results</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {results.map((result) => (
                <Card key={result.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="mb-1 text-3xl font-bold text-primary">{result.metric}</div>
                    <div className="font-medium">{result.label}</div>
                    <Badge variant="secondary" className="mt-2">
                      {result.context}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Shareable Content */}
          <section>
            <div className="mb-6 flex items-center gap-2">
              <Share2 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Shareable Content</h2>
            </div>
            <p className="mb-6 text-muted-foreground">
              Copy these pre-written snippets for LinkedIn, bios, or presentations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <ShareableBlock
                title="LinkedIn Bio"
                content={shareableContent.linkedInBio}
              />
              <ShareableBlock
                title="Elevator Pitch"
                content={shareableContent.elevatorPitch}
              />
              <ShareableBlock
                title="Project Announcement Post"
                content={shareableContent.projectDescription}
                className="md:col-span-2"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
