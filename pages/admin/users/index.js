import { withAuth } from '@auth';
import { Button, Layout, Modal } from '@components';
import { AddUserHookForm, UsersTable } from '@components/Admin';
import { useDisclosure } from '@hooks';

const Page = () => {
  const { isOpen, show, hide } = useDisclosure();

  return (
    <Layout title="Users">
      <Button onClick={show} className="button full primary no-underline">
        <span>Add new user</span>
      </Button>

      <div className="flex w-full flex-col overflow-x-auto rounded-lg bg-white pb-0 shadow">
        <UsersTable />
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} hide={hide} title="Add new user">
          <AddUserHookForm />
        </Modal>
      )}
    </Layout>
  );
};

export default withAuth(Page);
