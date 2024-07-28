import { useState, useEffect } from "react"
import axios from "../axios_config/axios.config"
import useFetchProducts from "../hooks/useFetchProducts"


const NavBar = ({ handleChange, handleSubmit }) => {

  const { products, setProducts, loading, setLoading, error, setError } = useFetchProducts()

  const handleAdd = async () => {
    try {
      const response = await axios.post("products/load")
      const data = response.data.allProducts
      setProducts(data)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }


    const handleDelete = async () => {
      try {
        const response = await axios.delete("products/_deleteAll")
        const data = response.data.allProducts
        setProducts(data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(()=> {
    },[products])

      return (
        <nav className="relative w-full bg-black py-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-end items-center">
            <div className="flex items-center justify-around p-6">
              <h3 className="text-2xl font-medium text-white">Aca esta la navbar</h3>
              <div className="px-6">
                <input
                  type="search"
                  placeholder="Search for your product"
                  className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm bg-white  border-2 py-2 px-3"
                />
              </div>
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