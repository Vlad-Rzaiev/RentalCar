import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CarCard } from "../CarCard/CarCard";
import styles from "./CarsList.module.css";

export const CarsList = () => {
  const cars = useSelector(selectCars);
  return (
    <ul className={styles.list}>
      {cars.map((car) => (
        <li className={styles.listItem} key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};
