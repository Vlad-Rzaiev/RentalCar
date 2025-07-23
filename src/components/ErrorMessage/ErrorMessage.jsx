import styles from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div className={styles.errorBox}>
      <p className={styles.text}>
        Something went wrong. Please try again later.
      </p>
    </div>
  );
};
