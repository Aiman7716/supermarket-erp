import { LayoutDashboard, Users, ShoppingBag, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { name: 'إجمالي المبيعات', value: '12,450 ر.س', icon: TrendingUp, color: 'text-green-600' },
    { name: 'عدد العمليات', value: '45', icon: ShoppingBag, color: 'text-blue-600' },
    { name: 'العملاء الجدد', value: '12', icon: Users, color: 'text-purple-600' },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <h1 className="text-2xl font-bold text-slate-800">لوحة التحكم - أيمن سوفت</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 font-medium">{stat.name}</p>
                <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color} opacity-20`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
