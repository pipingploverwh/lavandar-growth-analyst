import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const prompts = [
  {
    title: "Hero Copy Generator",
    description: "Generate compelling hero headlines and subheads using TCE framework",
    prompt: `You are writing hero copy for a DTC brand selling [PRODUCT]. 

Customer persona: [PERSONA]
One-line promise: [PROMISE]

Use TCE framework:
- Trustworthy: Include proof points
- Compelling: Clear, quantified value
- Easy-to-act: Simple CTA language

Produce:
1. Three headline variations (8-12 words each)
2. Three subhead variations (20-30 words each)
3. One risk reducer phrase for each

Format as markdown with clear labels.`,
  },
  {
    title: "Experiment Brief Generator",
    description: "Create structured experiment documentation from a hypothesis",
    prompt: `Create an experiment brief for the following hypothesis:

[PASTE HYPOTHESIS HERE]

Include these sections:
1. **Hypothesis**: Restate clearly
2. **Metric**: Primary success metric and target
3. **Success Criteria**: What defines a win?
4. **Technical Steps**: Bullet list of implementation tasks
5. **Assets Needed**: Design, copy, or dev resources
6. **QA Checklist**: What to test before launch
7. **Rollout Steps**: How to deploy safely
8. **Rollback Steps**: How to revert if needed

Keep each section concise and actionable.`,
  },
  {
    title: "Email Flow Generator (3-Step)",
    description: "Generate a welcome email sequence to convert signups to customers",
    prompt: `Write a 3-email welcome flow to convert new signups into first purchase.

Product/Service: [PRODUCT]
Target outcome: [GOAL]
Unique value: [VALUE PROP]

For each email, provide:
- **Subject line**: 6-10 words, benefit-focused
- **Body**: 40-80 words, conversational tone, single CTA
- **CTA**: Clear action and button text

Use value-first tone. Build trust in email 1, show value in email 2, create urgency in email 3.`,
  },
  {
    title: "Landing Page Copy Audit",
    description: "Analyze landing page copy and suggest improvements using TCE",
    prompt: `Audit the following landing page copy using the TCE framework:

[PASTE LANDING PAGE COPY HERE]

Evaluate:
1. **Trustworthy**: Are there sufficient proof points and risk reducers?
2. **Compelling**: Is the value clear and quantified?
3. **Easy-to-act**: Is the CTA obvious and friction minimized?

For each dimension, provide:
- Current score (1-10)
- Top 2 issues
- Top 2 recommendations with specific rewrites

Format as markdown with clear sections.`,
  },
  {
    title: "Value Proposition Generator",
    description: "Create compelling value propositions from product features",
    prompt: `Transform these product features into compelling value propositions:

Features:
[LIST FEATURES]

Target customer: [PERSONA]
Main pain point: [PROBLEM]

For each feature, provide:
1. **Feature**: Original feature
2. **Benefit**: Customer-centric outcome
3. **Value statement**: One-liner connecting feature to outcome using "so you can" format

Example: "Automated reporting → Real-time dashboard → Track campaign performance in real-time, so you can optimize faster and hit targets consistently."`,
  },
  {
    title: "FAQ Generator",
    description: "Generate comprehensive FAQ from product information",
    prompt: `Generate 8-10 frequently asked questions for:

Product: [PRODUCT]
Target customer: [PERSONA]
Price: [PRICE]
Main objections: [OBJECTIONS]

For each Q&A:
- Question: Customer's exact words (conversational)
- Answer: 30-50 words, addressing objection and reinforcing value

Prioritize:
1. Cost concerns
2. Time/effort concerns
3. Risk/trust concerns
4. Comparison concerns

Format as markdown with clear Q&A pairs.`,
  },
];

export default function AI() {
  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast({
      title: "Copied to clipboard",
      description: "Prompt template ready to customize and use.",
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="AI & Automations"
        description="Prompt library and automation runbooks for AI-powered workflows."
        lastUpdated="2025-01-15"
        editor="Growth Ops"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Browse the prompt library and bookmark prompts for your role",
            "Replace placeholders ([PRODUCT], [PERSONA]) with your specifics",
            "Always human-check AI outputs against brand guidelines and fact accuracy",
          ]}
        />

        <Separator />

        {/* Prompt Library */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Prompt Library
            </h2>
            <p className="text-muted-foreground">
              Canonical prompts for common tasks. Copy, customize, and run through
              your AI tool of choice.
            </p>
          </div>

          <div className="space-y-6">
            {prompts.map((item, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyPrompt(item.prompt)}
                      className="gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground overflow-x-auto whitespace-pre-wrap">
                    {item.prompt}
                  </pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Automation Recipes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Automation Recipes
            </h2>
            <p className="text-muted-foreground">
              Pre-built workflows for common integration scenarios.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Experiment Results to Slack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                Automatically post experiment completion and results to #exp-results
                Slack channel.
              </p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Trigger:</strong> Google
                    Sheet row updated in "Experiments" sheet
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Condition:</strong> Status
                    field = "Complete"
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Action:</strong> Send Slack
                    message with experiment name, result, and link
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shopify Conversion Webhook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p className="text-muted-foreground">
                Capture Shopify checkout completions and attribute them to active
                experiments.
              </p>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    In Shopify Admin, create webhook for "Order created" event
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    Point webhook to your tracking endpoint (e.g.,
                    /api/track-conversion)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    Parse UTM parameters and experiment variant from order metadata
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    4
                  </span>
                  <span className="text-muted-foreground">
                    Log conversion to Google Sheets experiment tracker
                  </span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Human Check Checklist */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            AI Output Checklist
          </h2>
          <Card className="border-warning/20 bg-warning/5">
            <CardHeader>
              <CardTitle className="text-warning">
                Always Human-Check AI Outputs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-warning">✓</span>
                  <span>
                    <strong className="text-foreground">Facts & numbers:</strong>{" "}
                    Verify all stats, dates, and claims
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-warning">✓</span>
                  <span>
                    <strong className="text-foreground">Brand voice:</strong> Does it
                    match Mechanism's tone?
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-warning">✓</span>
                  <span>
                    <strong className="text-foreground">Legal language:</strong>{" "}
                    Check guarantees and claims for accuracy
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-warning">✓</span>
                  <span>
                    <strong className="text-foreground">Placeholders:</strong>{" "}
                    Replace all [BRACKETS] before publishing
                  </span>
                </li>
              </ul>
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
                AI accelerates content creation and ideation, but it's not a replacement
                for judgment. These prompts encode our frameworks (TCE, Value Equation)
                so AI outputs align with our standards. The automation recipes eliminate
                manual data entry and ensure results flow to the right places. Always
                review AI work critically—it's a tool to amplify your expertise, not
                replace it.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
