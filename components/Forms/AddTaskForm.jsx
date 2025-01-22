import { Input, Select, Textarea } from '@components/Fields';
import { Field, Fieldset, Submit } from '@components/HookForm';

const AddTaskForm = ({ executants }) => {
  return (
    <div className="flex flex-col gap-4">
      <Fieldset name="title" label="Title">
        <Field id="title" name="title" as={Input} autoFocus={true} />
      </Fieldset>
      <Fieldset name="description" label="Description">
        <Field id="description" name="description" as={Textarea} />
      </Fieldset>
      <Fieldset name="assignee_id" label="Assign to">
        <Field id="assignee_id" name="assignee_id" as={Select}>
          <option value="">Unassigned</option>
          {executants.map((executant) => (
            <option key={executant.id} value={executant.id}>
              {executant.name}
            </option>
          ))}
        </Field>
      </Fieldset>
      <div className="flex justify-center">
        <Submit>Add task</Submit>
      </div>
    </div>
  );
};

export default AddTaskForm;
