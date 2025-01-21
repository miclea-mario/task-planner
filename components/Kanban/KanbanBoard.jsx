import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tasks }) => {
  const tasksByStatus = tasks ? Object.groupBy(tasks, ({ status }) => status) : {};

  return (
    <div className="grid grid-cols-4 gap-4 shrink">
      <KanbanColumn status="open" tasks={tasksByStatus.open || []} />
      <KanbanColumn status="pending" tasks={tasksByStatus.pending || []} />
      <KanbanColumn status="completed" tasks={tasksByStatus.completed || []} />
      <KanbanColumn status="closed" tasks={tasksByStatus.closed || []} />
    </div>
  );
};

export default KanbanBoard;
