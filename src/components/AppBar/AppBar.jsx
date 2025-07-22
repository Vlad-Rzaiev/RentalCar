import { NavLink } from "react-router-dom";
import logoSvg from "../../assets/icons/logo.svg";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logoSvg} alt="logo" />
      </NavLink>

      <Navigation />
    </header>
  );
};
