import { useNavigate } from "react-router-dom";
import axios from "../axios_config/axios.config"
import useFetchProducts from "../hooks/useFetchProducts"



const NavBar = () => {

  const { setProducts, setLoading, setError } = useFetchProducts();
  const navigate = useNavigate()
 

  const handleAdd = async () => {
    try {
      const response = await axios.post("products/load")
      const data = response.data.allProducts
      setProducts(data)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      navigate("/")
    }
  }

    const handleDelete = async () => {
      try {
        const response = await axios.delete("products")
        const data = response.data.allProducts
        setProducts(data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        navigate("/")
      }
    }

      return (
        <nav className="relative w-full bg-black py-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-end items-center">
            <div className="flex items-center justify-around p-6">
              <h3 className="text-2xl font-medium text-white">Lexart Tech Test</h3>
              <div className="px-2">
                <button
                  onClick={handleAdd}
                  className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent focus:outline-primary">
                  Add 50
                </button>
              </div>
              <div className="px-2">
                <button
                  onClick={handleDelete}
                  className="w-full bg-terciary text-white py-2 px-4 rounded-md hover:bg-accent2 focus:outline-terciary">
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </nav>
      )
    }
    

    export default NavBar