// --- محرك نقطة البيع المتطور ---
import { useState } from 'react';
export default function POSPage() {

  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);

  // مصفوفة تجريبية للمنتجات (سنقوم لاحقاً بربطها بقاعدة بياناتك)
  const products = [
    { id: 1, name: 'حليب نيدو 400 جرام', price: 2500, barcode: '101' },
    { id: 2, name: 'أرز بسمتي 5 كيلو', price: 8000, barcode: '102' },
    { id: 3, name: 'زيت طبخ 1.5 لتر', price: 3200, barcode: '103' },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const finalTotal = total - discount;

  return (
    <div style={{ direction: 'rtl' }}>
      <h3 style={{ color: '#1e293b', marginBottom: '20px' }}>💰 محرك البيع الذكي - POS Engine</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* قسم اختيار المنتجات */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', padding: '15px', borderRadius: '12px' }}>
          <input type="text" placeholder="أدخل الباركود أو اسم المنتج..." style={inputStyle} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px', marginTop: '15px' }}>
            {products.map(p => (
              <button key={p.id} onClick={() => addToCart(p)} style={productButtonStyle}>
                {p.name}<br/><b>{p.price} ر.ي</b>
              </button>
            ))}
          </div>
        </div>

        {/* قسم الفاتورة والحسابات */}
        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ borderBottom: '2px solid #cbd5e1', paddingBottom: '10px' }}>تفاصيل الفاتورة</h4>
          <div style={{ minHeight: '200px', marginTop: '10px' }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                <span>{item.name} (x{item.qty})</span>
                <span>{(item.price * item.qty).toLocaleString()} ر.ي</span>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '20px', borderTop: '2px solid #cbd5e1', paddingTop: '15px' }}>
            <div style={calcRow}><span>الإجمالي:</span> <span>{total.toLocaleString()} ر.ي</span></div>
            <div style={calcRow}><span>الخصم:</span> <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} style={{ width: '80px', textAlign: 'center' }} /></div>
            <div style={{ ...calcRow, fontSize: '20px', color: '#10b981', fontWeight: 'bold' }}>
              <span>الصافي:</span> <span>{finalTotal.toLocaleString()} ر.ي</span>
            </div>
            <button style={payButtonStyle} onClick={() => alert('تم إرسال الفاتورة للطابعة واحتسابها في المخزن')}>إتمام العملية (F10)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// تنسيقات سريعة (Styles)
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '10px' };
const productButtonStyle = { padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#fff', cursor: 'pointer', textAlign: 'center', transition: '0.2s' };
const calcRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' };
const payButtonStyle = { width: '100%', padding: '15px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', marginTop: '15px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' };
