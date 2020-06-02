import React from "react";

export interface IAnchorProps {
  link: string;
  icon?: string;
  cta?: string;
  title?: string;
  external?: boolean;
}

const Anchor: React.FunctionComponent<IAnchorProps> = ({
  link,
  icon,
  cta,
  title,
  external
}) => external ? (
  <>
    <a target="_blank" rel="noreferrer" href={link} title={title}>
      {icon && <i className={icon}></i>}{cta}
    </a>
  </>
) : (
      <>
        <a href={link} title={title}>
          {icon && <i className={icon}></i>}{cta}
        </a>
      </>
    )


export default Anchor;