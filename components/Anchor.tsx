import React from "react";

export interface IAnchorProps {
  link: string;
  icon?: string;
  cta?: string;
  titleText?: string;
  external?: boolean;
}

const Anchor: React.FunctionComponent<IAnchorProps> = ({
  link,
  icon,
  cta,
  titleText,
  external = true
}) => {
  const anchorProps = {
    href: link,
    title: titleText || ''
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