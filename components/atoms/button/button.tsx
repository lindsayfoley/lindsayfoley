import { VFC } from "react";
import Link from "next/link";
import styles from "./button.module.scss";

export interface ButtonProps {
  link: string;
  cta: string;
}

const Button: VFC<ButtonProps> = ({ link, cta }) => (
  <Link href={link}>
    <a className={styles.button} itemProp="url">
      {cta}
    </a>
  </Link>
);

export default Button;
