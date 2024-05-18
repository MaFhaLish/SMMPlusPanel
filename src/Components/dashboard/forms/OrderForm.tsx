import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { FC } from "react";

const OrderForm : FC = () : JSX.Element => {
    return (
        <Formik
            initialValues={{
                search: '',
                category: '',
                services: '',
                link: '',
                quantity: '',
                charge: ''
            }}
            onSubmit={values => console.log(values)}
        >
            <Form className="mt-8">
                <Field 
                    name='search'
                    placeholder="Search"
                    type="search"
                    className="order-input mt-6"
                    autoComplete="off"
                    required
                />

                <div className="order-form-group mt-6">
                    <label htmlFor="category">Category</label>
                    <Field
                        name='category'
                        id='category'
                        component="select"
                        className="order-input"
                    >
                        <option value="all">All</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                    </Field>
                    <ErrorMessage name="category" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="services">Services</label>
                    <Field
                        name='services'
                        id='services'
                        component="select"
                        className="order-input"
                    >
                        <option value="all">All</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                    </Field>
                    <ErrorMessage name="services" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="link">Link</label>
                    <Field
                        name='link'
                        id='link'
                        type='text'
                        className="order-input"
                    />
                    <ErrorMessage name="link" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="quantity">Quantity</label>
                    <Field
                        name='quantity'
                        id='quantity'
                        type='number'
                        className="order-input"
                    />
                    <ErrorMessage name="quantity" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="charge">charge</label>
                    <Field
                        name='charge'
                        id='charge'
                        type='text'
                        className="order-input"
                        disabled
                    />
                </div>

                <div className="order-btn-group pt-6">
                    <button type="submit">Submit</button>
                    <Link href="/dashboard/add-funds" className="order-link" >Add Funds</Link>
                </div>
            </Form>
        </Formik>
    )
}

export default OrderForm;