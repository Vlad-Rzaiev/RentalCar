import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/brands/operations";
import { fetchAllCarsForFilters, fetchCars } from "../../redux/cars/operations";
import { selectBrands } from "../../redux/brands/selectors";
import { selectPrices, selectTotalCars } from "../../redux/cars/selectors";
import { resetFilters, setFilters } from "../../redux/filters/slice";
import { setPage } from "../../redux/cars/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { Select } from "../Select/Select";
import { CarMileageInputs } from "../CarMileageInputs/CarMileageInputs";
import { Button } from "../Button/Button";
import styles from "./CatalogPageFilters.module.css";

export const CatalogPageFilters = () => {
  const dispatch = useDispatch();
  const [rentalPriceRequested, setRentalPriceRequested] = useState(false);
  const [brandsRequested, setBrandsRequested] = useState(false);

  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const totalCars = useSelector(selectTotalCars);
  const prices = useSelector(selectPrices);

  useEffect(() => {
    if (!brandsRequested) {
      dispatch(getBrands());
      setBrandsRequested(true);
    }

    if (totalCars > 0 && !rentalPriceRequested) {
      dispatch(fetchAllCarsForFilters());
      setRentalPriceRequested(true);
    }
  }, [dispatch, totalCars]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "minMileage" || name === "maxMileage") {
      const cleanValue = value.replace(/\s/g, "");
      dispatch(setFilters({ name, value: cleanValue }));
    } else {
      dispatch(setFilters({ name, value }));
    }
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    dispatch(setPage(1));
    dispatch(fetchCars(filters));
  };

  return (
    <form action="">
      <div className={styles.wrapper}>
        <Select
          name="brand"
          value={filters.brand}
          label="Car brand"
          placeholder="Choose a brand"
          options={brands}
          onChange={handleChange}
        />

        <Select
          name="rentalPrice"
          value={filters.rentalPrice}
          label="Price/ 1 hour"
          placeholder="Choose a price"
          options={prices}
          onChange={handleChange}
        />

        <CarMileageInputs
          onChange={handleChange}
          valueFrom={filters.minMileage}
          valueTo={filters.maxMileage}
        />

        <Button type="submit" btnText="Search" onClick={handleSearchClick} />
      </div>
    </form>
  );
};
