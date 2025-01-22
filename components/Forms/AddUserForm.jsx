import { Email, Input, Select } from '@components/Fields';
import { Field, Fieldset, Submit } from '@components/HookForm';
import { useQuery } from '@hooks';
import { useFormContext } from 'react-hook-form';

const AddUserForm = () => {
  const { data, status } = useQuery('/admin/users', { role: 'manager' });
  const { watch } = useFormContext();

  const values = watch();
  return (
    <>
      {status === 'success' && (
        <div className="flex flex-col gap-4">
          <Fieldset name="name" label="Name">
            <Field id="name" name="name" as={Input} autoFocus={true} />
          </Fieldset>
          <Fieldset name="email" label="Email">
            <Field id="email" name="email" as={Email} />
          </Fieldset>
          <Fieldset name="password" label="Password">
            <Field id="password" name="password" as={Input} />
          </Fieldset>
          <Fieldset name="role" label="Role">
            <Field id="role" name="role" as={Select}>
              <option value="">Select role</option>
              <option value="executant">Executant</option>
              <option value="manager">Manager</option>
            </Field>
          </Fieldset>
          {values.role === 'executant' && (
            <Fieldset name="manager_id" label="Manager">
              <Field id="manager_id" name="manager_id" as={Select}>
                <option value="">Select manager</option>
                {data.pages.map((manager) => (
                  <option key={manager.id} value={manager.id}>
                    {manager.name}
                  </option>
                ))}
              </Field>
            </Fieldset>
          )}
          <div className="flex justify-center">
            <Submit>Add user</Submit>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUserForm;
