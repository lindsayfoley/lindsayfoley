import styles from "./anchorButton.module.scss";

export interface AnchorButtonProps {
  link: string;
  cta: string;
}

const AnchorButton = ({ link, cta }: AnchorButtonProps) => (
  <a className={styles.anchorButton} href={link} itemProp="url">
    {cta}
  </a>
);

export default AnchorButton;
