import { withAuth } from '@auth';
import { Button, Layout, Modal } from '@components';
import { AddUserHookForm } from '@components/Admin';
import { TableError, TableLoading, TableSuccess } from '@components/Tables';
import { userColumns } from '@data/admin';
import { useDisclosure, useQuery } from '@hooks';

const Page = () => {
  const { isOpen, show, hide } = useDisclosure();
  const { data, status, refetch, dataUpdatedAt, ...props } = useQuery('/admin/users');

  return (
    <Layout title="Users">
      <Button onClick={show} className="button full primary no-underline">
        <span>Add new user</span>
      </Button>

      <div className="flex w-full flex-col overflow-x-auto rounded-lg bg-white pb-0 shadow">
        <>
          {status === 'loading' && <TableLoading columns={userColumns} name="users-loading" />}
          {status === 'error' && <TableError columns={userColumns} name="users-error" />}
          {status === 'success' && (
            <TableSuccess
              data={data}
              columns={userColumns}
              dataUpdatedAt={dataUpdatedAt}
              refetch={refetch}
              {...props}
            />
          )}
        </>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} hide={hide} title="Add new user">
          <AddUserHookForm hide={hide} refetch={refetch} />
        </Modal>
      )}
    </Layout>
  );
};

export default withAuth(Page);
