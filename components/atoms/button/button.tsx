import { VFC } from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  link: string;
  cta: string;
}

const Button: VFC<ButtonProps> = ({ link, cta }) => (
  <a className={styles.button} href={link} itemProp="url">
    {cta}
  </a>
);

export default Button;
