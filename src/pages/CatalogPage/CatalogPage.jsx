import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { CatalogPageFilters } from "../../components/CatalogPageFilters/CatalogPageFilters";
import { CarsList } from "../../components/CarsList/CarsList";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import {
  selectError,
  selectLoading,
  selectLoadingMore,
  selectPage,
  selectTotalPages,
} from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";
import { resetCars, setPage } from "../../redux/cars/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { resetFilters } from "../../redux/filters/slice";
import toast from "react-hot-toast";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectLoading);
  const isLoadMore = useSelector(selectLoadingMore);
  const isError = useSelector(selectError);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const [activeFilters, setActiveFilters] = useState(null);

  useEffect(() => {
    if (!activeFilters) {
      dispatch(fetchCars({ page }));
    }
  }, [dispatch, page, activeFilters]);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
      dispatch(resetCars());
    };
  }, [dispatch]);

  const handleClickLoadMore = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchCars({ page: page + 1, filters: activeFilters }));
  };

  const handleClickSearch = () => {
    dispatch(resetCars());
    dispatch(setPage(1));
    dispatch(fetchCars({ page: 1, filters })).then((action) => {
      if (action.payload?.cars?.length === 0) {
        toast.error("No cars found for the selected filters.");
      }
    });
    setActiveFilters(filters);
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}

        {isError ? (
          <ErrorMessage />
        ) : (
          <div className={styles.catalogWrapper}>
            <CatalogPageFilters onSearch={handleClickSearch} />

            <CarsList />

            {page < totalPages && !isLoading && (
              <>
                <Button
                  btnText="Load more"
                  btnSize="loadMore"
                  onClick={handleClickLoadMore}
                />
                {isLoadMore && <Loader variant="inlineLoader" />}
              </>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CatalogPage;
