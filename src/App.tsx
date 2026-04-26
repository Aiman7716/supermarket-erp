import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSPage from './pages/POSPage';
import './index.css'; // التأكد من ربط التنسيق الذي جهزته

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-slate-50" dir="rtl">
    {/* القائمة الجانبية - الهيكل الثابت */}
    <aside className="w-64 bg-slate-900 text-white p-6 shadow-xl shrink-0">
      <h2 className="text-2xl font-bold mb-10 text-blue-400">أيمن سوفت</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition">
          🏠 الرئيسية
        </Link>
        <Link to="/pos" className="flex items-center gap-3 p-3 bg-blue-600 rounded-xl transition shadow-lg shadow-blue-900/20">
          🛒 نقطة البيع (POS)
        </Link>
        <div className="p-3 opacity-40 text-sm border-t border-slate-800 mt-4">
          📦 الأصناف (المرحلة القادمة)
        </div>
      </nav>
    </aside>

    {/* منطقة عرض الصفحات المتغيرة */}
    <main className="flex-1 p-8 overflow-auto">
      {children}
    </main>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div className="text-2xl font-bold">مرحباً بك في نظام أيمن سوفت</div>} />
          <Route path="/pos" element={<POSPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
