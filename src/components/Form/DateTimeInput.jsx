// eslint-disable-next-line no-restricted-imports
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller } from 'react-hook-form';
import { FIELD_REQUIRED_MESSAGE } from '../../utils/validators';

const DateTimeInput = ({ control, name, title }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DemoItem label={title}>
          <Controller
            name={name}
            control={control}
            rules={{ required: FIELD_REQUIRED_MESSAGE }}
            render={({ field }) => (
              <DateTimePicker {...field} defaultValue={field.value} type="date-time" />
            )}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimeInput;
