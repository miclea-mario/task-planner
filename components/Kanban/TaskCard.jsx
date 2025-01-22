import { Pill } from '@components';
import { formatDistance } from 'date-fns';
import { TaskActionButtons as ExecutantTaskActionButtons } from './Executant';
import { TaskActionButtons as ManagerTaskActionButtons, SelectTaskExecutant } from './Manager';

const TaskCard = ({ task, executants = [], refetch, role }) => {
  return (
    <div className="border shadow-sm rounded-lg flex flex-col justify-between p-4 bg-white text-gray-500">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold text-gray-700">{task.title}</h5>
        <p className="margin-0 line-clamp-2">{task.description}</p>
        <div className="flex gap-2">
          <Pill>{formatDistance(new Date(task.created_at), new Date(), { addSuffix: true })}</Pill>
          {role === 'manager' && (
            <SelectTaskExecutant task={task} refetch={refetch} executants={executants} />
          )}
        </div>
      </div>
      {role === 'manager' && <ManagerTaskActionButtons task={task} refetch={refetch} />}
      {role === 'executant' && <ExecutantTaskActionButtons task={task} refetch={refetch} />}
    </div>
  );
};

export default TaskCard;
