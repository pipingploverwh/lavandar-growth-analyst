import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  LineChart, 
  FileText, 
  Code2, 
  Users, 
  Zap,
  Globe,
  Award,
  Target,
  Lightbulb
} from "lucide-react";

const openSourceProjects = [
  {
    name: "TCE Analyzer",
    description: "AI-powered landing page analysis tool that scores websites on Trustworthy, Compelling, and Easy-to-act dimensions. Uses advanced language models to provide actionable conversion optimization recommendations.",
    tech: ["React", "TypeScript", "Supabase Edge Functions", "AI/LLM Integration"],
    impact: "Enables businesses to identify conversion blockers in seconds instead of hours of manual audit",
    status: "Live",
    icon: Brain,
  },
  {
    name: "TCE Framework",
    description: "A proprietary conversion rate optimization methodology that evaluates digital experiences across three dimensions: Trust signals, Compelling value propositions, and Ease of action.",
    tech: ["Methodology", "Documentation", "Scoring System"],
    impact: "Used to optimize landing pages with documented 127%+ conversion lifts",
    status: "Published",
    icon: Target,
  },
  {
    name: "Value Equation System",
    description: "A systematic approach to offer design that quantifies perceived value through the formula: Value = (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice).",
    tech: ["Framework", "Templates", "Calculators"],
    impact: "Enables systematic creation of high-converting offers across industries",
    status: "Published",
    icon: LineChart,
  },
  {
    name: "Rapid Experiment Playbook",
    description: "A high-velocity testing methodology with structured templates for hypothesis documentation, experiment execution, and learning capture. Follows Diagnose → Design → Experiment → Scale/Kill workflow.",
    tech: ["Process Framework", "Templates", "Documentation"],
    impact: "Reduces experiment cycle time from weeks to days",
    status: "Published",
    icon: Zap,
  },
  {
    name: "Growth Knowledge Base",
    description: "Comprehensive internal documentation system covering growth strategies, conversion optimization, experimentation frameworks, and operational playbooks. Built as a modern web application.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    impact: "Accelerates team onboarding and ensures consistent execution quality",
    status: "Live",
    icon: FileText,
  },
];

const technicalCapabilities = [
  {
    category: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    category: "Backend & Infrastructure",
    skills: ["Supabase", "Edge Functions", "PostgreSQL", "REST APIs", "Serverless"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["LLM Integration", "Prompt Engineering", "AI-Powered Analysis", "Natural Language Processing"],
  },
  {
    category: "Growth & Analytics",
    skills: ["Conversion Optimization", "A/B Testing", "GA4", "Experimentation Frameworks"],
  },
];

const metrics = [
  { label: "Open Source Tools", value: "5+", icon: Code2 },
  { label: "Documented Frameworks", value: "4", icon: Lightbulb },
  { label: "Case Studies Published", value: "3+", icon: Award },
  { label: "Active Users", value: "Growing", icon: Users },
];

export default function StartupVisa() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Mechanism Ventures — Innovation Summary"
        description="Overview of technical projects, open-source contributions, and innovative methodologies developed by Mechanism Ventures."
        lastUpdated="2025-01-18"
        editor="Mechanism Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        {/* Executive Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mechanism Ventures</strong> is a growth and conversion optimization company that develops innovative tools, frameworks, and methodologies to help businesses improve their digital conversion rates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine <strong className="text-foreground">AI-powered analysis tools</strong> with proprietary <strong className="text-foreground">optimization frameworks</strong> to deliver measurable business outcomes. Our work spans full-stack software development, machine learning integration, and systematic growth methodology development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our open-source contributions and published frameworks serve the broader marketing technology and conversion optimization community.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Metrics */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Innovation Metrics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <metric.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Open Source Projects */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Projects & Open Source Contributions
            </h2>
            <p className="text-muted-foreground">
              Software tools, frameworks, and methodologies developed and published by Mechanism Ventures.
            </p>
          </div>

          <div className="space-y-4">
            {openSourceProjects.map((project, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                        <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies & Components</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Technical Capabilities */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Technical Capabilities
            </h2>
            <p className="text-muted-foreground">
              Core technical competencies demonstrated across our projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technicalCapabilities.map((cap, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-lg">{cap.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cap.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Documented Results */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Documented Results
            </h2>
            <p className="text-muted-foreground">
              Published case studies demonstrating the effectiveness of our methodologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">+127%</div>
                <div className="text-sm text-muted-foreground">Hero Conversion Lift</div>
                <div className="text-xs text-muted-foreground mt-1">Skincare Brand</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">+$200k</div>
                <div className="text-sm text-muted-foreground">ARR Increase</div>
                <div className="text-xs text-muted-foreground mt-1">SaaS Pricing Page</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">+18%</div>
                <div className="text-sm text-muted-foreground">Cart Recovery Rate</div>
                <div className="text-xs text-muted-foreground mt-1">E-commerce Flow</div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Innovation Focus */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Innovation Focus</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">AI-Powered Marketing Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    Developing AI applications that automate and enhance marketing analysis, reducing manual effort and improving accuracy of conversion optimization recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Systematic Methodology Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating and publishing structured frameworks that codify best practices in conversion optimization, enabling repeatable success across different industries and contexts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Open Source Contribution</h4>
                  <p className="text-sm text-muted-foreground">
                    Sharing tools and methodologies with the broader community to advance the field of conversion optimization and growth marketing technology.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Footer Note */}
        <section>
          <Card className="border-muted">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground text-center">
                This document summarizes the technical work and innovation activities of Mechanism Ventures. 
                For additional information or documentation, please contact the team.
              </p>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Last updated: January 2025 • growth-archive.lovable.app/startup-visa
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
