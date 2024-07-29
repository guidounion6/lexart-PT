import { useState, useEffect } from "react"
import axios from "../axios_config/axios.config"

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("products");
                const data = response.data.allProducts; 
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts()
    }, [products])
    return { products, setProducts, loading, setLoading, error, setError }
}

export default useFetchProducts