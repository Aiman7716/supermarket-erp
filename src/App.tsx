import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

// --- الهوية البصرية والنظام الإنشائي (Layout) ---
const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial', backgroundColor: '#f4f7fe' }}>
    {/* القائمة الجانبية الذكية */}
    <div style={{ width: '280px', backgroundColor: '#0f172a', color: 'white', padding: '25px', boxShadow: '4px 0 10px rgba(0,0,0,0.1)' }}>
      <div style={{ paddingBottom: '20px', borderBottom: '1px solid #1e293b', marginBottom: '20px' }}>
        <h2 style={{ color: '#38bdf8', margin: 0 }}>أيمن سوفت</h2>
        <small style={{ color: '#94a3b8' }}>نظام الإدارة المتكامل</small>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/" style={navItemStyle}>🏠 لوحة التحكم</Link>
        <Link to="/pos" style={navItemStyle}>💰 نقطة البيع (POS)</Link>
        <Link to="/products" style={navItemStyle}>📦 الأصناف والمنتجات</Link>
        <Link to="/inventory" style={navItemStyle}>📊 حركة المخزن</Link>
        <Link to="/reports" style={navItemStyle}>📝 التقارير المالية</Link>
      </nav>
    </div>

    {/* منطقة العمل الرئيسية */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header style={{ height: '70px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <div style={{ fontWeight: 'bold', color: '#1e293b' }}>مرحباً بك: أستاذ أيمن الهيمباري</div>
        <div style={{ color: '#64748b' }}>{new Date().toLocaleDateString('ar-YE')}</div>
      </header>
      <main style={{ padding: '30px', flex: 1 }}>
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px', minHeight: '80vh', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
          <Outlet />
        </div>
      </main>
    </div>
  </div>
);

// --- محرك نقطة البيع (POS Engine) - الخطوة الأولى ---
const POSPage = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  // بيانات افتراضية للمنتجات (سيتم ربطها لاحقاً بملف المنتجات الخاص بك)
  const products = [
    { id: 1, name: 'زبادي هنا 400 جرام', price: 450, barcode: '101' },
    { id: 2, name: 'دقيق السنابل 5 كيلو', price: 3800, barcode: '102' },
    { id: 3, name: 'سكر السعيد 1 كيلو', price: 1200, barcode: '103' },
  ];

  const addToCart = (product) => {
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const netTotal = total - discount;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#0f172a' }}>💰 واجهة البيع السريع</h3>
        <button onClick={() => setCart([])} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>تفريغ السلة 🗑️</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
        {/* قسم اختيار السلع */}
        <div style={{ border: '1px solid #f1f5f9', padding: '15px', borderRadius: '12px' }}>
          <input type="text" placeholder="ابحث باسم المنتج أو الباركود..." style={inputStyle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px', marginTop: '20px' }}>
            {products.map(p => (
              <div key={p.id} onClick={() => addToCart(p)} style={itemCardStyle}>
                <div style={{ fontWeight: 'bold' }}>{p.name}</div>
                <div style={{ color: '#10b981', marginTop: '5px' }}>{p.price} ر.ي</div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الحسابات والفاتورة */}
        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
          <h4 style={{ margin: '0 0 15px 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>ملخص الفاتورة</h4>
          <div style={{ minHeight: '250px' }}>
            {cart.length === 0 ? <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '50px' }}>السلة فارغة</p> : 
              cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                  <span>{item.name} (x{item.qty})</span>
                  <span>{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))
            }
          </div>
          <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '15px' }}>
            <div style={priceRow}><span>الإجمالي:</span> <span>{total.toLocaleString()} ر.ي</span></div>
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
