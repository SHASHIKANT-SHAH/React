import { useFormik } from "formik"
import CreateSchema from "./CreateSchema";
import { Button, Form } from "react-bootstrap";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create(){
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name : "",
            age : "",
            email : ""
        },
        validationSchema: CreateSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log("Form Data:", values);
            Axios.post("https://68fcdcec96f6ff19b9f68617.mockapi.io/crud",values)
            .then((response) => {
                console.log(response)
                navigate('/')
            }).catch((error)=> {
                console.log(error)
            })
            resetForm();
        }
    })
    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik;
    return (
        <>
        <h3>Create User Data</h3>
        <Link to="/">
            <Button variant="success">
                 Read Data ⚇
            </Button>
        </Link>
        <Form onSubmit={handleSubmit}>
            <div>
                <Form.Label>Name :</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {touched.name && errors.name && <div style={styles.error}> {errors.name} </div>}
            </div>
            <div>
                <Form.Label>Age :</Form.Label>
                <Form.Control size="lg" type="number" placeholder="Age" name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
                {touched.age && errors.age && <div style={styles.error}>{errors.age}</div>}
            </div>
            <div>
                <Form.Label>Email :</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>
            <div>
                <Button type="submit" style={styles.submitButton}>Submit</Button>
            </div>
        </Form>
        </>
    )
}

const styles ={
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
                 }
}

export default Create