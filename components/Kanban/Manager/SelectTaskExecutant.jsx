import { updateTask } from '@api/manager';
import { Select } from '@components/Fields';
import { useMutation } from '@hooks';
import { useState } from 'react';

const SelectTaskExecutant = ({ task, refetch, executants = [] }) => {
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
  return (
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
  );
};

export default SelectTaskExecutant;
