import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Flag } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  lastUpdated: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is TCE and why does it matter?",
    answer:
      "TCE stands for Trustworthy, Compelling, and Easy-to-act. It's our framework for evaluating every offer, page, and experiment. A page can be compelling but if it's not trustworthy or easy-to-act on, conversions suffer. All three dimensions must be strong.",
    category: "Frameworks",
    lastUpdated: "2025-01-15",
  },
  {
    id: "2",
    question: "How do I prioritize experiments?",
    answer:
      "Use the ICE scoring rubric: rate each experiment 1-10 on Impact, Confidence, and Ease, then average the scores. Focus on experiments with the highest ICE score. This balances big wins with practical execution.",
    category: "Growth",
    lastUpdated: "2025-01-15",
  },
  {
    id: "3",
    question: "What should I include in an Offer One-Pager?",
    answer:
      "Every Offer One-Pager needs: title/one-liner, target customer, outcome & timeline, value drivers (3-5), risk reducers, price architecture, urgency/scarcity levers, success metrics, and an experiment plan to validate. See the template in Templates & Assets.",
    category: "Offer Design",
    lastUpdated: "2025-01-15",
  },
  {
    id: "4",
    question: "How long should an experiment run?",
    answer:
      "Run until you reach statistical significance (p < 0.05) with at least 1,000 visitors per variant. Typically 1-2 weeks for high-traffic pages, 3-4 weeks for lower traffic. Don't call results early—false positives are costly.",
    category: "Growth",
    lastUpdated: "2025-01-15",
  },
  {
    id: "5",
    question: "Who owns experiment implementation?",
    answer:
      "Growth is Responsible (R) for execution, Product is Accountable (A), and Design/Engineering are Consulted (C). See the full RACI matrix in Operating Principles.",
    category: "Operations",
    lastUpdated: "2025-01-15",
  },
  {
    id: "6",
    question: "What tools do we use for A/B testing?",
    answer:
      "We primarily use Optimizely for A/B testing and Google Analytics 4 for measurement. Some teams also use VWO or native platform tools (Shopify for e-commerce). Check Tools & Tech Stack for current setup.",
    category: "Tools",
    lastUpdated: "2025-01-15",
  },
  {
    id: "7",
    question: "How do I write a good hypothesis?",
    answer:
      'Use the format: "If we [change], then [expected outcome] for [segment] measured by [metric]." Be specific about the change, outcome, and how you\'ll measure success. Vague hypotheses lead to inconclusive tests.',
    category: "Growth",
    lastUpdated: "2025-01-15",
  },
  {
    id: "8",
    question: "What if an experiment fails?",
    answer:
      "Document the learning in a post-mortem and share with the team. Failed experiments aren't failures—they're data. Capture what you learned and iterate. Some of our biggest wins came from iterating on failed tests.",
    category: "Growth",
    lastUpdated: "2025-01-15",
  },
  {
    id: "9",
    question: "Can I use AI for copywriting?",
    answer:
      "Yes, but always human-check outputs. Use the prompts in AI & Automations as starting points. AI is great for first drafts and variations, but you must verify facts, match brand voice, and ensure legal compliance.",
    category: "AI",
    lastUpdated: "2025-01-15",
  },
  {
    id: "10",
    question: "How do I get access to Figma / Shopify / other tools?",
    answer:
      "Contact your team lead or Operations for account access. New hires typically get provisioned within 48 hours. See Tools & Tech Stack for account owners and access request procedures.",
    category: "Operations",
    lastUpdated: "2025-01-15",
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const flagDiscrepancy = (faqId: string) => {
    toast({
      title: "Discrepancy reported",
      description: "Your feedback has been submitted for review. Thank you!",
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        description="Common questions about frameworks, tools, and processes. Searchable and tagged for easy navigation."
        lastUpdated="2025-01-15"
        editor="Knowledge Base Team"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-6 py-12 md:px-12">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search questions, answers, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={searchQuery === "" ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              onClick={() => setSearchQuery(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* FAQ Accordion */}
        {filteredFAQs.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-lg border border-border bg-card px-6"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-start gap-3 text-left">
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {faq.category}
                      </Badge>
                      <span>Updated: {faq.lastUpdated}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => flagDiscrepancy(faq.id)}
                      className="gap-2 text-xs"
                    >
                      <Flag className="h-3 w-3" />
                      Flag discrepancy
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="rounded-lg border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">
              No FAQs match your search. Try different keywords or clear the
              filter.
            </p>
          </div>
        )}

        {/* Import Notice */}
        <div className="rounded-lg border border-border bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> FAQs are imported
            from mechanism.work and deduplicated. To add new questions or report
            issues, contact the Knowledge Base team.
          </p>
        </div>
      </div>
    </div>
  );
}
