import { Package, Plus, Search } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">إدارة المنتجات</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
          <Plus className="ml-2 h-5 w-5" /> إضافة منتج جديد
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <p className="text-center text-slate-500 py-10">قائمة المنتجات ستظهر هنا بعد ربط قاعدة البيانات.</p>
      </div>
    </div>
  );
}
