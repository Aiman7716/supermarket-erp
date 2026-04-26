import { useState } from 'react';

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'زبادي هنا 400 جرام', price: 450, stock: 50, category: 'ألبان' },
    { id: 2, name: 'دقيق السنابل 5 كيلو', price: 3800, stock: 20, category: 'بقوليات' },
  ]);

  return (
    <div style={{ direction: 'rtl' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ color: '#0f172a' }}>📦 إدارة الأصناف والمخزون</h3>
        <button style={addBtnStyle}>+ إضافة صنف جديد</button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr style={{ backgroundColor: '#f8fafc' }}>
            <th style={thStyle}>اسم المنتج</th>
            <th style={thStyle}>التصنيف</th>
            <th style={thStyle}>السعر (ر.ي)</th>
            <th style={thStyle}>الكمية المتوفرة</th>
            <th style={thStyle}>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
              <td style={tdStyle}>{p.name}</td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>{p.price.toLocaleString()}</td>
              <td style={tdStyle}>{p.stock}</td>
              <td style={tdStyle}>
                <span style={{ backgroundColor: p.stock > 10 ? '#dcfce7' : '#fee2e2', color: p.stock > 10 ? '#166534' : '#991b1b', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                  {p.stock > 10 ? 'متوفر' : 'منخفض'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// التنسيقات
const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '10px' };
const thStyle = { padding: '12px', textAlign: 'right', borderBottom: '2px solid #e2e8f0', color: '#64748b' };
const tdStyle = { padding: '12px', color: '#1e293b' };
const addBtnStyle = { backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

export default ProductsPage;
