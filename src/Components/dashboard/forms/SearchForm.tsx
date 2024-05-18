import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchForm : FC = () : JSX.Element => {
    return (
        <Formik
            initialValues={{
                search: '',
            }}
            onSubmit={values => console.log(values)}
        >
            <Form className="w-full search-form">
                <RiSearch2Line color="#d1d1d1" size={20} />
                <Field 
                    name='search'
                    placeholder="Search"
                    type="search"
                    className="order-input"
                    autoComplete="off"
                    required
                />
                <ErrorMessage name="search" component="div" className="text-red-500" />
            </Form>
        </Formik>
    )
}

export default SearchForm;