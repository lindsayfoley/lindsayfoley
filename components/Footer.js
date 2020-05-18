import React from "react";
import ExternalLink from "./ExternalLink";

function Footer() {
  return (
    <footer>
      <div id="social-icons">
        <ExternalLink
          link="mailto:me@lindsayfoley.co.uk"
          icon="fa fa-paper-plane"
        />
        <ExternalLink
          link="http://uk.linkedin.com/pub/lindsay-foley/34/935/9a1"
          icon="fab fa-linkedin-in"
        />
        <ExternalLink
          link="https://github.com/lindsayfoley"
          icon="fab fa-github-alt"
        />
        <ExternalLink
          link="http://instagram.com/comeflywithlindsay"
          icon="fab fa-instagram"
        />
        <ExternalLink link="http://comeflywithlindsay.com" icon="fas fa-rss" />
      </div>
      <small>
        <strong>&#169; LINDSAY FOLEY</strong>
      </small>
    </footer>
  );
}

export default Footer;
