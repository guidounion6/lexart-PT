import { useState } from "react";
import axios from "../axios_config/axios.config";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import useFetchProducts from "../hooks/useFetchProducts";

const createProductSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
  company: Yup.string()
    .required("Company is required"),
  description: Yup.string()
    .required("Description is required"),
  price: Yup.number()
    .required("Price is required"),
})


const EditProduct = () => {

  const navigate = useNavigate()
  const { products } = useFetchProducts();
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleSelectChange = (event) => {
    const productId = event.target.value
    const product = products.find((product) => product.id === productId)
    setSelectedProduct(product)
  }


  return (
    <div className="min-h-screen min-w-[60vw] flex flex-col items-center justify-start">
      <div className="max-w-[300px] bg-primary text-white py-2 px-4 mb-5 rounded-md text-center">
        <h1 className="text-white text-4xl">
          Edit Product
        </h1>
      </div>
      <div className="w-[1/2] py-2 px-2 mb-2 rounded-md">
        <select
          name="products"
          id="products"
          onChange={handleSelectChange}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-300"
        >
          <option value="" disabled selected>
            Select a product
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
        <Formik
          initialValues={{
            name: selectedProduct?.name || "",
            company: selectedProduct?.company || "",
            description: selectedProduct?.description || "",
            price: selectedProduct?.price || "",
          }}
          enableReinitialize
          validationSchema={createProductSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await axios.put(`products/${selectedProduct?.id}`, values)
              Swal.fire({
                title: "Product updated successfully",
                text: "Product Updated",
                timer: 3000,
                showConfirmButton: false,
              }).then(() => {
                navigate("/")
              })
            } catch (error) {
              console.log("Error, try again", error)
            } finally {
              setSubmitting(false)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm bg-white  border-2 py-2 px-3"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-error text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Company:
                </label>
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm bg-white  border-2 py-2 px-3"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-error text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description:
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm bg-white  border-2 py-2 px-3"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-error text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Price:
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary sm:text-sm bg-white  border-2 py-2 px-3"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-error text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Editing product..." : "Edit product"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default EditProduct