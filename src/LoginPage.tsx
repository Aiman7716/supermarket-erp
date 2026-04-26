import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '@/contexts/AuthContext';
import { LogIn, ShieldCheck } from 'lucide-react';
//import { toast } from 'sonner';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // محاكاة تسجيل الدخول بناءً على منطق النظام في ملفك
    if (username === 'admin' && password === 'admin') {
      login('fake-token', { id: '1', username: 'نجيب', role: 'admin' });
      toast.success('تم تسجيل الدخول بنجاح');
      navigate('/');
    } else {
      toast.error('خطأ في اسم المستخدم أو كلمة المرور');
    }
  };

  return (
    <div className="min-height-screen flex items-center justify-center bg-slate-100 font-sans" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
            <ShieldCheck size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">أيمن سوفت للمحاسبة</h2>
          <p className="text-slate-500 mt-2">نظام إدارة السوبر ماركت المتكامل</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="ادخل اسم المستخدم"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center transition"
          >
            <LogIn className="ml-2 h-5 w-5" /> دخول النظام
          </button>
        </form>
      </div>
    </div>
  );
}
