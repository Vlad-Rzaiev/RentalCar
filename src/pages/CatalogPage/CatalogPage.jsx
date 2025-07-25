import { useEffect } from "react";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import {
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/selectors";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CarsList } from "../../components/CarsList/CarsList";
import styles from "./CatalogPage.module.css";
import { Button } from "../../components/Button/Button";
import { setPage } from "../../redux/cars/slice";
import { Select } from "../../components/Select/Select";
import { getBrands } from "../../redux/brands/operations";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCars({ page }));

    dispatch(getBrands());
  }, [dispatch, page]);

  const handleClickLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Section>
      <Container>
        {isError && <ErrorMessage />}

        {isLoading && <Loader />}

        <div className={styles.catalogWrapper}>
          <Select
            name="carBrand"
            value=""
            label="Car brand"
            placeholder="Choose a brand"
{/*             options={} */}
          />

          <CarsList />

          {page < totalPages && !isLoading && (
            <Button
              btnText="Load more"
              btnSize="loadMore"
              onClick={handleClickLoadMore}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};
