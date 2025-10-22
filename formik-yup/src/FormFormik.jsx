import { Form, useFormik } from "formik"
import FormSchema from "../FormSchema"

export const FormFormik = () => {
    const formalValues = {
        name: "",
        email: ""
    }
    const {handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: formalValues,
        validationSchema: FormSchema,   
        onSubmit: (values) => {
            console.log("Form data", values)
            console.log("Form data JSON", JSON.stringify(values))
            console.log("Form data Name", values.name)
            console.log("Form data Email", values.email)
        }
     })
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Enter Name :</label>
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <span style={{color:'red'}}>{errors.name}</span>
        <br />
        <label>Enter Email :</label>    
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        <span style={{color:'red'}}>{errors.email}</span>
        <br />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}