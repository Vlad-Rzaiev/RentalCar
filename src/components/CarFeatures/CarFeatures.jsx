import { CarFeaturesList } from "../CarFeaturesList/CarFeaturesList";
import checkImg from "../../assets/icons/checkCircle.svg";
import calendarImg from "../../assets/icons/calendar.svg";
import carImg from "../../assets/icons/car.svg";
import fuelPumpImg from "../../assets/icons/fuelPump.svg";
import gearImg from "../../assets/icons/gear.svg";
import styles from "./CarFeatures.module.css";

export const CarFeatures = ({ car }) => {
  const accessoriesFunctionalities = [
    ...car.accessories,
    ...car.functionalities,
  ];

  const specifications = [
    {
      icon: calendarImg,
      desc: "Year",
      value: car.year,
    },
    {
      icon: carImg,
      desc: "Type",
      value: car.type,
    },
    {
      icon: fuelPumpImg,
      desc: "Fuel Consumption",
      value: car.fuelConsumption,
    },
    {
      icon: gearImg,
      desc: "Engine Size",
      value: car.engineSize,
    },
  ];

  return (
    <div className={styles.featuresWrapper}>
      <CarFeaturesList
        title="Rental Conditions:"
        icon={checkImg}
        items={car.rentalConditions}
      />

      <CarFeaturesList title="Car Specifications:" items={specifications} />

      <CarFeaturesList
        title="Accessories and functionalities:"
        icon={checkImg}
        items={accessoriesFunctionalities}
      />
    </div>
  );
};
