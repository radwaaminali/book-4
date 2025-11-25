import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ شاشة تحميل مؤقتة
function LoadingScreen() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F172A",
        color: "#FBBF24",
        fontSize: "1.5rem",
        fontWeight: "bold",
        direction: "rtl",
      }}
    >
      جاري تحميل واجهة الكتاب...
    </div>
  );
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("❌ لم يتم العثور على العنصر الجذر");
  throw new Error("Root element not found");
}

// ✅ تحميل التطبيق داخل الـ DOM
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
