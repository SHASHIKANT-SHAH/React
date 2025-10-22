import * as yup from 'yup';

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
    
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required'),
});


export default FormSchema;