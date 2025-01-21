import * as Yup from 'yup';

export const identityValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  role: Yup.string().required(),
});

export const identityInitialValues = {
  name: '',
  email: '',
  password: '',
  role: '',
  manager_id: '',
};
