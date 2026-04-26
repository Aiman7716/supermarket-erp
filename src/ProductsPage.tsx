import React, { useState, useEffect } from 'react';

// التعديل الأساسي: استخدام export default ليعمل الربط مع App.tsx
export default function ProductsPage() {
  // نظام الحفظ الذكي: استرجاع البيانات المحفوظة من ذاكرة المتصفح
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ayman_supermarket_stock');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'زبادي هنا 400 جرام', price: 450, stock: 50, category: 'ألبان' },
      { id: 2, name: 'دقيق السنابل 5 كيلو', price: 3800, stock: 20, category: 'بقوليات' }
    ];
  });

  // حفظ أي تغيير في الأصناف تلقائياً
  useEffect(() => {
    localStorage.setItem('ayman_supermarket_stock', JSON.stringify(products));
  }, [products]);

  return (
    <div className="p-4" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">📦 إدارة الأصناف والمخزون</h3>
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => alert('قريباً: واجهة إضافة صنف جديد')}
        >
          + إضافة صنف جديد
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-4 text-slate-600 font-semibold">اسم المنتج</th>
              <th className="p-4 text-slate-600 font-semibold">التصنيف</th>
              <th className="p-4 text-slate-600 font-semibold">السعر (ر.ي)</th>
              <th className="p-4 text-slate-600 font-semibold">الكمية المتوفرة</th>
              <th className="p-4 text-slate-600 font-semibold">الحالة</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: any) => (
              <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                <td className="p-4 font-medium text-slate-800">{p.name}</td>
                <td className="p-4 text-slate-500">{p.category}</td>
                <td className="p-4 text-blue-600 font-bold">{p.price.toLocaleString()}</td>
                <td className="p-4 text-slate-700">{p.stock}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    p.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {p.stock > 10 ? 'متوفر' : 'منخفض'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
