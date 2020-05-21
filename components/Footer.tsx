import React from "react";
import AnchorExternal from "./AnchorExternal";
import "../public/styles/_footer.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div id="social-icons">
        <AnchorExternal
          link="mailto:me@lindsayfoley.co.uk"
          icon="fa fa-paper-plane"
          title="Contact me"
        />
        <AnchorExternal
          link="http://uk.linkedin.com/pub/lindsay-foley/34/935/9a1"
          icon="fab fa-linkedin-in"
          title="View my LinkedIn profile"
        />
        <AnchorExternal
          link="https://github.com/lindsayfoley"
          icon="fab fa-github-alt"
          title="Find me on GitHub"
        />
        <AnchorExternal
          link="http://instagram.com/comeflywithlindsay"
          icon="fab fa-instagram"
          title="Check out my Instagram"
        />
        <AnchorExternal
          link="http://comeflywithlindsay.com"
          icon="fas fa-rss"
          title="Have a look at my blog"
        />
      </div>
      <small>
        <strong>&#169; LINDSAY FOLEY</strong>
      </small>
    </footer>
  );
}

export default Footer;