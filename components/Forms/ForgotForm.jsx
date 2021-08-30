import { useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import { Email, Recaptcha } from '../Fields';
import { Fieldset, Submit } from '../Formik';
import { validationSchema, initialValues } from '../../models/forgot';
import { forgot } from '../../api';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await forgot(ref, values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        <Fieldset
          name="email"
          className="mb-2"
          label={<div className="text-gray-800">Your email</div>}
        >
          <Field name="email" as={Email} autoFocus />
        </Fieldset>
        <Submit onlyOnce>Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </Formik>
  );
};

export default ForgotForm;
