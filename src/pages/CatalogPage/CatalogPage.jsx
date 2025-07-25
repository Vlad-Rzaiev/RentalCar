import { useEffect } from "react";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import {
  selectError,
  selectLoading,
  selectLoadingMore,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CarsList } from "../../components/CarsList/CarsList";
import { Button } from "../../components/Button/Button";
import { setPage } from "../../redux/cars/slice";
import { CatalogPageFilters } from "../../components/CatalogPageFilters/CatalogPageFilters";
import styles from "./CatalogPage.module.css";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoadMore = useSelector(selectLoadingMore);
  const isError = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars({ page, filters }));
  }, [dispatch, page]);

  const handleClickLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}

        {isError ? (
          <ErrorMessage />
        ) : (
          <div className={styles.catalogWrapper}>
            <CatalogPageFilters />

            <CarsList />

            {page < totalPages && !isLoading && (
              <Button
                btnText="Load more"
                btnSize="loadMore"
                onClick={handleClickLoadMore}
              />
            )}
            {isLoadMore && <Loader />}
          </div>
        )}
      </Container>
    </Section>
  );
};
