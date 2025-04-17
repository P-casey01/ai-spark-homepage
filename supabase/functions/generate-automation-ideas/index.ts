
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { businessDescription } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an AI automation expert. Generate 3 specific automation ideas for businesses. 
            For each idea, provide:
            1. A clear title
            2. A detailed description
            3. Complexity level (Low/Medium/High)
            4. Estimated implementation time
            Format the response as a JSON array with objects containing title, description, complexity, and estimatedTime fields.
            Do NOT include any markdown formatting syntax (like \`\`\`json). Return ONLY the raw JSON array.`
          },
          {
            role: 'user',
            content: `Generate 3 automation ideas for this business: ${businessDescription}`
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const generatedText = data.choices[0].message.content;
    
    console.log("Raw OpenAI response:", generatedText);
    
    // Clean up any potential markdown formatting
    let cleanedText = generatedText.replace(/```json|```/g, "").trim();
    
    try {
      // Parse the JSON string from the cleaned response
      const ideas = JSON.parse(cleanedText);
      
      return new Response(JSON.stringify({ ideas }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (parseError) {
      console.error('JSON parsing error:', parseError, 'Text was:', cleanedText);
      return new Response(JSON.stringify({ 
        error: "Failed to parse AI response", 
        rawResponse: cleanedText 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error in generate-automation-ideas function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
