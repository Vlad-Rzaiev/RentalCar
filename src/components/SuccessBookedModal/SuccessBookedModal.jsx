import { useEffect } from "react";
import { Button } from "../Button/Button";
import CloseIcon from "../../assets/icons/close.svg";
import styles from "./SuccessBookedModal.module.css";

export const SuccessBookedModal = ({ handleCloseModal }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleCloseModal]);

  const onOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      onMouseDown={onOverlayMouseDown}
    >
      <div className={styles.modalWrapper}>
        <button
          className={styles.closeBtn}
          aria-label="Close"
          onClick={handleCloseModal}
        >
          <img src={CloseIcon} alt="Close" />
        </button>

        <h2 className={styles.title}>Your car has been successfully booked!</h2>

        <Button btnText="Ok" onClick={handleCloseModal} />
      </div>
    </div>
  );
};
