import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// كود التصميم الرئيسي (Layout) مدمج لضمان العمل
const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial' }}>
    {/* شريط جانبي بسيط */}
    <div style={{ width: '250px', backgroundColor: '#1e293b', color: 'white', padding: '20px' }}>
      <h2>أيمن سوفت</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 الرئيسية</Link>
        <Link to="/pos" style={{ color: 'white', textDecoration: 'none' }}>💰 نقطة البيع</Link>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>📦 المنتجات</Link>
        <Link to="/inventory" style={{ color: 'white', textDecoration: 'none' }}>📑 المخازن</Link>
      </nav>
    </div>
    {/* المحتوى المتغير */}
    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f8fafc' }}>
      <header style={{ marginBottom: '20px', padding: '10px', backgroundColor: 'white', borderRadius: '8px' }}>
        أهلاً بك، أستاذ أيمن الهيمباري
      </header>
      <Outlet />
    </div>
  </div>
);

// صفحات تجريبية سريعة لضمان عمل الروابط
const Dashboard = () => <div><h3>لوحة التحكم</h3><p>مرحباً بك في نظام إدارة السوبر ماركت الخاص بك.</p></div>;
const POS = () => <div><h3>نقطة البيع (POS)</h3><p>واجهة البيع السريع جاهزة للعمل.</p></div>;
const Products = () => <div><h3>إدارة المنتجات</h3><p>قائمة الأصناف والأسعار.</p></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="pos" element={<POS />} />
          <Route path="products" element={<Products />} />
          <Route path="inventory" element={<Products />} /> {/* مؤقتاً */}
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
