import { Button } from "../Button/Button";
import { FavoriteIcon } from "../FavoriteIcon/FavoriteIcon";
import clsx from "clsx";
import styles from "./CarCard.module.css";

export const CarCard = ({ car }) => {
  const splitAddress = car.address.replace(/,/g, "").split(" ");

  return (
    <>
      <FavoriteIcon carId={car.id} />

      <img className={styles.img} src={car.img} />

      <div className={styles.descWrapper}>
        <h2 className={styles.desc}>
          {car.brand} <span className={styles.model}>{car.model}</span>,{" "}
          {car.year}
        </h2>
        <p
          className={clsx(styles.desc, styles.price)}
        >{`$${car.rentalPrice}`}</p>
      </div>

      <div className={styles.infoBlock}>
        <ul className={styles.infoList}>
          <li>{splitAddress[3]}</li>
          <li>{splitAddress[4]}</li>
          <li>{car.rentalCompany}</li>
        </ul>
        <ul className={clsx(styles.infoList, styles.withoutLastAfter)}>
          <li>{car.type}</li>
          <li>{car.mileage} km</li>
        </ul>
      </div>

      <Button btnText="Read more" btnSize="large" to={`/catalog/${car.id}`} />
    </>
  );
};
