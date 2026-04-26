import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Package, User, Search, Plus, Minus, Trash2, Printer, Save } from 'lucide-react';
import { toast } from 'sonner';
import { generateZATCAQR } from '@/lib/zatcaQr';

interface Product {
  id: string;
  name: string;
  price: number;
  barcode: string;
  tax: number;
}

interface CartItem extends Product {
  quantity: number;
}

export default function POSPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const barcodeInputRef = useRef<HTMLInputElement>(null);

  // حساب الإجماليات
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalTax = cart.reduce((acc, item) => acc + (item.price * 0.15 * item.quantity), 0);
  const total = subtotal + totalTax;

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`تم إضافة ${product.name}`);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return toast.error('السلة فارغة!');
    
    // محاكاة إنشاء فاتورة ضريبية مبسطة
    const qrData = generateZATCAQR({
      sellerName: "سوبر ماركت أيمن",
      vatNumber: "305000408100003", // الرقم الذي ظهر في صورتك
      timestamp: new Date().toISOString(),
      invoiceTotal: total,
      vatAmount: totalTax
    });

    console.log("QR Code Data:", qrData);
    toast.success('تم إتمام البيع وتوليد فاتورة الزكاة');
    setCart([]);
  };

  return (
    <div className="flex h-full gap-6 font-sans" dir="rtl">
      {/* قسم المنتجات والبحث */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6 flex flex-col">
        <div className="relative mb-6">
          <Search className="absolute right-3 top-3 text-slate-400" />
          <input
            ref={barcodeInputRef}
            type="text"
            placeholder="ابحث بالاسم أو الباركود..."
            className="w-full pr-10 py-3 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 overflow-auto">
          {/* هنا تظهر المنتجات - مثال تجريبي */}
          <div 
            onClick={() => addToCart({id: '1', name: 'حليب نيدو', price: 45, barcode: '123', tax: 6.75})}
            className="p-4 border rounded-xl hover:border-blue-500 cursor-pointer transition bg-slate-50"
          >
            <div className="font-bold text-slate-800">حليب نيدو</div>
            <div className="text-blue-600 font-bold mt-2">45.00 ر.س</div>
          </div>
        </div>
      </div>

      {/* قسم السلة والفاتورة */}
      <div className="w-96 bg-slate-900 text-white rounded-xl shadow-lg p-6 flex flex-col">
        <div className="flex items-center mb-6">
          <ShoppingCart className="ml-2" />
          <h2 className="text-xl font-bold">سلة المشتريات</h2>
        </div>

        <div className="flex-1 overflow-auto space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-slate-800 p-3 rounded-lg">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-xs text-slate-400">{item.quantity} x {item.price} ر.س</div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 pt-4 mt-4 space-y-2">
          <div className="flex justify-between text-slate-400">
            <span>المجموع الفرعي</span>
            <span>{subtotal.toFixed(2)} ر.س</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>الضريبة (15%)</span>
            <span>{totalTax.toFixed(2)} ر.س</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-slate-700">
            <span>الإجمالي</span>
            <span>{total.toFixed(2)} ر.س</span>
          </div>
        </div>

        <button 
          onClick={handleCheckout}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl mt-6 font-bold flex items-center justify-center transition"
        >
          <Printer className="ml-2" /> إتمام وطباعة الفاتورة
        </button>
      </div>
    </div>
  );
}
