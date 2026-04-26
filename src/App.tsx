import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSPage from './pages/POSPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './LoginPage';
import { LayoutDashboard, ShoppingCart, Package, Truck, FileText } from 'lucide-react';

// المكون الذي يرسم القائمة الجانبية
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-slate-50" dir="rtl">
    <aside className="w-64 bg-slate-900 text-white p-6 shrink-0">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">أيمن سوفت</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded">
          <LayoutDashboard size={20}/> لوحة التحكم
        </Link>
        <Link to="/" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded">
          <ShoppingCart size={20}/> نقطة البيع (POS)
        </Link>
        <Link to="/products" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded">
          <Package size={20}/> الأصناف والمنتجات
        </Link>
        <div className="flex items-center gap-3 p-2 opacity-50"><Truck size={20}/> حركة المخزن</div>
        <div className="flex items-center gap-3 p-2 opacity-50"><FileText size={20}/> التقارير المالية</div>
      </nav>
    </aside>
    <main className="flex-1 p-8 overflow-auto">{children}</main>
  </div>
);

// مكون لوحة التحكم البسيط (الإحصائيات)
const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-blue-500">
      <h4 className="text-slate-500 text-sm">مبيعات اليوم</h4>
      <h2 className="text-2xl font-bold">0 ر.ي</h2>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-500">
      <h4 className="text-slate-500 text-sm">عدد الطلبات</h4>
      <h2 className="text-2xl font-bold">0</h2>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-orange-500">
      <h4 className="text-slate-500 text-sm">المنتجات النشطة</h4>
      <h2 className="text-2xl font-bold">0</h2>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<POSPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
