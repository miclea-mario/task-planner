import { withAuth } from '@auth';
import { Layout } from '@components';
import { KanbanBoard } from '@components/Kanban';
import { useQuery } from '@hooks';

const Page = () => {
  const { data, status, refetch } = useQuery('/executant/tasks');

  return (
    <Layout title="Dashboard">
      <div className="prose max-w-full">
        {status === 'success' && (
          <KanbanBoard tasks={data.tasks} executants={data.executants} refetch={refetch} />
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Page);
