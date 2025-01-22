import { withAuth } from '@auth';
import { Button, Layout, Loading } from '@components';
import { Select } from '@components/Fields';
import { KanbanBoard } from '@components/Kanban';
import AddTaskModal from '@components/Kanban/AddTaskModal';
import { useDisclosure, useQuery } from '@hooks';
import { useState } from 'react';

const Page = () => {
  const [options, setOptions] = useState({});
  const { isOpen, show, hide } = useDisclosure();
  const { data, status, refetch } = useQuery('/manager/tasks');

  const filterdTasks = data?.tasks.filter((task) => {
    if (options.assignee_id) {
      return task.assignee_id === options.assignee_id;
    }
    return true;
  });

  return (
    <Layout title="Dashboard">
      <>
        {status === 'loading' && <Loading />}
        {status === 'error' && <p>Error loading tasks</p>}
        {status === 'success' && (
          <div>
            <div className="flex gap-2 w-full justify-between items-center mb-4">
              <Select
                className="select w-[150px]"
                onChange={(e) => setOptions({ assignee_id: e.target.value })}
              >
                <option value="">All</option>
                {data?.executants.map((executant) => (
                  <option key={executant.id} value={executant.id}>
                    {executant.name}
                  </option>
                ))}
              </Select>
              <Button onClick={show} className="button primary full">
                + Add new task
              </Button>
            </div>

            <div className="prose max-w-full">
              <KanbanBoard
                options={options}
                tasks={filterdTasks}
                executants={data.executants}
                refetch={refetch}
                role="manager"
              />
            </div>

            <AddTaskModal
              isOpen={isOpen}
              hide={hide}
              refetch={refetch}
              executants={data.executants}
            />
          </div>
        )}
      </>
    </Layout>
  );
};

export default withAuth(Page);
