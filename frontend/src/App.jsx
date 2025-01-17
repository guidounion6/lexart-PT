import { Routes, Route, useLocation } from "react-router-dom";

import Register from './views/Register';
import Home from './views/Home';
import NavBar from "./components/NavBar";

import Guardian from "./components/auth/guardian";
import Layout from "./components/Layout";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import DeletedProducts from "./components/DeletedProducts";
import Login from "./views/Login";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
 

  
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <div className="flex flex-col">
      {!isAuthPage && (
        <div>
          <NavBar />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={
          <Guardian>
            <Layout />
          </Guardian>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewProduct />} />
          <Route path="/edit" element={<EditProduct />} />
          <Route path="/deleted" element={<DeletedProducts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
