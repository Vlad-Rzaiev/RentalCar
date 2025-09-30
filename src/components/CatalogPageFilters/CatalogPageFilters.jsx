import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomSelect } from "../Select/Select";
import { Button } from "../Button/Button";
import { CarMileageInputs } from "../CarMileageInputs/CarMileageInputs";
import { getBrands } from "../../redux/brands/operations";
import {
  selectBrands,
  selectBrandsInitialized,
} from "../../redux/brands/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";
import { prices } from "../../constants/carPrices";
import styles from "./CatalogPageFilters.module.css";

export const CatalogPageFilters = ({ onSearch }) => {
  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilters);
  const brandsInitialized = useSelector(selectBrandsInitialized);

  useEffect(() => {
    if (!brandsInitialized) {
      dispatch(getBrands());
    }
  }, [dispatch, brandsInitialized]);

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
        <div className={styles.selectsWrapper}>
          <CustomSelect
            name="brand"
            value={filters.brand}
            label="Car brand"
            placeholder="Choose a brand"
            options={brands}
            onChange={handleChange}
          />

          <CustomSelect
            name="rentalPrice"
            value={filters.rentalPrice}
            label="Price/ 1 hour"
            placeholder="Choose a price"
            options={prices}
            onChange={handleChange}
          />
        </div>

        <div className={styles.milesBtnWrapper}>
          <CarMileageInputs
            onChange={handleChange}
            valueFrom={filters.minMileage}
            valueTo={filters.maxMileage}
          />

          <Button type="submit" btnText="Search" onClick={handleClickSearch} />
        </div>
      </div>
    </form>
  );
};
