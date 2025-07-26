import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { CarMileageInputs } from "../CarMileageInputs/CarMileageInputs";
import { fetchAllCarsForFilters } from "../../redux/cars/operations";
import { getBrands } from "../../redux/brands/operations";
import {
  selectBrands,
  selectBrandsInitialized,
} from "../../redux/brands/selectors";
import {
  selectPriceInitialized,
  selectPrices,
  selectTotalCars,
} from "../../redux/cars/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";
import styles from "./CatalogPageFilters.module.css";

export const CatalogPageFilters = ({ onSearch }) => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const totalCars = useSelector(selectTotalCars);
  const prices = useSelector(selectPrices);
  const brandsInitialized = useSelector(selectBrandsInitialized);
  const priceInitialized = useSelector(selectPriceInitialized);

  useEffect(() => {
    if (!brandsInitialized) {
      dispatch(getBrands());
    }

    if (!priceInitialized && totalCars > 0) {
      dispatch(fetchAllCarsForFilters(totalCars));
    }
  }, [dispatch, brandsInitialized, priceInitialized, totalCars]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "minMileage" || name === "maxMileage") {
      const cleanValue = value.replace(/\s/g, "");
      dispatch(setFilters({ name, value: cleanValue }));
    } else {
      dispatch(setFilters({ name, value }));
    }
  };

  const handleClickSearch = (e) => {
    e.preventDefault();

    onSearch();

    e.currentTarget.blur();
  };

  return (
    <form>
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

        <Button type="submit" btnText="Search" onClick={handleClickSearch} />
      </div>
    </form>
  );
};
