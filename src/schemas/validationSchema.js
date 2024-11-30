import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Must be at least 3 characters').required('Username is required'),
  bio: Yup.string().max(200, 'Must be 200 characters or less'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  gender: Yup.string().required('Please select a gender'),
});

export default validationSchema;
