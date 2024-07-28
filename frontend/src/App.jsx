import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname; // Debe ser pathname, no path
  const navigate = useNavigate();

  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }
  };

  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <div className="flex flex-col">
      {!isAuthPage && (
        <div>
          <NavBar handleSubmit={handleSubmit} handleChange={handleChange} />
          <SideBar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
