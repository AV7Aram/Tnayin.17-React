import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .min(4, "First Name must be at least 4 characters")
        .max(10, "First Name must be at most 8 characters")
        .required("First Name is Required"),
    lastName: Yup
        .string()
        .min(4, "Last Name must be at least 4 characters")
        .max(15, "Last Name must be at most 8 characters")
        .required("Last Name is Required"),
    email: Yup
        .string()
        .email("Invalid email")
        .required("Email is invalid"),
    birthday: Yup
        .string()
        .required("Birthday is Required"),
    password: Yup
        .string()
        .matches(/(?=.*[0-9])/, "Password must contain at least a number")
        .matches(/(?=.*[a-z])/, "Password must contain at least a lowercase letter")
        .matches(/(?=.*[A-Z])/, "Password must contain at least an uppercase letter")
        .matches(/(?=.*[!@#$%^&*])/, "Password must contain at least a special character")
        .matches(/(?=.{4,8})/, "Password must be between 4-8 characters long")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

export const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Email is invalid")
        .required("Email is invalid"),
    password: Yup
        .string()
        .required("Password is required"),
});