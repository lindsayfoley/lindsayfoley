import React from "react";

interface IAnchorExternalProps {
  link: string;
  icon?: string;
  cta?: string;
  title?: string;
}

const AnchorExternal: React.FunctionComponent<IAnchorExternalProps> = ({
  link,
  icon,
  cta,
  title
}) => {
  return (
    <a target="_blank" href={link} title={title}>
      {icon && <i className={icon}></i>}
      {cta}
    </a>
  );
}

export default AnchorExternal;