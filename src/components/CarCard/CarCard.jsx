import clsx from "clsx";
import styles from "./CarCard.module.css";

export const CarCard = ({ car }) => {
  const splitAddress = car.address.replace(/,/g, "").split(" ");

  return (
    <>
      <img className={styles.img} src={car.img} />

      <div className={styles.descWrapper}>
        <p className={styles.desc}>
          {car.brand} <span className={styles.model}>{car.model}</span>,{" "}
          {car.year}
        </p>
        <p
          className={clsx(styles.desc, styles.price)}
        >{`$${car.rentalPrice}`}</p>
      </div>

      <div className={styles.addressWrapper}>
        <p className={styles.address}>
          {splitAddress[3]} | {splitAddress[4]} | {car.rentalCompany} |
          <br />
          {car.type} | {car.mileage} km
        </p>
      </div>
    </>
  );
};
