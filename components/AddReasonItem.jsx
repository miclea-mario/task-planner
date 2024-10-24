import { Button } from '@components';

const AddReasonItem = ({ push, emptyRow, error }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h4 className="text-lg font-medium">Reasons</h4>
          <Button
            className="button mini primary text-xs font-medium"
            onClick={() => push(emptyRow)}
          >
            Add reason
          </Button>
        </div>
        <p className="text-gray-600">
          This section allows you to add reasons why you like coding. Be creative!
        </p>
      </div>
      <p className="text-red-500 text-sm h-5">{error}</p>
    </div>
  );
};

export default AddReasonItem;
