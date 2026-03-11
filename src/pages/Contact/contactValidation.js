import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Please use your corporate email address'
    )
    .required('Corporate email is required'),
  organizationName: Yup.string()
    .required('Organization name is required'),
  organizationDomain: Yup.string()
    .required('Please select a domain'),
  role: Yup.string()
    .required('Role is required'),
  country: Yup.string()
    .required('Please select a country'),
  topic: Yup.string()
    .required('Please select a topic'),
  details: Yup.string()
    .min(20, 'Please provide more details (min 20 characters)')
    .required('Details are required'),
});


export default contactSchema;