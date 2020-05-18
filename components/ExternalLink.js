import React from "react";

function ExternalLink({ link, icon, cta }) {
  return (
    <a target="_blank" href={link}>
      {icon && <i className={icon}></i>}
      {cta}
    </a>
  );
}

export default ExternalLink;
