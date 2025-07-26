import { useId } from "react";
import styles from "./Select.module.css";

export const Select = ({
  name,
  label,
  value,
  placeholder = "Select option",
  options = [],
  onChange,
}) => {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id + name}>
        {label}
      </label>

      <select
        className={styles.select}
        id={id + name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
