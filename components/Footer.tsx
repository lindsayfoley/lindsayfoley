import React from "react";
import Anchor from "./Anchor";
import "../public/styles/_footer.scss";

const Footer: React.FunctionComponent = () =>
  <footer>
    <div id="social-icons">
      <Anchor
        link="mailto:me@lindsayfoley.co.uk"
        icon="fa fa-paper-plane"
        title="Contact me"
        external={true}
      />
      <Anchor
        link="http://uk.linkedin.com/pub/lindsay-foley/34/935/9a1"
        icon="fab fa-linkedin-in"
        title="View my LinkedIn profile"
        external={true}
      />
      <Anchor
        link="https://github.com/lindsayfoley"
        icon="fab fa-github-alt"
        title="Find me on GitHub"
        external={true}
      />
      <Anchor
        link="http://instagram.com/comeflywithlindsay"
        icon="fab fa-instagram"
        title="Check out my Instagram"
        external={true}
      />
      <Anchor
        link="https://comeflywithlindsay.com"
        icon="fas fa-rss"
        title="Have a look at my blog"
        external={true}
      />
    </div>
    <small>
      <strong>&#169; LINDSAY FOLEY</strong>
    </small>
  </footer>

export default Footer;