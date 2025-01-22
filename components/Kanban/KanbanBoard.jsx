import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tasks, executants = [], refetch, options, role = 'executant' }) => {
  const filterdTasks = tasks.filter((task) => {
    if (options?.assignee_id) {
      return task.assignee_id === options.assignee_id;
    }
    return true;
  });

  const tasksByStatus = filterdTasks ? Object.groupBy(filterdTasks, ({ status }) => status) : {};

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink">
      <KanbanColumn
        status="open"
        tasks={tasksByStatus.open || []}
        executants={executants}
        refetch={refetch}
        role={role}
      />
      <KanbanColumn
        status="pending"
        tasks={tasksByStatus.pending || []}
        executants={executants}
        refetch={refetch}
        role={role}
      />
      <KanbanColumn
        status="completed"
        tasks={tasksByStatus.completed || []}
        executants={executants}
        refetch={refetch}
        role={role}
      />
      <KanbanColumn
        status="closed"
        tasks={tasksByStatus.closed || []}
        executants={executants}
        refetch={refetch}
        role={role}
      />
    </div>
  );
};

export default KanbanBoard;
