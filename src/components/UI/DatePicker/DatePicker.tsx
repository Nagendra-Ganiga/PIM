import React, { useState, type ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

type DatePickerWrapperProps = {
  date: Date;
  onDateChange: (date: Date) => void;
  children: ReactNode;
  mode?: 'date' | 'time' | 'datetime';
  minimumDate?: Date;
  maximumDate?: Date;
};

const DatePickerWrapper = ({
  date,
  onDateChange,
  children,
  mode = 'date',
  minimumDate,
  maximumDate,
}: DatePickerWrapperProps) => {
  const [open, setOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState<'date' | 'time'>('date');
  const [selectedDate, setSelectedDate] = useState(date);

  const handleChange = (event: DateTimePickerEvent, selected?: Date) => {
    if (event.type !== 'set' || !selected) {
      setOpen(false);
      return;
    }

    if (mode === 'datetime' && currentMode === 'date') {
      setSelectedDate(selected);
      setCurrentMode('time');
      return;
    }

    const finalDate =
      mode === 'datetime'
        ? new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate(),
            selected.getHours(),
            selected.getMinutes(),
          )
        : selected;

    onDateChange(finalDate);
    setOpen(false);
    setCurrentMode('date');
  };

  const handleOpen = () => {
    setSelectedDate(date);
    setCurrentMode(mode === 'time' ? 'time' : 'date');
    setOpen(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpen}>{children}</TouchableOpacity>

      {open && (
        <DateTimePicker
          value={selectedDate}
          mode={mode === 'datetime' ? currentMode : mode}
          display="default"
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default DatePickerWrapper;
