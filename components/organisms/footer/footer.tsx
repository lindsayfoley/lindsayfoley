import { Anchor } from "components/atoms";
import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TRAVEL_BLOG,
  TRAVEL_BLOG_INSTAGRAM,
} from "components/constants";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles["social-icons"]}>
      <Anchor
        link={EMAIL_ADDRESS}
        icon="fa fa-paper-plane"
        titleText="Contact me"
      />
      <Anchor
        link={LINKEDIN_PROFILE}
        icon="fab fa-linkedin-in"
        titleText="View my LinkedIn profile"
      />
      <Anchor
        link={GITHUB_PROFILE}
        icon="fab fa-github-alt"
        titleText="Find me on GitHub"
      />
      <Anchor
        link={TRAVEL_BLOG_INSTAGRAM}
        icon="fab fa-instagram"
        titleText="Check out my Instagram"
      />
      <Anchor
        link={TRAVEL_BLOG}
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
