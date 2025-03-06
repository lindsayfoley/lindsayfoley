import styles from "./desk.module.scss";

const desk = () => {
  return (
    <div className={styles.desk}>
      <div className={styles.top}>
        <div className={`${styles.drawer} ${styles.left}`}>
          <div className={styles.pull}></div>
        </div>
        <div className={`${styles.drawer} ${styles.right}`}>
          <div className={styles.pull}></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.shadow}></div>
        <div className={styles.stand}></div>
        <div className={`${styles.leg} ${styles.left}`}></div>
        <div className={`${styles.leg} ${styles.right}`}></div>
      </div>
    </div>
  );
};

export default desk;
