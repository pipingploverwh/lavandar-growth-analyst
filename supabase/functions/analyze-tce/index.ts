import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const TCE_ANALYSIS_PROMPT = `You are an expert conversion rate optimizer analyzing landing pages using the TCE Framework (Trustworthy, Compelling, Easy-to-act).

Analyze the provided landing page content and score it on each dimension from 1-10, with specific improvement recommendations.

## TCE Framework Criteria:

### TRUSTWORTHY (T) - Does it build credibility?
- Social proof (testimonials, logos, case studies, reviews)
- Authority signals (certifications, awards, media mentions)
- Transparency (clear pricing, terms, company info)
- Professional design and copywriting quality
- Security indicators (SSL, payment badges, guarantees)

### COMPELLING (C) - Does it create desire?
- Clear, specific value proposition
- Emotional hooks and pain point identification
- Unique mechanism or differentiation
- Benefit-focused messaging (not feature dumps)
- Urgency/scarcity elements (if authentic)
- Visual hierarchy drawing attention to key messages

### EASY-TO-ACT (E) - Is the path to action frictionless?
- Single, clear CTA (Call to Action)
- Minimal form fields
- Fast loading, mobile-optimized
- No distracting navigation or competing actions
- Clear next steps
- Risk reducers near CTA (guarantees, free trials)

## Response Format:
Return a JSON object with this exact structure:
{
  "trustworthy": {
    "score": <1-10>,
    "strengths": ["<strength 1>", "<strength 2>"],
    "weaknesses": ["<weakness 1>", "<weakness 2>"],
    "recommendations": ["<specific actionable recommendation 1>", "<recommendation 2>", "<recommendation 3>"]
  },
  "compelling": {
    "score": <1-10>,
    "strengths": ["<strength 1>", "<strength 2>"],
    "weaknesses": ["<weakness 1>", "<weakness 2>"],
    "recommendations": ["<specific actionable recommendation 1>", "<recommendation 2>", "<recommendation 3>"]
  },
  "easyToAct": {
    "score": <1-10>,
    "strengths": ["<strength 1>", "<strength 2>"],
    "weaknesses": ["<weakness 1>", "<weakness 2>"],
    "recommendations": ["<specific actionable recommendation 1>", "<recommendation 2>", "<recommendation 3>"]
  },
  "overallScore": <average of three scores>,
  "priorityActions": ["<highest impact action 1>", "<highest impact action 2>", "<highest impact action 3>"],
  "summary": "<2-3 sentence executive summary of the page's conversion potential>"
}

Be specific and actionable. Reference actual content from the page when possible.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { pageContent, url } = await req.json();

    if (!pageContent) {
      return new Response(
        JSON.stringify({ error: 'Page content is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Analyzing page:', url);
    console.log('Content length:', pageContent.length);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: TCE_ANALYSIS_PROMPT },
          { role: 'user', content: `Analyze this landing page from ${url}:\n\n${pageContent}` }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI usage limit reached. Please check your workspace credits.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI response received');

    // Parse the JSON from the response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not parse JSON from AI response');
    }

    const analysis = JSON.parse(jsonMatch[0]);

    return new Response(
      JSON.stringify({ success: true, analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-tce function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Analysis failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
