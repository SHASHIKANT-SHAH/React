import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name too long")
    .required("Full Name is required"),

  username: Yup.string()
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed")
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(/[@$!%*?&#]/, "Must contain at least one special character")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  gender: Yup.string().required("Gender is required"),

  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of Birth is required"),

  country: Yup.string().required("Please select your country"),

  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
});

export default RegistrationSchema;
