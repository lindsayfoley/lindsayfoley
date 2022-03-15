import { VFC } from "react";
import styles from "./coding.module.scss";

const Coding: VFC = () => (
  <div className={`tile ${styles.coding}`} aria-hidden="true">
    <div className={`inner ${styles.inner}`}>
      <div className={styles.screen}>&nbsp;</div>
    </div>
  </div>
);

export default Coding;
