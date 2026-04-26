import React, { useState, useEffect } from 'react';

// التعديل الذهبي: التصدير الافتراضي ليعمل مع App.tsx
export default function POSPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [discount, setDiscount] = useState(0);

  // مصفوفة تجريبية (سيتم ربطها لاحقاً بصفحة الأصناف)
  const [products] = useState([
    { id: 1, name: 'حليب نيدو 400 جرام', price: 2500, barcode: '101' },
    { id: 2, name: 'أرز بسمتي 5 كيلو', price: 8000, barcode: '102' },
    { id: 3, name: 'زيت طبخ 1.5 لتر', price: 3200, barcode: '103' },
  ]);

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const finalTotal = total - discount;

  return (
    <div className="flex flex-col space-y-6">
      {/* تم إزالة العناوين المكررة لأنها موجودة في القائمة الجانبية */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* قسم اختيار المنتجات */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <input 
            type="text" 
            placeholder="أدخل الباركود أو اسم المنتج..." 
            className="w-full p-3 mb-6 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(p => (
              <button 
                key={p.id} 
                onClick={() => addToCart(p)}
                className="p-4 border border-slate-100 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition text-right"
              >
                <div className="font-bold text-slate-800">{p.name}</div>
                <div className="text-blue-600 font-bold mt-1">{p.price} ر.ي</div>
              </button>
            ))}
          </div>
        </div>

        {/* قسم الفاتورة والحسابات */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col h-fit">
          <h4 className="text-xl font-bold mb-4 border-bottom pb-2 border-slate-300">تفاصيل الفاتورة</h4>
          <div className="flex-grow min-h-[300px]">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-3 text-sm">
                <span className="font-medium">{item.name} (x{item.qty})</span>
                <span className="font-bold">{(item.price * item.qty).toLocaleString()} ر.ي</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-300 space-y-2">
            <div className="flex justify-between text-slate-600">
              <span>الإجمالي:</span>
              <span>{total.toLocaleString()} ر.ي</span>
            </div>
            <div className="flex justify-between items-center">
              <span>الخصم:</span>
              <input 
                type="number" 
                value={discount} 
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="w-20 p-1 border rounded text-center"
              />
            </div>
            <div className="flex justify-between text-xl font-bold text-blue-700 pt-2">
              <span>الصافي:</span>
              <span>{finalTotal.toLocaleString()} ر.ي</span>
            </div>
          </div>

          <button 
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-6 hover:bg-blue-700 shadow-lg shadow-blue-100 transition"
            onClick={() => alert('تم إرسال الفاتورة للطابعة')}
          >
            إتمام العملية (F10)
          </button>
        </div>
      </div>
    </div>
  );
}
