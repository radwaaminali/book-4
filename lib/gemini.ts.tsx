// ✅ lib/gemini.ts

import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("❌ Missing GEMINI_API_KEY environment variable. Please add it in Vercel.");
  throw new Error("Missing GEMINI_API_KEY environment variable");
}

// ✅ إنشاء كائن Gemini
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// ✅ دالة توليد نص (تجريبية)
export async function generateText(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("⚠️ Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بـ Gemini API.";
  }
}
