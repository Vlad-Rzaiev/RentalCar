import { useId } from "react";
import chevronDown from "../../assets/icons/chevronDown.svg";
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
      <label className={styles.label} htmlFor={id + "selectLabel"}>
        {label}
      </label>

      <div className={styles.selectWrapper}>
        <select
          className={styles.select}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>

        <img className={styles.chevron} src={chevronDown} alt="arrow down" />
      </div>
    </div>
  );
};
