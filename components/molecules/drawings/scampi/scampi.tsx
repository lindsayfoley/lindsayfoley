import { VFC } from "react";
import styles from "./scampi.module.scss";

const Scampi: VFC = () => (
  <div className={`tile ${styles.scampi}`} aria-hidden="true">
    <div className={`inner ${styles.inner}`}>
      <div className={styles.head}>
        <span className={styles.eye}>&nbsp;</span>
        <span className={styles.eye}>&nbsp;</span>
        <span className={styles.nose}>&nbsp;</span>
      </div>
      <div className={styles.body}>
        <span className={styles.paw}>&nbsp;</span>
        <span className={styles.paw}>&nbsp;</span>
      </div>
    </div>
  </div>
);

export default Scampi;
