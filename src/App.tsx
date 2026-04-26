import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSPage from './pages/POSPage';
import { LayoutDashboard, ShoppingCart, Package, Settings } from 'lucide-react';

// استدعاء ملف التنسيق الأساسي
import './index.css'; 

// مكون الهيكل الرئيسي - لضمان ظهور القائمة الجانبية في كل الصفحات
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-slate-50" dir="rtl">
    {/* القائمة الجانبية - أيمن سوفت */}
    <aside className="w-64 bg-slate-900 text-white p-6 shadow-xl shrink-0">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-400 font-sans">أيمن سوفت</h2>
        <p className="text-xs text-slate-400 mt-1">نظام إدارة السوبر ماركت</p>
      </div>
      
      <nav className="space-y-2">
        <Link to="/" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition text-slate-300">
          <LayoutDashboard size={20} /> الرئيسية
        </Link>
        
        <Link to="/pos" className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-xl transition shadow-lg shadow-blue-900/20">
          <ShoppingCart size={20} /> نقطة البيع (POS)
        </Link>

        {/* روابط معطلة مؤقتاً حتى نجهز واجهاتها في الخطوات القادمة */}
        <div className="flex items-center gap-3 p-3 opacity-40 cursor-not-allowed text-slate-400 border-t border-slate-800 mt-4 pt-4">
          <Package size={20} /> الأصناف والمنتجات
        </div>
        
        <div className="flex items-center gap-3 p-3 opacity-40 cursor-not-allowed text-slate-400">
          <Settings size={20} /> إعدادات النظام
        </div>
      </nav>
    </aside>

    {/* منطقة عرض المحتوى المتغير */}
    <main className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </main>
  </div>
);

// المكون الرئيسي للتطبيق
export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* الصفحة الترحيبية */}
          <Route path="/" element={
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-200 text-center mt-10">
              <h1 className="text-3xl font-bold text-slate-800">مرحباً بك في نظام أيمن سوفت</h1>
              <p className="mt-4 text-slate-500">جاهز للبدء؟ انتقل إلى صفحة نقطة البيع لبدء عمليات البيع.</p>
              <Link to="/pos" className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                فتح شاشة البيع الآن
              </Link>
            </div>
          } />

          {/* صفحة نقطة البيع التي سنعمل عليها الآن */}
          <Route path="/pos" element={<POSPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
