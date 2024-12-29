import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { problemText } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Simplify this LeetCode problem and provide:
      1. A simple explanation in plain English
      2. A real-world example of where this problem might be used
      3. A basic approach to solve it (no code, just logic)
      
      Problem: ${problemText}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return new Response(
      JSON.stringify({
        simplified: response.text(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
