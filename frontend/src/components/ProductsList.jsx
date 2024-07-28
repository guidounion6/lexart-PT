
import useFetchProducts from "../hooks/useFetchProducts"


const ProductsList = () => {
    const { products, loading, error } = useFetchProducts()

    if (loading) return <p className="text-center text-primary">Loading...</p>;
    if (error) return <p className="text-center text-error">Error: {error.message}</p>;

    if (!Array.isArray(products)) {
        return <p>Error: Expected products to be an array.</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="max-w-[300px] bg-primary text-white py-2 px-4 rounded-md text-center">
                <h1 className="text-white text-4xl b">
                    Products List
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4 flex flex-col justify-center items-center">
                                <h3 className="text-xl font-semibold text-gray-800">{product.company}</h3>
                                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-lg font-bold text-gray-800 mt-2">${product.price}</p>
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