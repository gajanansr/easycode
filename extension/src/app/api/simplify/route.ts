import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { problemText } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Simplify the following coding problem into a concise explanation. 

1. take the data structure in the problem description and explain focusing on the data structures and core task the problem states to be done. Avoid unncessary details.
2. Avoid unnecessary analogies or stories, but do provide a relatable, simple example after the explanation to make the problem clearer, explain so user can visualize the problem.
3. Explain how to approach the problem logically, without providing the direct solution. Focus on guiding the thought process.

Here is the problem description: ${problemText}
Format your response exactly like this (without any markdown symbols, asterisks, or special characters):

    Provide your response in this structure:

Simplified Problem:
[take the data structure in the problem description and explain focusing on the data structures and core task the problem states to be done. Avoid unncessary details.]

Relatable Example:
[Provide an intuitive and simple example that mirrors the structure of the problem avoid unncessary details but explain so user can visualize the problem.]

Approach:
[Explain how the user can think about the problem—what steps to consider and how to break it down in a logical manner.]
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return NextResponse.json(
      { simplified: response.text() },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
