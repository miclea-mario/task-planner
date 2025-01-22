import * as Yup from 'yup';

export const taskValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  assignee_id: Yup.string(),
});

export const taskInitialValues = {
  title: '',
  description: '',
  assignee_id: '',
};
