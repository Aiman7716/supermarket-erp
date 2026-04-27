import React, { useState } from 'react';
import { ShoppingCart, Search, User, Trash2, CreditCard, Package, Plus, Minus } from 'lucide-react';

export default function POSPage() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // بيانات تجريبية - أيمن سوفت
  const products = [
    { id: 1, name: 'حليب نيدو 400 جرام', price: 2500, category: 'ألبان', icon: '🥛' },
    { id: 2, name: 'أرز بسمتي 5 كيلو', price: 8000, category: 'حبوب', icon: '🌾' },
    { id: 3, name: 'زيت طبخ 1.5 لتر', price: 3200, category: 'زيوت', icon: '🧴' },
    { id: 4, name: 'سكر نقي 2 كيلو', price: 1500, category: 'معلبات', icon: '🍬' },
  ];

  const addToCart = (p) => {
    const existing = cart.find(item => item.id === p.id);
    if (existing) {
      setCart(cart.map(item => item.id === p.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...p, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="flex h-screen bg-[#f1f5f9] overflow-hidden text-right" dir="rtl">
      
      {/* القسم الرئيسي: المنتجات (مثل Zite ERP) */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        {/* شريط البحث العلوي الفخم */}
        <div className="flex items-center gap-4 mb-6 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-3 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="ابحث عن صنف أو باركود..." 
              className="w-full pr-12 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-6 py-3 bg-blue-50 text-blue-700 rounded-xl font-bold border border-blue-100">
            فاتورة رقم: #1024
          </div>
        </div>

        {/* شبكة المنتجات (Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-y-auto pb-10 custom-scrollbar">
          {products.filter(p => p.name.includes(searchQuery)).map(product => (
            <div 
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer border border-transparent hover:border-blue-500 group"
            >
              <div className="h-32 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center text-5xl group-hover:bg-blue-50 transition-colors">
                {product.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-blue-600 font-extrabold text-lg">{product.price.toLocaleString()} ر.ي</span>
                <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-lg">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* القسم الجانبي: الفاتورة والدفع (مثل Zite ERP بالضبط) */}
      <div className="w-[450px] bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.05)] flex flex-col z-10 border-r border-slate-200">
        
        {/* معلومات العميل */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-black text-slate-800">سلة المشتريات</h2>
            <button className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition" onClick={() => setCart([])}>
              <Trash2 size={22} />
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-2xl">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <User size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-800">عميل نقدي</p>
              <p className="text-xs text-slate-400 font-medium">سجل المشتريات: نشط</p>
            </div>
          </div>
        </div>

        {/* قائمة الأصناف المضافة */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-20 py-20 text-slate-400">
              <ShoppingCart size={80} strokeWidth={1} />
              <p className="mt-4 font-bold">السلة فارغة حالياً</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex-1">
                  <p className="font-bold text-slate-800">{item.name}</p>
                  <p className="text-sm text-blue-600 font-bold">{item.price.toLocaleString()} × {item.qty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-slate-800 text-lg">{(item.price * item.qty).toLocaleString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ملخص الفاتورة والدفع - الجزء الأسود الفخم */}
        <div className="p-8 bg-[#1e293b] text-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-slate-400 font-medium">
              <span>الإجمالي قبل الضريبة</span>
              <span>{total.toLocaleString()} ر.ي</span>
            </div>
            <div className="flex justify-between text-slate-400 font-medium">
              <span>الضريبة (0%)</span>
              <span>0 ر.ي</span>
            </div>
            <div className="flex justify-between text-3xl font-black pt-5 border-t border-slate-700 text-white">
              <span>الإجمالي</span>
              <span className="text-blue-400">{total.toLocaleString()} ر.ي</span>
            </div>
          </div>
          <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] font-black text-xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-900/40 transform active:scale-95">
            <CreditCard size={28} /> إتمام العملية (F9)
          </button>
        </div>
      </div>
    </div>
  );
}
 <div>
 <div className="p-6 bg-[#1e293b] text-white rounded-t-3xl">
 <div className="flex justify-between mb-2 text-slate-00"><span>0 مارج౏్ಮ౩౻ಚѝ0%<
span><span>0 ر.ي.ѧ <span><div>
 <div className="flex justify-between text-2xl font-bold mb-6"><span>ಭಚ౉ಟౚ಴ѝ <
span><span className="text-blue-00">{total} ر.ي.ѧ <span><div>
 <button className="w-full py- bg-blue-600 rounded-xl font-bold flex itemscenter justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-9000">
 <CreditCard size={20}> ةطقن بلاಎ౥ಚѝ بيلحمارج ودين 400 رج౉ಟ౒مامتإ عفدلا (F9)
 <button>
 <div>
 <div>
 <div>
 );
}
