import React from 'react';
import Datetime from 'react-datetime';
import dateStyles from './dateStyles';
// import moment from 'moment';

const TimePicker = ({ minDate, changeDate }) => {
  const yesterday = Datetime.moment().subtract(1, 'day');
  const valid = current => minDate ? current.isAfter(minDate) : current.isAfter(yesterday);
  dateStyles();
  return (
    <Datetime
      isValidDate={valid}
      onChange={changeDate}
    />
  );
};

export default TimePicker;
