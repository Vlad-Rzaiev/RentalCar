import clsx from "clsx";
import { DayPicker } from "react-day-picker";
import { enGB } from "date-fns/locale";
import { endOfDay, format, isBefore, startOfDay, startOfToday } from "date-fns";
import styles from "./CustomDayPicker.module.css";

export const CustomDayPicker = ({
  name,
  label,
  selected,
  setSelected,
  showCalendar,
  setShowCalendar,
  calendarRef,
  inputClassName,
  minDate,
  maxDate,
}) => {
  const formatters = {
    formatWeekdayName: (date, options) => format(date, "EEE", { locale: enGB }),
  };

  const disabledFn = (date) => {
    const lowerBound = minDate ? startOfDay(minDate) : startOfToday();
    if (isBefore(date, lowerBound)) return true;
    if (maxDate && isAfter(date, endOfDay(maxDate))) return true;
    return false;
  };

  return (
    <div className={styles.datePickerWrapper} ref={calendarRef}>
      <input
        className={clsx(styles.input, styles[inputClassName])}
        name={name}
        readOnly
        value={selected ? selected.toLocaleDateString() : ""}
        onClick={() => setShowCalendar(!showCalendar)}
        placeholder={label}
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
            disabled={disabledFn}
          />
        </div>
      )}
    </div>
  );
};
