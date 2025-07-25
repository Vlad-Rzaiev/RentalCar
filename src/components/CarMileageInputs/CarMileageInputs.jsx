import clsx from "clsx";
import { useId } from "react";
import { formatNumberWithSpace } from "../../utils/formatNumberWithSpace";
import styles from "./CarMileageInputs.module.css";

export const CarMileageInputs = ({ onChange, valueFrom, valueTo }) => {
  const id = useId();

  return (
    <div>
      <p className={styles.text}>Сar mileage / km</p>

      <div className={styles.inputWrapper}>
        <label className={styles.prefix} htmlFor={id + "minMileage"}>
          From
        </label>
        <input
          className={clsx(styles.input, styles.fromInput)}
          id={id + "minMileage"}
          type="text"
          name="minMileage"
          value={formatNumberWithSpace(valueFrom)}
          onChange={onChange}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label className={styles.prefix} htmlFor={id + "maxMileage"}>
          To
        </label>
        <input
          className={clsx(styles.input, styles.toInput)}
          id={id + "maxMileage"}
          type="text"
          name="maxMileage"
          value={formatNumberWithSpace(valueTo)}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
