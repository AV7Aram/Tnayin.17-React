import { Formik, Form, Field, ErrorMessage } from "formik";
import { RegisterButton } from '../../components/RegisterButton/RegisterButton'
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schema/schema";

import style from "./LoginFormPage.module.css";

export const LoginFormPage = ({ onLogin, loginError, loginSuccess }) => {

    const navigate = useNavigate()

    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const result = onLogin(values.email, values.password);
                    setSubmitting(false);
                    if (result?.success) {
                        navigate('/');
                    }
                }}
            >
                {({ errors, touched }) => (
                    <div className={style.fbContainer}>
                        <div className={style.fbLeft}>
                            <div className={style.fbContent}>
                                <div className={style.fbForm}>
                                    <Form>
                                        <div className={style.fbInput}>
                                            <Field
                                                name="email"
                                                placeholder="Email or phone number"
                                                className={`${style.fbInputField} ${errors.email && touched.email ? style.errorBorder : ""}`}
                                            />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                        <div className={style.fbInput}>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className={`${style.fbInputField} ${errors.password && touched.password ? style.errorBorder : ""}`}
                                            />
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>                        
                                        <RegisterButton />
                                        <div className={style.fbButton}>
                                            <button type="button">
                                                <NavLink to='/register'>Create a new account</NavLink>
                                            </button>
                                        </div>
                                        {loginSuccess && (
                                            <div className={style.successMsg}>✅ Login successful!</div>
                                        )}
                                        {loginError && <div className={style.error}>{loginError}</div>}
                                        {(errors.email || errors.password) && (
                                            <div className={style.error}>
                                                Please fix the errors above before submitting.
                                            </div>
                                        )}
                                    </Form>
                                </div>
                                <div className={style.fbMsg}>
                                    <a href="#">Create a Page</a> for a celebrity, brand or business.
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
};