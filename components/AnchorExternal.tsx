import React from "react";

interface IAnchorExternalProps {
  link: string;
  icon?: string;
  cta?: string;
}

 const AnchorExternal: React.FunctionComponent<IAnchorExternalProps> = ({ link, icon, cta }) => {
  return (
    <a target="_blank" href={link}>
      {icon && <i className={icon}></i>}
      {cta}
    </a>
  );
}

export default AnchorExternal;