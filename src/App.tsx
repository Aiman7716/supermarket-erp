import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import POSPage from './pages/POSPage';
import ProductsPage from './pages/ProductsPage';
import InventoryPage from './pages/InventoryPage';
import CustomersPage from './pages/CustomersPage';
import ReceiptVoucherPage from './pages/ReceiptVoucherPage';
import InvoicesPage from './pages/InvoicesPage';
import AccountingPage from './pages/AccountingPage';
import EmployeesPage from './pages/EmployeesPage';
import UsersPage from './pages/UsersPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import DynamicControlPage from './pages/DynamicControlPage';
import BarcodePage from './pages/BarcodePage';
import SalesReturnPage from './pages/SalesReturnPage';

// محاكاة مستخدم لتخطي الحماية
const user = { id: '1', name: 'Ayman Al-Himyari' };

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* عرض الصفحات مباشرة بدون Layout لتجنب خطأ الملف المفقود */}
      <Route path="/" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
      <Route path="/pos" element={<POSPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/receipt-voucher" element={<ReceiptVoucherPage />} />
      <Route path="/invoices" element={<InvoicesPage />} />
      <Route path="/sales-return" element={<SalesReturnPage />} />
      <Route path="/accounting" element={<AccountingPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/dynamic-control" element={<DynamicControlPage />} />
      <Route path="/barcodes" element={<BarcodePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster />
    </BrowserRouter>
  );
}
