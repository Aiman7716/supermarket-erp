import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'; // استدعاء التنسيق ضروري هنا

// استيراد الصفحات (سنجهزها واحدة تلو الأخرى)
import POSPage from './pages/POSPage'; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50" dir="rtl">
        {/* القائمة الجانبية الثابتة */}
        <aside className="w-64 bg-slate-900 text-white p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-10 text-blue-400">أيمن سوفت</h2>
          <nav className="space-y-4">
            <Link to="/pos" className="flex items-center gap-3 p-3 bg-blue-600 rounded-xl transition">
              🛒 نقطة البيع (POS)
            </Link>
            <div className="p-3 opacity-50 cursor-not-allowed">📦 الأصناف (قيد التجهيز)</div>
          </nav>
        </aside>

        {/* منطقة عرض الصفحات */}
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/pos" element={<POSPage />} />
            <Route path="/" element={<div className="text-xl">مرحباً بك في أيمن سوفت.. اختر "نقطة البيع" للبدء.</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
