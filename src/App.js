import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesForm from "./components/Forms/SalesForm";
import BbmForm from "./components/Forms/BbmForm";
import ExpenseForm from "./components/Forms/ExpenseForm";
import EmpForm from "./components/Forms/EmpForms";
import LoginPage from "./components/Pages/LoginPage";
import UsersPage from "./components/Pages/UsersPage";
import ProductsPage from "./components/Pages/ProductsPage";
import "./components/css/style.css";
import SalesPage from "./components/Pages/SalesPage";
import ExpensePage from "./components/Pages/ExpensePage";
import BbmAdmission from "./components/Pages/BbmAdmission";
import Sidebar from "./components/Navigation/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/penjualan" element={<SalesPage />} />
          <Route path="/salesform" element={<SalesForm />} />
          <Route path="/bbm" element={<BbmForm />} />
          <Route path="/penerimaan" element={<BbmAdmission />} />
          <Route path="/pengeluaran" element={<ExpensePage />} />
          <Route path="/expenseform" element={<ExpenseForm />} />
          <Route path="/form" element={<EmpForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
