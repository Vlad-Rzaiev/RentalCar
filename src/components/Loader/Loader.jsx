import { FadeLoader } from "react-spinners";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <FadeLoader color="#3470FF" />
    </div>
  );
};
