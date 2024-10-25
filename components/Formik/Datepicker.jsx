// import { DatePicker as _DatePicker } from '@components/Fields';
import { format as dateFormat } from 'date-fns';
import { useFormikContext } from 'formik';
import DatePickerField from '../Fields/DatePicker';

const Datepicker = ({ name, onChange, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    try {
      setFieldValue(name, dateFormat(new Date(value), 'yyyy-MM-dd'));
    } catch (err) {
      setFieldValue(name, '');
    }
  };

  return <DatePickerField name={name} onChange={handleChange} {...props} />;
};

export default Datepicker;
