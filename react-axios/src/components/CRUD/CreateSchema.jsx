import * as Yup from "yup"

const CreateSchema = Yup.object().shape({
    name : Yup.string()
        .required("Name is required!"),
    
    age : Yup.number()
        .required("Age is required!"),

    email : Yup.string()
        .required("Email is required!")
})

export default CreateSchema