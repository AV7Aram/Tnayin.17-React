import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "../../schema/schema";
import { NavLink, useNavigate } from "react-router-dom";
import "./RegisterPage.css";

export const RegisterPage = ({ onRegister }) => {

    const navigate = useNavigate();

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="fb_Info">
                    <div className="fb_Container">
                        <div className="fb_Account">
                            <div className="create">Create a new account</div>
                            <div className="easy">It’s quick and easy.</div>
                        </div>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                birthday: "",
                                password: "",
                                confirmPassword: "",
                            }}
                            validationSchema={registerSchema}
                            onSubmit={(values) => {
                                onRegister({
                                    id: Date.now(),
                                    firstName: values.firstName,
                                    lastName: values.lastName,
                                    email: values.email,
                                    password: values.password
                                });
                                navigate('/login');
                            }}
                        >
                            {() => (
                                <Form className="register-form">
                                    <div className="form-group">
                                        <Field name="firstName" placeholder="First name" />
                                        <ErrorMessage name="firstName" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Field name="lastName" placeholder="Last name" />
                                        <ErrorMessage name="lastName" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Field name="email" placeholder="Email" />
                                        <ErrorMessage name="email" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Field name="birthday" placeholder="Birthday (YYYY-MM-DD)" />
                                        <ErrorMessage name="birthday" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Field name="password" type="password" placeholder="Password" />
                                        <ErrorMessage name="password" className="error" />
                                    </div>
                                    <div className="form-group">
                                        <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                                        <ErrorMessage name="confirmPassword" className="error" />
                                    </div>

                                    <button type="submit" className="submit">
                                        Sign Up
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

