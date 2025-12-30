import { Helmet } from "react-helmet-async";
import PageHeader from "@/components/PageHeader";
import TCEScorer from "@/components/TCEScorer";

export default function TCEAnalyzer() {
  return (
    <>
      <Helmet>
        <title>TCE Landing Page Analyzer | Mechanism Ventures</title>
        <meta 
          name="description" 
          content="Analyze any landing page on Trustworthy, Compelling, and Easy-to-act dimensions. Get AI-powered scoring and specific improvement recommendations." 
        />
      </Helmet>

      <div className="container max-w-6xl py-8 px-4 md:px-8">
        <PageHeader
          title="TCE Analyzer"
          description="Score any landing page on Trustworthy, Compelling, and Easy-to-act dimensions with AI-powered recommendations."
        />

        <div className="mt-8">
          <TCEScorer />
        </div>
      </div>
    </>
  );
}
