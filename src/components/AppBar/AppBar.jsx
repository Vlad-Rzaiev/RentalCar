import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { Navigation } from "../Navigation/Navigation";
import logoSvg from "../../assets/icons/logo.svg";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <NavLink className={styles.logo} to="/">
            <img src={logoSvg} alt="logo" />
          </NavLink>

          <Navigation />
        </div>
      </Container>
    </header>
  );
};
