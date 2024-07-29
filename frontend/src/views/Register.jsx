import axios from "../axios_config/axios.config";
import { ErrorMessage, Field, Form, Formik } from "formik"
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    name: Yup.string()
        .required("Field Required"),
    email: Yup.string()
        .required("Field Required")
        .email("Invalid Email"),
    password: Yup.string()
        .required("Field Required"),
})


const Register = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-between">
            <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md mt-10">
                <h1 className="text-2xl text-black mb-6">Register</h1>
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    validationSchema={loginSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await axios.post("users/register", values)
                            localStorage.setItem("token", response.data.token);
                            navigate("/")
                        } catch (error) {
                            console.log("Error registering...try again", error)
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
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white border-2 py-2  px-3"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-error text-sm mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Email:
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white border-2 py-2  px-3"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-error text-sm mt-1"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Password:
                                </label>
                                <Field
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm bg-white border-2 py-2  px-3"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-error text-sm mt-1"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Loading..." : "Register"}
                            </button>
                            <div className="p-6">
                                <div className="flex items-center justify-center">
                                    <NavLink to="/login">
                                        <span className="text-normal text-primary py-2 px-4 hover:text-accent  ">
                                            Have account ? 
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register
