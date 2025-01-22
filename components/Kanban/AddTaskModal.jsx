import { addTask } from '@api/manager';
import { Modal } from '@components';
import { AddTaskForm } from '@components/Forms';
import { Form, HookForm } from '@components/HookForm';
import { useMutation } from '@hooks';
import { taskInitialValues, taskValidationSchema } from '@models/manager/task';

const AddTaskModal = ({ isOpen, hide, refetch, executants }) => {
  const mutation = useMutation(addTask, {
    onSuccess: () => {
      refetch();
      hide();
    },
  });

  const handleSubmit = async (values) => {
    await mutation.mutateAsync(values);
  };

  return (
    <Modal isOpen={isOpen} hide={hide} title="Add new task">
      <HookForm
        onSubmit={handleSubmit}
        initialValues={taskInitialValues}
        validationSchema={taskValidationSchema}
      >
        <Form>
          <AddTaskForm executants={executants} />
        </Form>
      </HookForm>
    </Modal>
  );
};

export default AddTaskModal;
