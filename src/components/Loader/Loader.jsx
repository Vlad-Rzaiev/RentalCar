import { FadeLoader } from "react-spinners";
import styles from "./Loader.module.css";

export const Loader = ({ variant = "fullscreen" }) => {
  return (
    <div
      className={
        variant === "fullscreen" ? styles.fullscreen : styles.inlineLoader
      }
    >
      <FadeLoader color="#3470FF" />
    </div>
  );
};
