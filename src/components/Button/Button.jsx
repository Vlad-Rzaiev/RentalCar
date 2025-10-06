import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.css";

export const Button = ({
  type = "button",
  to,
  btnText,
  btnSize = "small",
  onClick,
  disabled = false,
}) => {
  const sizeStyle = styles[btnSize];

  if (to) {
    return (
      <Link className={clsx(styles.btn, sizeStyle)} to={to}>
        {btnText}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx(styles.btn, sizeStyle, disabled && styles.disabledBtn)}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
