import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/cars/operations";
import { selectCurrentCar, selectLoading } from "../../redux/cars/selectors";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { Loader } from "../../components/Loader/Loader";
import { CarDescription } from "../../components/CarDescription/CarDescription";
import { CarFeatures } from "../../components/CarFeatures/CarFeatures";
import { BookForm } from "../../components/BookForm/BookForm";
import styles from "./CarDetailsPage.module.css";

export const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const car = useSelector(selectCurrentCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}

        {!isLoading && car && (
          <div className={styles.detailsWrapper}>
            <div>
              <img
                className={styles.carImg}
                src={car.img}
                alt={`${car.brand} ${car.model}`}
              />
              <BookForm />
            </div>

            <div className={styles.contentWrapper}>
              <CarDescription car={car} />
              <CarFeatures car={car} />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
