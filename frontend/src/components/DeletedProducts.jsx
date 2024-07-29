import { useState, useEffect } from "react"
import axios from "../axios_config/axios.config"

const DeletedProducts = () => {
    const [deletedProducts, setDeletedProducts] = useState([])

    useEffect(() => {
        const fetchDeletedProducts = async () => {
            try {
                const response = await axios.get("products/deleted-products")
                setDeletedProducts(response.data)
            } catch (error) {
                console.error("Error fetching deleted products", error)
            }
        }

        fetchDeletedProducts()
    }, [])

    return (
        <div className="flex flex-col items-center max-w-[1050px] justify-start">
            <div className="max-w-[300px] bg-terciary text-white py-2 px-4 rounded-md text-center">
                <h1 className="text-white text-4xl">
                    Deleted List
                </h1>
            </div>
            <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-6">
                {deletedProducts.length > 0 ? (
                    deletedProducts.map((product, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden min-w-[190px]">
                            <div className="p-4 flex flex-col justify-center items-center">
                                <h2 className="text-xl font-semibold text-black">{product.name}</h2>
                                <h3 className="text-xl font-semibold text-black">{product.company}</h3>
                                <p className="text-black font-medium pt-2">{product.description}</p>
                                <p className="text-lg font-bold text-green mt-1 pb-1">${product.price}</p>
                            </div>
                        </div>

                    ))
                ) : (
                    <p className="text-center text-error col-span-full">No products found.</p>
                )}
            </div>
        </div>
    )
}

export default DeletedProducts