import { withAuth } from '@auth';
import { Layout } from '@components';
import { KanbanBoard } from '@components/Kanban';
import { useQuery } from '@hooks';

const Page = () => {
  const { data, status } = useQuery('/manager/tasks');

  return (
    <Layout title="Dashboard">
      <div className="prose max-w-full">{status === 'success' && <KanbanBoard tasks={data} />}</div>
    </Layout>
  );
};

export default withAuth(Page);
