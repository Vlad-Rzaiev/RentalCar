import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const navLinkClass = ({ isActive }) => {
  return clsx(styles.navLink, isActive && styles.active);
};

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};
