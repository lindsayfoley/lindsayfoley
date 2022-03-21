import { VFC } from "react";
import { AnchorButton } from "components/atoms";
import { AnchorButtonProps } from "components/atoms/anchorButton/anchorButton";
import styles from "./nav.module.scss";

export interface NavProps {
  links: AnchorButtonProps[];
}

const Nav: VFC<NavProps> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <AnchorButton {...link} key={link.cta} />
      ))}
    </nav>
  );
};

export default Nav;
