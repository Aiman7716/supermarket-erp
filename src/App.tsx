import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

// --- التصميم الرئيسي (Layout) ---
const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial', backgroundColor: '#f0f2f5' }}>
    <div style={{ width: '260px', backgroundColor: '#1a222d', color: 'white', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
      <h2 style={{ borderBottom: '1px solid #303f50', paddingBottom: '10px' }}>أيمن سوفت</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '25px' }}>
        <Link to="/" style={navStyle}>🏠 لوحة التحكم</Link>
        <Link to="/pos" style={navStyle}>💰 نقطة البيع (POS)</Link>
        <Link to="/products" style={navStyle}>📦 إدارة المنتجات</Link>
        <Link to="/inventory" style={navStyle}>📑 المخزون</Link>
        <Link to="/reports" style={navStyle}>📊 التقارير</Link>
      </nav>
    </div>
    <div style={{ flex: 1, padding: '25px' }}>
      <header style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <span style={{ fontWeight: 'bold' }}>مرحباً: أستاذ أيمن الهيمباري</span>
        <span style={{ color: '#666' }}>{new Date().toLocaleDateString('ar-YE')}</span>
      </header>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', minHeight: '80vh', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <Outlet />
      </div>
    </div>
  </div>
);

const navStyle = { color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px', transition: '0.3s', backgroundColor: 'rgba(255,255,255,0.05)' };

// --- صفحة نقطة البيع (POS) المستعادة ---
const POSPage = () => {
  const [cart, setCart] = useState([]);
  // هنا سنضع لاحقاً كود الحسابات والبيع الذي استخرجناه من ملفك الأصلي
  return (
    <div>
      <h3 style={{ color: '#1a222d' }}>💰 واجهة البيع السريع</h3>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 2, border: '1px dashed #ccc', padding: '20px', borderRadius: '8px' }}>
          <h4>قائمة المنتجات</h4>
          <input type="text" placeholder="بحث عن منتج أو باركود..." style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <p style={{ color: '#888' }}>سيتم عرض المنتجات هنا فور ربط قاعدة البيانات.</p>
        </div>
        <div style={{ flex: 1, backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px' }}>
          <h4>الفاتورة الحالية</h4>
          <hr />
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <h2 style={{ color: '#2ecc71' }}>الإجمالي: 0.00 ر.ي</h2>
            <button style={{ width: '100%', padding: '15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>إتمام البيع (F10)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div>
    <h3>لوحة التحكم الرئيسية</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
      <div style={statCard}>💰 مبيعات اليوم: 0</div>
      <div style={statCard}>📦 المنتجات: 0</div>
      <div style={statCard}>👤 العملاء: 0</div>
    </div>
  </div>
);

const statCard = { padding: '30px', backgroundColor: '#eef2ff', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold', color: '#4338ca' };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pos" element={<POSPage />} />
          <Route path="products" element={<div><h3>إدارة المنتجات</h3><p>جاري استعادة البيانات...</p></div>} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
