// SharedForm.js
import React from 'react';
import { Formik, Form } from 'formik';
import SharedInput from './SharedInput';
import * as Yup from 'yup';

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .required('Username is required'),
  bio: Yup.string().max(200, 'Must be 200 characters or less'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  gender: Yup.string().required('Please select a gender'),
});

const SharedForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        bio: '',
        terms: false,
        gender: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Data:', values);
      }}
    >
      {() => (
        <Form>
          <SharedInput label="Username" name="username" type="text" />
          <SharedInput label="Bio" name="bio" type="textarea" />
          <SharedInput
            label="Gender"
            name="gender"
            type="radio"
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
          <SharedInput label="Accept Terms" name="terms" type="checkbox" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SharedForm;
