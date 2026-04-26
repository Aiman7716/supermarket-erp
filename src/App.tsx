import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
 const { user } = useAuth();
 return user ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
 const { user } = useAuth();
 return (
 <Routes>
 <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
 <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
 <Route index element={<DashboardPage />} />
 <Route path="pos" element={<POSPage />} />
 <Route path="products" element={<ProductsPage />} />
 <Route path="inventory" element={<InventoryPage />} />
 <Route path="customers" element={<CustomersPage />} />
 <Route path="receipt-voucher" element={<ReceiptVoucherPage />} />
 <Route path="invoices" element={<InvoicesPage />} />
 <Route path="sales-return" element={<SalesReturnPage />} />
 <Route path="accounting" element={<AccountingPage />} />
 <Route path="employees" element={<EmployeesPage />} />
 <Route path="users" element={<UsersPage />} />
 <Route path="reports" element={<ReportsPage />} />
 <Route path="settings" element={<SettingsPage />} />
 <Route path="dynamic-control" element={<DynamicControlPage />} />
 <Route path="barcodes" element={<BarcodePage />} />
 </Route>
 </Routes>
 );
}

export default function App() {
 return (
 <AuthProvider>
 <BrowserRouter>
 <AppRoutes />
 <Toaster position="top-center" richColors />
 </BrowserRouter>
 </AuthProvider>
 );
}
