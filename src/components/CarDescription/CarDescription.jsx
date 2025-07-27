import locationImg from "../../assets/icons/location.svg";
import styles from "./CarDescription.module.css";

export const CarDescription = ({ car }) => {
  return (
    <div className={styles.descWrap}>
      <h2
        className={styles.title}
      >{`${car.brand} ${car.model}, ${car.year}`}</h2>

      <div className={styles.locationWrap}>
        <img
          className={styles.locationIcon}
          src={locationImg}
          alt="location icon"
        />

        <p className={styles.locationText}>
          {car.address.split(", ").slice(-2).join(", ")}
        </p>

        <p className={styles.mileage}>{`Mileage: ${car.mileage} km`}</p>
      </div>

      <p className={styles.price}>{`$${car.rentalPrice}`}</p>

      <p className={styles.description}>{car.description}</p>
    </div>
  );
};
