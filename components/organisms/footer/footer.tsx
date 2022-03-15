import { VFC } from "react";
import { Anchor } from "components/atoms";
import styles from "./footer.module.scss";

const Footer: VFC = () => (
  <footer className={styles.footer}>
    <div className={styles["social-icons"]}>
      <Anchor
        link="mailto:me@lindsayfoley.co.uk"
        icon="fa fa-paper-plane"
        titleText="Contact me"
      />
      <Anchor
        link="http://uk.linkedin.com/pub/lindsay-foley/34/935/9a1"
        icon="fab fa-linkedin-in"
        titleText="View my LinkedIn profile"
      />
      <Anchor
        link="https://github.com/lindsayfoley"
        icon="fab fa-github-alt"
        titleText="Find me on GitHub"
      />
      <Anchor
        link="http://instagram.com/comeflywithlindsay"
        icon="fab fa-instagram"
        titleText="Check out my Instagram"
      />
      <Anchor
        link="https://comeflywithlindsay.com"
        icon="fas fa-rss"
        titleText="Have a look at my blog"
      />
    </div>
    <small>
      <strong>&#169; LINDSAY FOLEY</strong>
    </small>
  </footer>
);

export default Footer;
