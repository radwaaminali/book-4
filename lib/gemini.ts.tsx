// ✅ lib/gemini.tsx
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("❌ لم يتم العثور على المفتاح VITE_GEMINI_API_KEY");
  throw new Error("VITE_GEMINI_API_KEY غير موجود");
}

export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export async function generateText(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("⚠️ خطأ في الاتصال بـ Gemini:", error);
    return "حدث خطأ أثناء الاتصال بـ Gemini API.";
  }
}
