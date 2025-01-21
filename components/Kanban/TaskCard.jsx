import { Pill } from '@components';

const TaskCard = ({ task }) => {
  return (
    <div className="hover:shadow-md transition-all hover:cursor-pointer border shadow-sm rounded-lg flex flex-col justify-between p-4 bg-white text-gray-500 min-h-[150px]">
      <div>
        <h5 className="font-bold text-gray-700">{task.title}</h5>
        <p className="margin-0 line-clamp-2">{task.description}</p>
      </div>
      <div className="flex flex-col justify-between items-center text-xs w-full">
        <hr className="h-px mb-4 bg-gray-500 border-0 w-full" />
        <div className="flex justify-between w-full items-center">
          <p className="text-gray-500">Assigned to:</p>
          <Pill>{task.assignee_name || 'Unassigned'}</Pill>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
