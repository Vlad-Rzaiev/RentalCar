import { useCallback, useId, useMemo } from "react";
import Select from "react-select";
import { toBrandOptions } from "../../utils/brands";
import styles from "./Select.module.css";

export const CustomSelect = ({
  name,
  label,
  value,
  placeholder = "Select option",
  options = [],
  onChange,
}) => {
  const id = useId();
  const brandOptions = useMemo(() => toBrandOptions(options), [options]);
  const selectedOption =
    brandOptions.find((option) => option.value === value) ?? null;

  const handleSelectChange = (selected) => {
    onChange({
      target: {
        name,
        value: selected ? selected.value : "",
      },
    });
  };

  const priceFormat = useCallback(
    (option, { context }) =>
      context === "value" ? <>To ${option.label}</> : <>{option.label}</>,
    []
  );

  return (
    <div>
      <label className={styles.label} htmlFor={id + name}>
        {label}
      </label>

      <Select
        classNamePrefix="cs"
        options={brandOptions}
        value={selectedOption}
        inputId={id + name}
        name={name}
        onChange={handleSelectChange}
        placeholder={placeholder}
        unstyled
        {...(name === "rentalPrice" && { formatOptionLabel: priceFormat })}
        components={{
          DropdownIndicator: null,
          IndicatorSeparator: null,
          ClearIndicator: null,
        }}
      />
    </div>
  );
};
