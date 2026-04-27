import React, { useState } from 'react';
import { ShoppingCart, Search, User, Trash2, Plus, Minus, CreditCard } from 'lucide-react';

export default function POSPage() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // منتجات تجريبية بناءً على نشاطك السابق
  const products = [
    { id: 1, name: 'حليب نيدو 400 جرام', price: 2500, category: 'ألبان' },
    { id: 2, name: 'أرز بسمتي 5 كيلو', price: 8000, category: 'حبوب' },
    { id: 3, name: 'زيت طبخ 1.5 لتر', price: 3200, category: 'زيوت' },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="flex h-screen bg-[#f3f4f7] font-sans" dir="rtl">
      {/* القسم الرئيسي: اختيار الأصناف */}
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        {/* شريط البحث العلوي */}
        <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="ابحث باسم الصنف أو الباركود..." 
              className="w-full pr-10 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 text-right"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold">
            <span className="text-sm">فاتورة رقم: </span>
            <span>1005</span>
          </div>
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-4">
          {products.filter(p => p.name.includes(search)).map(product => (
            <button 
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition text-right border border-transparent hover:border-blue-500 group"
            >
              <div className="h-24 bg-gray-100 rounded-xl mb-3 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 transition">
                <ShoppingCart size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price.toLocaleString()} ر.ي</p>
            </button>
          ))}
        </div>
      </div>

      {/* القسم الجانبي: الفاتورة والدفع (مثل الصورة تماماً) */}
      <div className="w-[400px] bg-white shadow-2xl flex flex-col border-r border-gray-200">
        {/* معلومات العميل */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">تفاصيل الطلب</h2>
            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition" onClick={() => setCart([])}>
              <Trash2 size={20} />
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-700">عميل نقدي</p>
              <p className="text-xs text-gray-400">بدون ولاء</p>
            </div>
          </div>
        </div>

        {/* قائمة المشتريات */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
              <p>السلة فارغة حالياً</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-xs text-blue-600 font-bold">{item.price.toLocaleString()} ر.ي</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold w-8 text-center">{item.qty}x</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* إجمالي الفاتورة */}
        <div className="p-6 bg-gray-900 text-white rounded-t-[32px]">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-400">
              <span>الإجمالي الفرعي</span>
              <span>{total.toLocaleString()} ر.ي</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>الضريبة (0%)</span>
              <span>0 ر.ي</span>
            </div>
            <div className="flex justify-between text-2xl font-bold pt-3 border-t border-gray-800">
              <span>الإجمالي</span>
              <span className="text-blue-400">{total.toLocaleString()} ر.ي</span>
            </div>
          </div>
          <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition shadow-lg shadow-blue-900/50">
            <CreditCard size={24} /> إتمام البيع (F9)
          </button>
        </div>
      </div>
    </div>
  );
}
