import { addUser } from '@api/admin';
import { AddUserForm } from '@components/Forms';
import { Form, HookForm } from '@components/HookForm';
import { useMutation } from '@hooks';
import { identityInitialValues, identityValidationSchema } from '@models/admin/identity';

const AddUserHookForm = ({ hide, refetch }) => {
  const mutation = useMutation(addUser, {
    successCallback: () => {
      refetch();
      hide();
    },
  });

  const handleSubmit = (values) => mutation.mutateAsync(values);

  return (
    <HookForm
      onSubmit={handleSubmit}
      initialValues={identityInitialValues}
      validationSchema={identityValidationSchema}
    >
      <Form>
        <AddUserForm />
      </Form>
    </HookForm>
  );
};

export default AddUserHookForm;
