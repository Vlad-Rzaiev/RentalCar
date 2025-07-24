import { Button } from "../Button/Button";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Find your perfect rental car</h1>

        <p className={styles.text}>
          Reliable and budget-friendly rentals for any journey
        </p>

        <Button btnText="View Catalog" btnSize="large" to="/catalog" />
      </div>
    </div>
  );
};
