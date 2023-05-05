import "./style.css";
import React, { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const emptyDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyDays.push(<div key={`empty-${i}`} className="day empty"></div>);
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>Previous Month</button>
        <h1>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
        <button onClick={handleNextMonth}>Next Month</button>
      </div>
      <div className="weekdays">
        {weekdays.map((weekday, index) => (
          <div key={`weekday-${index}`} className="weekday">
            {weekday.slice(0, 3)}
          </div>
        ))}
      </div>
      <div className="days">
        {emptyDays}
        {days.map(day => (
          <div key={`day-${day}`} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

