import { TableError, TableLoading, TableSuccess } from '@components/Tables';
import { userColumns } from '@data/admin';
import { useQuery } from '@hooks';

const UsersTable = () => {
  const { data, status, refetch, dataUpdatedAt, ...props } = useQuery('/admin/users');

  return (
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
  );
};

export default UsersTable;
