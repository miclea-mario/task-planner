import { updateTask } from '@api/manager';
import { Button } from '@components';
import { useMutation } from '@hooks';

const TaskActionButtons = ({ task, refetch }) => {
  const mutation = useMutation(updateTask, {
    successCallback: () => {
      refetch();
    },
  });

  const handleCloseTask = async () => {
    await mutation.mutateAsync({
      id: task.id,
      data: { status: 'closed' },
    });
  };

  if (task.status !== 'completed') return;

  return (
    <div className="flex flex-col justify-between items-center text-xs w-full">
      <hr className="h-px mb-4 mt-4 bg-gray-500 border-0 w-full" />
      <div className="flex justify-end w-full items-center">
        {task.status === 'completed' && (
          <Button onClick={handleCloseTask} className="text-red-500">
            Mark as closed
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskActionButtons;
