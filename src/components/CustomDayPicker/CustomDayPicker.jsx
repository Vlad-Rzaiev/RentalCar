import { DayPicker } from "react-day-picker";
import { enGB } from "date-fns/locale";
import { format, isBefore, startOfToday } from "date-fns";
import styles from "./CustomDayPicker.module.css";

export const CustomDayPicker = ({
  selected,
  setSelected,
  showCalendar,
  setShowCalendar,
  calendarRef,
}) => {
  const formatters = {
    formatWeekdayName: (date, options) => format(date, "EEE", { locale: enGB }),
  };

  return (
    <div className={styles.datePickerWrapper} ref={calendarRef}>
      <input
        className={styles.input}
        name="bookDate"
        readOnly
        value={selected ? selected.toLocaleDateString() : ""}
        onClick={() => setShowCalendar(!showCalendar)}
        placeholder="Booking date"
      />

      {showCalendar && (
        <div className={styles.calendarContainer}>
          <div className={styles.arrow}></div>
          <DayPicker
            locale={enGB}
            formatters={formatters}
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date);
              setShowCalendar(false);
            }}
            showOutsideDays
            disabled={(date) => isBefore(date, startOfToday())}
          />
        </div>
      )}
    </div>
  );
};
