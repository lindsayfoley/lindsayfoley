import { VFC } from "react";
import { AnchorProps } from "./types";

const Anchor: VFC<AnchorProps> = ({
  link,
  icon,
  cta,
  titleText = "",
  external = true,
}) => {
  const anchorProps = {
    href: link,
    title: titleText,
  };

  const props = external
    ? {
        target: "_blank",
        rel: "noreferrer",
        ...anchorProps,
      }
    : {
        ...anchorProps,
      };

  return (
    <a {...props}>
      {icon && <i className={icon}></i>}
      {cta}
    </a>
  );
};

export default Anchor;
