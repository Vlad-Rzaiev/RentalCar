import { useEffect } from "react";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { Loader } from "../../components/Loader/Loader";
import { selectError, selectLoading } from "../../redux/cars/selectors";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CarsList } from "../../components/CarsList/CarsList";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <>
            <h2>Filters component</h2>
            <CarsList />
          </>
        )}
      </Container>
    </Section>
  );
};
