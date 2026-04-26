import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSPage from './pages/POSPage';
import ProductsPage from './pages/ProductsPage';
import { LayoutDashboard, ShoppingCart, Package, Truck, FileText } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-slate-50" dir="rtl">
    {/* القائمة الجانبية الاحترافية - أيمن سوفت */}
    <aside className="w-64 bg-slate-900 text-white p-6 shadow-xl hidden md:block">
      <h2 className="text-2xl font-bold mb-10 text-blue-400">أيمن سوفت</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition">
          <LayoutDashboard size={20} /> لوحة التحكم
        </Link>
        <Link to="/pos" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition bg-blue-600">
          <ShoppingCart size={20} /> نقطة البيع (POS)
        </Link>
        <Link to="/products" className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition">
          <Package size={20} /> الأصناف والمنتجات
        </Link>
        <div className="flex items-center gap-3 p-3 opacity-50 cursor-not-allowed">
          <Truck size={20} /> حركة المخزن
        </div>
        <div className="flex items-center gap-3 p-3 opacity-50 cursor-not-allowed">
          <FileText size={20} /> التقارير المالية
        </div>
      </nav>
    </aside>

    {/* المحتوى الرئيسي */}
    <main className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
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
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
