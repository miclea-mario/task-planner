import { updateTask } from '@api/executant';
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
      data: { status: 'completed' },
    });
  };

  if (task.status !== 'pending') return;

  return (
    <div className="flex flex-col justify-between items-center text-xs w-full">
      <hr className="h-px mb-4 mt-4 bg-gray-500 border-0 w-full" />
      <div className="flex justify-end w-full items-center">
        {task.status === 'pending' && (
          <Button onClick={handleCloseTask} className="text-green-500">
            Mark as completed
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskActionButtons;
