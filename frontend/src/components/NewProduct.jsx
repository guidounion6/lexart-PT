import axios from "../axios_config/axios.config";
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";

const createProductSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
  company: Yup.string()
    .required("Company is required"),
  description: Yup.string()
    .required("Description is required"),
  price: Yup.number()
    .positive()
    .required("Price is required"),
})

const handleSubmit = () => {
  axios.post('/api/products', {

  })
}

const NewProduct = () => {
  return (
    <div className="min-h-screen min-w-[50vw] flex flex-col items-center justify-start">
      <div className="max-w-[300px] bg-primary text-white py-2 px-4 mb-5 rounded-md text-center">
        <h1 className="text-white text-4xl">
          New Product
        </h1>
      </div>
      <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
        <Formik
          initialValues={{ name: "", company: "", desciption: "", price: "" }}
          validationSchema={createProductSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await axios.post("products/register", values)
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
                onSubmit={handleSubmit}
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
                {isSubmitting ? "Creating product..." : "Create product"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default NewProduct