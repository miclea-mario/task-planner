import { classnames } from '@lib';
import TaskCard from './TaskCard';

const KanbanColumn = ({ status, tasks, executants, refetch }) => {
  const statusGradientBackgroundMap = {
    open: 'bg-gradient-to-r from-amber-50 to-amber-100',
    pending: 'bg-gradient-to-r from-orange-50 to-orange-100',
    completed: 'bg-gradient-to-r from-green-50 to-green-100',
    closed: 'bg-gradient-to-r from-pink-50 to-pink-100',
  };

  const textColorMap = {
    open: 'text-amber-400',
    pending: 'text-orange-400',
    completed: 'text-green-400',
    closed: 'text-pink-400',
  };

  const gradient =
    statusGradientBackgroundMap[status] || 'bg-gradient-to-r from-green-100 to-green-200';

  const textColor = textColorMap[status] || 'text-green-300';

  return (
    <div className="flex flex-col gap-4 group min-h-screen">
      <h3 className={classnames(gradient, textColor, 'rounded-lg text-base px-4 py-1 font-bold')}>
        {status.toUpperCase()}
      </h3>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} executants={executants} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
