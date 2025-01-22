import { withAuth } from '@auth';
import { Button, Layout } from '@components';
import { Select } from '@components/Fields';
import { KanbanBoard } from '@components/Kanban';
import AddTaskModal from '@components/Kanban/AddTaskModal';
import { useDisclosure, useQuery } from '@hooks';
import { useState } from 'react';

const Page = () => {
  const [options, setOptions] = useState({});
  const { isOpen, show, hide } = useDisclosure();
  const { data, status, refetch } = useQuery('/manager/tasks');

  return (
    <Layout title="Dashboard">
      <div className="flex gap-2 w-full justify-between items-center ">
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
        {status === 'success' && (
          <KanbanBoard
            options={options}
            tasks={data.tasks}
            executants={data.executants}
            refetch={refetch}
          />
        )}
      </div>
      {status === 'success' && (
        <AddTaskModal isOpen={isOpen} hide={hide} refetch={refetch} executants={data.executants} />
      )}
    </Layout>
  );
};

export default withAuth(Page);
