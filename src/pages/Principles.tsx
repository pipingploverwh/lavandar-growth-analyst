import PageHeader from "@/components/PageHeader";
import QuickStart from "@/components/QuickStart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

export default function Principles() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Operating Principles"
        description="TCE framework, decision rules, and team conventions for consistent execution."
        lastUpdated="2025-01-15"
        editor="Operations Team"
      />

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-12 md:px-12">
        <QuickStart
          items={[
            "Evaluate your current hero page against TCE criteria",
            "Review the RACI matrix for your team role",
            "Join relevant Slack channels (#exp-, #ops-, #design-)",
          ]}
        />

        <Separator />

        {/* TCE Framework */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              TCE Framework
            </h2>
            <p className="text-muted-foreground">
              Every offer, page, and experiment must be Trustworthy, Compelling, and
              Easy-to-act.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Trustworthy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Proof points, social proof, transparent pricing and policies build
                  credibility.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">
                    Examples:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Explicitly list refund policy in hero subhead</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Display customer testimonials with real names/photos</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Show transparent pricing without hidden fees</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Include security badges and certifications</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Compelling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Clear outcome and measurable value that speaks to customer needs.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">
                    Examples:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>
                        "Double conversion on your hero page within 30 days"
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Quantified outcomes with specific timelines</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Visual representation of value (before/after)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Address specific pain points customers have</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Easy-to-act</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Reduce friction through single CTAs, simple forms, and clear risk
                  reducers.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">
                    Examples:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Single, prominent CTA button per section</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>One-field checkout or sign-up forms</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Clear next steps without confusion</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>Mobile-optimized with large tap targets</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Decision Rules & RACI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Decision Rules & RACI
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Experiment RACI Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 text-left font-semibold">Role</th>
                      <th className="py-3 text-left font-semibold">
                        Responsible
                      </th>
                      <th className="py-3 text-left font-semibold">
                        Accountable
                      </th>
                      <th className="py-3 text-left font-semibold">Consulted</th>
                      <th className="py-3 text-left font-semibold">Informed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 font-medium">Growth</td>
                      <td className="py-3 text-muted-foreground">✓</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Design</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">✓</td>
                      <td className="py-3 text-muted-foreground">—</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Engineering</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">✓</td>
                      <td className="py-3 text-muted-foreground">—</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Product</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">✓</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Growth Ops</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">—</td>
                      <td className="py-3 text-muted-foreground">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Escalation rule:</strong> If
                  experiment impacts revenue &gt; 10% or requires &gt;2 hours backend
                  dev, escalate to engineering lead.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Meeting Norms */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Meeting norms</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Experiment Standups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  15 minutes, three times weekly. Share progress, blockers, and next
                  tests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Post-mortems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  30 minutes within 3 business days of test completion. Document
                  learnings.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Communication Conventions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Communication conventions
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    #exp-
                  </span>
                  <span className="text-muted-foreground">
                    For experiment threads and test discussions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    #ops-
                  </span>
                  <span className="text-muted-foreground">
                    For operational updates and system changes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    #design-
                  </span>
                  <span className="text-muted-foreground">
                    For design requests and creative reviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                    YYYY-MM-DD
                  </span>
                  <span className="text-muted-foreground">
                    Notion naming convention: Date — [Project] — Type
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
