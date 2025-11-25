import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// ✅ تأكد إن عندك عنصر root في index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  // ✅ يعرض رسالة بديلة بدل ما تكون الصفحة فاضية
  const fallback = document.createElement("div");
  fallback.style.cssText = `
    color: white;
    background-color: #0f172a;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  fallback.innerText = "⚙️ جاري تحميل واجهة الكتاب...";
  document.body.appendChild(fallback);
  throw new Error("❌ لم يتم العثور على عنصر root لعرض التطبيق.");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
