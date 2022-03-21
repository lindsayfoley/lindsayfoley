import { VFC } from "react";
import styles from "./anchorButton.module.scss";

export interface AnchorButtonProps {
  link: string;
  cta: string;
}

const AnchorButton: VFC<AnchorButtonProps> = ({ link, cta }) => (
  <a className={styles.anchorButton} href={link} itemProp="url">
    {cta}
  </a>
);

export default AnchorButton;
