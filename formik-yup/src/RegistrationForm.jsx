import React from "react";
import { useFormik } from "formik";
import RegistrationSchema from "./RegistrationSchema";

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      dob: "",
      country: "",
      terms: false,
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (values, { resetForm }) => {
        await new Promise((r) => setTimeout(r, 1000)); // simulate API delay
        console.log("Form Data:", values);
        alert("Registered Successfully!");
        resetForm();
      }
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter full name"
        />
        {touched.fullName && errors.fullName && <div style={styles.error}>{errors.fullName}</div>}

        {/* Username */}
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter username"
        />
        {touched.username && errors.username && <div style={styles.error}>{errors.username}</div>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter email"
        />
        {touched.email && errors.email && <div style={styles.error}>{errors.email}</div>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter password"
        />
        {touched.password && errors.password && <div style={styles.error}>{errors.password}</div>}

        {/* Confirm Password */}
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm password"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <div style={styles.error}>{errors.confirmPassword}</div>
        )}

        {/* Phone */}
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter 10-digit phone number"
        />
        {touched.phone && errors.phone && <div style={styles.error}>{errors.phone}</div>}

        {/* Gender */}
        <div>
          <label>Gender:</label><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "male"}
            /> Male
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "female"}
            /> Female
          </label>
          {touched.gender && errors.gender && <div style={styles.error}>{errors.gender}</div>}
        </div>

        {/* DOB */}
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.dob && errors.dob && <div style={styles.error}>{errors.dob}</div>}

        {/* Country */}
        <label>Country:</label>
        <select
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Select country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
        </select>
        {touched.country && errors.country && <div style={styles.error}>{errors.country}</div>}

        {/* Terms */}
        <div style={{ marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
            />{" "}
            I accept the Terms & Conditions
          </label>
          {touched.terms && errors.terms && <div style={styles.error}>{errors.terms}</div>}
        </div>

        {/* Submit */}
        <button type="submit" style={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

// ✅ Simple Inline Styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  submitButton: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RegistrationForm;
