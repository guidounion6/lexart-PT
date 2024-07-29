import useFetchProducts from "../hooks/useFetchProducts"
import axios from "../axios_config/axios.config"

const ProductsList = () => {
    const { products, setProducts, loading, error } = useFetchProducts();

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`products/${id}`);
            const response = await axios.get("products");
            setProducts(response.data.products);
        } catch (error) {
            console.log("Error deleting product:", error);
        }
    }

    if (loading) return <p className="text-center text-primary">Loading...</p>;
    if (error) return <p className="text-center text-error">Error: {error.message}</p>;

    if (!Array.isArray(products)) {
        return <p className="text-white text-4xl">Expected products to be an array.</p>;
    }

    return (
        <div className="flex flex-col items-center max-w-[1050px] justify-start">
            <div className="max-w-[300px] bg-primary text-white py-2 px-4 rounded-md text-center">
                <h1 className="text-white text-4xl">
                    Products List
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden min-w-[190px]">
                            <div className="p-4 flex flex-col justify-center items-center">
                                <h2 className="text-xl font-semibold text-black">{product.name}</h2>
                                <h3 className="text-xl font-semibold text-black">{product.company}</h3>
                                <p className="text-black font-medium pt-2">{product.description}</p>
                                <p className="text-lg font-bold text-green mt-1 pb-1">${product.price}</p>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="w-full bg-terciary text-white py-2 px-4 rounded-md hover:bg-accent2 focus:outline-terciary"
                                    >
                                        Delete
                                    </button>
                                </div>
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

export default ProductsList
