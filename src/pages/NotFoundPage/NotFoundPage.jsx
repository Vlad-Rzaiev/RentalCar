import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import Section from "../../components/Section/Section";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <Section>
      <div className={css.container}>
        <h2 className={css.title}>404</h2>
        <p className={css.text}>Ooops! Page Not Found!</p>
        <p className={css.text}>
          ⏳ You will be automatically redirected to Home Page for {seconds}{" "}
          seconds...
        </p>
        <Link to="/" className={css.homeBtn}>
          Go home
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;
