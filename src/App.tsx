import { BrowserRouter, Routes, Route } from 'react-router-dom';

// واجهة مؤقتة لتأكيد عمل النظام
const SimpleDashboard = () => (
  <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Arial' }}>
    <h1 style={{ color: '#2563eb' }}>نظام أيمن سوفت - Ayman Soft</h1>
    <p>تم تفعيل النظام بنجاح وتخطي عقبات الملفات المفقودة.</p>
    <div style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
      <button style={{ padding: '10px', backgroundColor: '#eee', border: '1px solid #ccc' }}>نقطة البيع - POS</button>
      <button style={{ padding: '10px', backgroundColor: '#eee', border: '1px solid #ccc' }}>المخزن - Inventory</button>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleDashboard />} />
        <Route path="*" element={<SimpleDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
