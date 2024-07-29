// Guardian.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkTokenExpiration } from "./auth";
import Swal from "sweetalert2";

const Guardian = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenCheck = async () => {
      const isValid = await checkTokenExpiration();
      if (!isValid) {
        Swal.fire({
          icon: "error",
          title: "Sesion Expired",
          text: "Sesion Expired, log in again",
          timer: 3000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/login");
        });
      }
    };

    handleTokenCheck();
  }, [navigate]);

  return children;
};

export default Guardian;
