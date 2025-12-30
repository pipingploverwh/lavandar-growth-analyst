import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Loader2, ExternalLink, CheckCircle2, AlertCircle, Target, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface DimensionScore {
  score: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

interface TCEAnalysis {
  trustworthy: DimensionScore;
  compelling: DimensionScore;
  easyToAct: DimensionScore;
  overallScore: number;
  priorityActions: string[];
  summary: string;
}

export default function TCEScorer() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<TCEAnalysis | null>(null);
  const { toast } = useToast();

  const analyzeUrl = async () => {
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a landing page URL to analyze.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setAnalysis(null);

    try {
      // First fetch the page content
      const { data: fetchData, error: fetchError } = await supabase.functions.invoke('fetch-page', {
        body: { url }
      });

      if (fetchError || !fetchData?.success) {
        throw new Error(fetchData?.error || fetchError?.message || 'Failed to fetch page');
      }

      // Then analyze with AI
      const { data: analyzeData, error: analyzeError } = await supabase.functions.invoke('analyze-tce', {
        body: { pageContent: fetchData.content, url: fetchData.url }
      });

      if (analyzeError || !analyzeData?.success) {
        throw new Error(analyzeData?.error || analyzeError?.message || 'Failed to analyze page');
      }

      setAnalysis(analyzeData.analysis);
      toast({
        title: "Analysis Complete",
        description: "Your TCE score has been calculated.",
      });

    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze the page",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-success";
    if (score >= 6) return "text-warning";
    return "text-destructive";
  };

  const getScoreBg = (score: number) => {
    if (score >= 8) return "bg-success/20";
    if (score >= 6) return "bg-warning/20";
    return "bg-destructive/20";
  };

  const DimensionCard = ({ 
    title, 
    icon: Icon, 
    data, 
    description 
  }: { 
    title: string; 
    icon: React.ElementType; 
    data: DimensionScore;
    description: string;
  }) => (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <div className={`text-3xl font-bold ${getScoreColor(data.score)}`}>
            {data.score}/10
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
        <Progress value={data.score * 10} className="h-2 mt-2" />
      </CardHeader>
      <CardContent className="space-y-4">
        {data.strengths.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-success" /> Strengths
            </h4>
            <ul className="space-y-1">
              {data.strengths.map((s, i) => (
                <li key={i} className="text-sm text-foreground/90 flex items-start gap-2">
                  <span className="text-success mt-1">•</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.weaknesses.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-1">
              <AlertCircle className="h-4 w-4 text-warning" /> Weaknesses
            </h4>
            <ul className="space-y-1">
              {data.weaknesses.map((w, i) => (
                <li key={i} className="text-sm text-foreground/90 flex items-start gap-2">
                  <span className="text-warning mt-1">•</span> {w}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h4>
          <ul className="space-y-2">
            {data.recommendations.map((r, i) => (
              <li key={i} className="text-sm bg-secondary/50 rounded-md p-2 text-foreground/90">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            TCE Landing Page Analyzer
          </CardTitle>
          <CardDescription>
            Enter a landing page URL to get scored on Trustworthy, Compelling, and Easy-to-act dimensions with specific improvement recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              type="url"
              placeholder="https://example.com/landing-page"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !loading && analyzeUrl()}
              className="flex-1"
              disabled={loading}
            />
            <Button onClick={analyzeUrl} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {analysis && (
        <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
          {/* Overall Score */}
          <Card className={`${getScoreBg(analysis.overallScore)} border-border`}>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Overall TCE Score</h3>
                  <div className={`text-5xl font-bold ${getScoreColor(analysis.overallScore)}`}>
                    {analysis.overallScore.toFixed(1)}/10
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className={`text-xl font-semibold ${getScoreColor(analysis.trustworthy.score)}`}>
                      {analysis.trustworthy.score}
                    </div>
                    <div className="text-xs text-muted-foreground">Trust</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className={`text-xl font-semibold ${getScoreColor(analysis.compelling.score)}`}>
                      {analysis.compelling.score}
                    </div>
                    <div className="text-xs text-muted-foreground">Compelling</div>
                  </div>
                  <div className="text-center">
                    <Zap className="h-6 w-6 text-primary mx-auto mb-1" />
                    <div className={`text-xl font-semibold ${getScoreColor(analysis.easyToAct.score)}`}>
                      {analysis.easyToAct.score}
                    </div>
                    <div className="text-xs text-muted-foreground">Easy</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-foreground/80">{analysis.summary}</p>
            </CardContent>
          </Card>

          {/* Priority Actions */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">🎯 Priority Actions</CardTitle>
              <CardDescription>Highest-impact improvements to make right now</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {analysis.priorityActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5 shrink-0">{i + 1}</Badge>
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Dimension Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            <DimensionCard
              title="Trustworthy"
              icon={Shield}
              data={analysis.trustworthy}
              description="Does it build credibility and trust?"
            />
            <DimensionCard
              title="Compelling"
              icon={Target}
              data={analysis.compelling}
              description="Does it create desire and urgency?"
            />
            <DimensionCard
              title="Easy-to-Act"
              icon={Zap}
              data={analysis.easyToAct}
              description="Is the path to action frictionless?"
            />
          </div>

          {/* View Page Link */}
          <div className="text-center">
            <Button variant="outline" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Analyzed Page
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
