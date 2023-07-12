import { Formik, Form, Field } from 'formik';
import { Input } from '@components/Fields';
import { Submit } from '@components/Formik';
import { useMutation } from '@hooks';
import { createTodo } from '../../api/todo';
import { validationSchema, initialValues } from '../../models/todo';

const AddTodoForm = () => {
  const mutation = useMutation(createTodo, {
    invalidateQueries: 'todos',
  });

  const handleSubmit = (data, formik) => {
    mutation.mutate(data);
    formik.resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex gap-4">
        <Field name="name" as={Input} autoFocus autoComplete="off" />
        <Submit className="button full accent" isLoading={mutation.isLoading}>
          Add
        </Submit>
      </Form>
    </Formik>
  );
};

export default AddTodoForm;
