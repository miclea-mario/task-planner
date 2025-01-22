import { updateTask } from '@api/manager';
import { Button, Pill } from '@components';
import { Select } from '@components/Fields';
import { useMutation } from '@hooks';
import { formatDistance } from 'date-fns';
import { useState } from 'react';

const TaskCard = ({ task, executants, refetch }) => {
  const [selectedExecutant, setSelectedExecutant] = useState(task.assignee_id || '');

  const mutation = useMutation(updateTask, {
    successCallback: () => {
      refetch();
    },
  });

  const handleExecutantChange = async (e) => {
    const assignee_id = e.target.value;
    setSelectedExecutant(assignee_id);
    await mutation.mutateAsync({
      id: task.id,
      data: { assignee_id, status: assignee_id ? 'pending' : 'open' },
    });
  };

  const handleCloseTask = async () => {
    await mutation.mutateAsync({
      id: task.id,
      data: { status: 'closed' },
    });
  };

  return (
    <div className="border shadow-sm rounded-lg flex flex-col justify-between p-4 bg-white text-gray-500">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-gray-700">{task.title}</h5>
        <p className="margin-0 line-clamp-2">{task.description}</p>
        <div className="flex gap-2">
          <Pill>{formatDistance(new Date(task.created_at), new Date(), { addSuffix: true })}</Pill>
          <Select
            disabled={task.status !== 'open'}
            className="rounded-full px-3 border-2 bg-white disabled:bg-green-200 disabled:border-0 disabled:text-green-500 disabled:opacity-50 text-xs font-medium leading-tight w-auto"
            value={selectedExecutant}
            onChange={handleExecutantChange}
          >
            <option value="">Unassigned</option>
            {executants.map((executant) => (
              <option key={executant.id} value={executant.id}>
                {executant.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {task.status === 'completed' && (
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
      )}
    </div>
  );
};

export default TaskCard;
