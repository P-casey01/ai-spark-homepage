
import "https://deno.land/x/xhr@0.1.0/mod.ts";
// @ts-ignore
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    // Try to get the OpenAI API key from Supabase secrets
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY') || Deno.env.get('New_Open_AI_API_KEY');
    
    if (!openAIApiKey) {
      console.error('OpenAI API key not found in Supabase secrets');
      throw new Error('OpenAI API key not found. Please set either OPENAI_API_KEY or New_Open_AI_API_Key in Supabase secrets');
    }

    // Get the business description from the request body
    const { businessDescription } = await req.json();

    if (!businessDescription || typeof businessDescription !== 'string') {
      console.error('Invalid or missing business description in request');
      return new Response(JSON.stringify({ 
        error: "Invalid request: business description is required" 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Making request to OpenAI with business description:", businessDescription);

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

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API responded with an error:', response.status, errorData);
      return new Response(JSON.stringify({ 
        error: `OpenAI API error: ${response.status}`,
        details: errorData
      }), {
        status: 502, // Bad Gateway to indicate upstream service error
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    
    // Check if the response has the expected structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Unexpected API response structure:', JSON.stringify(data));
      return new Response(JSON.stringify({ 
        error: 'Invalid response from OpenAI API',
        details: data 
      }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
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
