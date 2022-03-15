import { VFC } from "react";
import { Button } from "components/atoms";
import { ButtonProps } from "components/atoms/button/button";
import styles from "./nav.module.scss";

export interface NavProps {
  links: ButtonProps[];
}

const Nav: VFC<NavProps> = ({ links }) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Button {...link} key={link.cta} />
      ))}
    </nav>
  );
};

export default Nav;
