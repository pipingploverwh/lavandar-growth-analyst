import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Shopify",
    purpose: "E-commerce platform",
    owner: "Engineering Lead",
    conventions: [
      "Store naming: client-name-environment (e.g., acme-staging)",
      "Theme naming: YYYY-MM-DD_variant-name",
      "Sync all product changes to staging first",
    ],
    doList: ["Test on staging before production", "Document all app integrations"],
    dontList: ["Push theme changes without backup", "Edit live store during peak hours"],
  },
  {
    name: "Lovable",
    purpose: "Frontend development & deployment",
    owner: "Engineering Team",
    conventions: [
      "Project URL: mechanismventures.work",
      "Use Lovable publish for all frontend deployments",
      "Keep dev and production branches in sync",
    ],
    doList: ["Deploy through Lovable UI", "Test responsive design before deploy"],
    dontList: ["Manual FTP uploads", "Deploy unreviewed code"],
  },
  {
    name: "Figma",
    purpose: "Design & prototyping",
    owner: "Design Lead",
    conventions: [
      "Design library: Mechanism Design System",
      "Export assets at 2x resolution",
      "Name layers descriptively for handoff",
    ],
    doList: ["Use components from design system", "Export SVGs for icons"],
    dontList: ["Create one-off styles", "Forget to update design system"],
  },
  {
    name: "Klaviyo",
    purpose: "Email marketing & automation",
    owner: "Growth Ops",
    conventions: [
      "List naming: segment_type_date (e.g., vip_buyers_2025-01)",
      "Flow naming: trigger_goal (e.g., abandon-cart_recovery)",
      "Always test on internal list first",
    ],
    doList: ["A/B test subject lines", "Track UTM parameters"],
    dontList: ["Send without preview", "Skip mobile testing"],
  },
  {
    name: "Google Analytics 4",
    purpose: "Analytics & conversion tracking",
    owner: "Growth Team",
    conventions: [
      "Event naming: action_object (e.g., click_cta, view_pricing)",
      "Custom dimensions for experiment variants",
      "Tag all external links with utm_source",
    ],
    doList: ["Verify events in DebugView", "Document all custom events"],
    dontList: ["Create duplicate events", "Track PII in events"],
  },
  {
    name: "Stripe",
    purpose: "Payment processing",
    owner: "Engineering Lead",
    conventions: [
      "Use test mode for all staging",
      "Product naming: clear, customer-facing names",
      "Webhook endpoints must have retry logic",
    ],
    doList: ["Test webhook failures", "Log all payment events"],
    dontList: ["Hardcode API keys", "Skip webhook signature verification"],
  },
];

export default function Tools() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Tools & Tech Stack"
        description="Accounts, integrations, naming conventions, and best practices for all platform tools."
        lastUpdated="2025-01-15"
        editor="Operations Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Review access and ownership for tools relevant to your role",
            "Familiarize yourself with naming conventions for your primary tools",
            "Bookmark this page and refer to Do/Don't lists before major changes",
          ]}
        />

        <Separator />

        {/* Tools Grid */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Platform Tools
            </h2>
            <p className="text-muted-foreground">
              Core tools, conventions, and guidelines for the team.
            </p>
          </div>

          <div className="space-y-6">
            {tools.map((tool) => (
              <Card key={tool.name}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {tool.purpose}
                      </p>
                    </div>
                    <Badge variant="secondary">{tool.owner}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Conventions */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Naming Conventions
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {tool.conventions.map((conv, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{conv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Do / Don't */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-success mb-2">
                        ✓ Do
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {tool.doList.map((item, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-success">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-2">
                        ✗ Don't
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {tool.dontList.map((item, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-destructive">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Integration Guides */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Integration Runbooks
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Shopify ↔ Lovable Connection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    1
                  </span>
                  <span className="text-muted-foreground">
                    In Shopify, go to Online Store → Themes → Customize
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    2
                  </span>
                  <span className="text-muted-foreground">
                    Add custom liquid section and embed Lovable frontend URL
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    3
                  </span>
                  <span className="text-muted-foreground">
                    Test checkout flow in Shopify staging environment
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    4
                  </span>
                  <span className="text-muted-foreground">
                    Deploy to production and verify all tracking pixels fire
                  </span>
                </li>
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
                Consistent conventions prevent errors, speed up onboarding, and make
                collaboration seamless. When everyone follows the same naming patterns
                and best practices, we spend less time debugging and more time
                shipping. The Do/Don't lists capture hard-learned lessons so you don't
                have to repeat mistakes.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
