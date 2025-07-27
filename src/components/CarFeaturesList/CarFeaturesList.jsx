import styles from "./CarFeaturesList.module.css";

export const CarFeaturesList = ({ title, icon, items }) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.list}>
        {items.map((item, idx) => {
          const isString = typeof item === "string";

          return (
            <li className={styles.listItem} key={idx}>
              <img
                className={styles.icon}
                src={isString ? icon : item.icon}
                alt="icon"
              />

              {isString ? item : <p>{`${item.desc}: ${item.value}`}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
