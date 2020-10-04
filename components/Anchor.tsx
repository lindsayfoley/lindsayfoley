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
}) => {

  const anchorProps = {
    href: link,
    title
  }

  const props = external
    ? {
      target: "_blank",
      rel: "noreferrer",
      ...anchorProps
    } : {
      ...anchorProps
    }

  return (
    <a {...props}>
      {icon && <i className={icon}></i>}{cta}
    </a>
  )
}

export default Anchor;