
import "https://deno.land/x/xhr@0.1.0/mod.ts";
// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Use the secret stored in Supabase
const openAIApiKey =Deno.env.get('New_Open_AI_API_KEY');

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
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not found. Please set either OPENAI_API_KEY or New_Open_AI_API_Key in Supabase secrets');
    }

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
            content: `You are an AI automation expert. Generate 3 highly specific automation ideas tailored to the business described by the user. Consider the business's industry, size, pain points, and potential growth opportunities. For each idea, provide:\n1. A clear, relevant title\n2. A detailed, business-specific description (explain why it fits this business)\n3. Complexity level (Low/Medium/High)\n4. Estimated implementation time.\nFormat the response as a JSON array with objects containing title, description, complexity, and estimatedTime fields.\nDo NOT include any markdown formatting syntax (like \`\`\`json). Return ONLY the raw JSON array.`
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
    
    // Check if the response has the expected structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response structure:', data);
      throw new Error('Invalid response from OpenAI API');
    }
    
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
