import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ChangelogEntry {
  date: string;
  editor: string;
  section: string;
  summary: string;
  type: "added" | "updated" | "removed";
}

const changelog: ChangelogEntry[] = [
  {
    date: "2025-01-15",
    editor: "Growth Team",
    section: "AI & Automations",
    summary: "Added 6 new AI prompts for common tasks: hero copy, experiments, emails, audits, value props, and FAQs",
    type: "added",
  },
  {
    date: "2025-01-15",
    editor: "Operations Team",
    section: "Tools & Tech Stack",
    summary: "Updated Shopify and Klaviyo naming conventions and added integration runbook",
    type: "updated",
  },
  {
    date: "2025-01-14",
    editor: "Design Team",
    section: "Templates & Assets",
    summary: "Published Landing Page Wireframe template with conversion-optimized structure",
    type: "added",
  },
  {
    date: "2025-01-14",
    editor: "Growth Team",
    section: "Growth Playbooks",
    summary: "Refined 5-minute hero audit checklist based on recent test learnings",
    type: "updated",
  },
  {
    date: "2025-01-13",
    editor: "Knowledge Base Team",
    section: "FAQ",
    summary: "Imported 10 FAQs from mechanism.work, deduplicated, and tagged by category",
    type: "added",
  },
  {
    date: "2025-01-12",
    editor: "Operations Team",
    section: "Operating Principles",
    summary: "Clarified RACI matrix for experiments and escalation rules",
    type: "updated",
  },
  {
    date: "2025-01-10",
    editor: "Growth Team",
    section: "Offer Design",
    summary: "Added example Offer One-Pager: Hero Page Conversion Accelerator",
    type: "added",
  },
  {
    date: "2025-01-08",
    editor: "Knowledge Base Team",
    section: "Home",
    summary: "Updated company overview copy to reflect Q1 2025 positioning",
    type: "updated",
  },
  {
    date: "2025-01-05",
    editor: "Design Team",
    section: "Resources",
    summary: "Published 3 new case studies with quantified outcomes and learnings",
    type: "added",
  },
  {
    date: "2025-01-03",
    editor: "Operations Team",
    section: "Tools & Tech Stack",
    summary: "Removed deprecated Mailchimp references, replaced with Klaviyo",
    type: "removed",
  },
];

const getTypeColor = (type: ChangelogEntry["type"]) => {
  switch (type) {
    case "added":
      return "bg-success/10 text-success border-success/20";
    case "updated":
      return "bg-primary/10 text-primary border-primary/20";
    case "removed":
      return "bg-destructive/10 text-destructive border-destructive/20";
  }
};

export default function Changelog() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Changelog & Governance"
        description="Audit log of all playbook changes, edit rules, and content governance policies."
        lastUpdated="2025-01-15"
        editor="Knowledge Base Team"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-6 py-12 md:px-12">
        {/* Governance Rules */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Edit Rules & Governance
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Who can edit?</h4>
                <ul className="space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>
                    <strong className="text-foreground">Section owners:</strong>{" "}
                    Can edit their assigned sections directly
                  </li>
                  <li>
                    <strong className="text-foreground">Contributors:</strong> Can
                    propose changes via comments, reviewed by section owner
                  </li>
                  <li>
                    <strong className="text-foreground">Admins:</strong> Can edit
                    all sections and manage permissions
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Required metadata
                </h4>
                <p className="text-muted-foreground">
                  Every page must include: Editor name, Last updated date (YYYY-MM-DD
                  format), and a changelog entry if content changed
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Review cycle
                </h4>
                <p className="text-muted-foreground">
                  All content is reviewed quarterly. Section owners are notified 2
                  weeks before review and must confirm accuracy or update content.
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Conflict resolution
                </h4>
                <p className="text-muted-foreground">
                  If two sources conflict (e.g., FAQ vs. main page), flag for
                  resolution using the "Flag discrepancy" button. Knowledge Base team
                  will consolidate within 48 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Changelog */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Recent Changes
            </h2>
            <p className="text-muted-foreground">
              All playbook edits logged for transparency and audit purposes.
            </p>
          </div>

          <div className="space-y-4">
            {changelog.map((entry, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={getTypeColor(entry.type)}>
                          {entry.type}
                        </Badge>
                        <span className="text-sm font-semibold text-foreground">
                          {entry.section}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {entry.summary}
                      </p>
                    </div>
                    <div className="shrink-0 text-right text-xs text-muted-foreground">
                      <div>{entry.date}</div>
                      <div>{entry.editor}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Admin Panel Stub */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Admin Panel</h2>
          <Card className="border-primary/20 bg-muted/50">
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Admin access required:</strong>{" "}
                Manage editors, set section permissions, and configure domain
                settings. Contact Operations team for admin provisioning.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
