import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import POSPage from './pages/POSPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './LoginPage';
import { LayoutDashboard, ShoppingCart, Package, Truck, FileText } from 'lucide-react';

// هذا المكون هو الذي يرسم القائمة الجانبية التي رأيتها في صورتك
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen bg-slate-50" dir="rtl">
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8 text-blue-400">أيمن سوفت</h2>
      <nav className="space-y-4">
        <Link to="/" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><LayoutDashboard size={20}/> لوحة التحكم</Link>
        <Link to="/" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><ShoppingCart size={20}/> نقطة البيع (POS)</Link>
        <Link to="/products" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><Package size={20}/> الأصناف والمنتجات</Link>
        <div className="flex items-center gap-3 p-2 opacity-50"><Truck size={20}/> حركة المخزن</div>
        <div className="flex items-center gap-3 p-2 opacity-50"><FileText size={20}/> التقارير المالية</div>
      </nav>
    </aside>
    <main className="flex-1 p-8">{children}</main>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<POSPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
            <div style={priceRow}><span>الخصم:</span> <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} style={{ width: '70px', borderRadius: '4px', border: '1px solid #cbd5e1' }} /></div>
            <div style={{ ...priceRow, fontSize: '22px', fontWeight: 'bold', color: '#059669', marginTop: '10px' }}>
              <span>الصافي:</span> <span>{netTotal.toLocaleString()} ر.ي</span>
            </div>
            <button style={btnPay} onClick={() => alert('تم إتمام العملية بنجاح!')}>تأفيذ البيع (F10)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- المكونات الباقية كواجهات مؤقتة ---
const Dashboard = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
    <div style={{ ...statBox, borderRight: '5px solid #3b82f6' }}><h4>مبيعات اليوم</h4><h2>0 ر.ي</h2></div>
    <div style={{ ...statBox, borderRight: '5px solid #10b981' }}><h4>عدد الطلبات</h4><h2>0</h2></div>
    <div style={{ ...statBox, borderRight: '5px solid #f59e0b' }}><h4>المنتجات النشطة</h4><h2>0</h2></div>
  </div>
);

// --- التنسيقات (Styles) ---
const navItemStyle = { color: '#94a3b8', textDecoration: 'none', padding: '12px 15px', borderRadius: '8px', transition: '0.3s' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none' };
const itemCardStyle = { padding: '15px', border: '1px solid #f1f5f9', borderRadius: '10px', textAlign: 'center', cursor: 'pointer', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' };
const priceRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' };
const btnPay = { width: '100%', padding: '15px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '10px', marginTop: '20px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' };
const statBox = { padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pos" element={<POSPage />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
