import { AnchorProps } from "./types";

const Anchor = ({
  link,
  icon,
  cta,
  titleText = "",
  external = true,
}: AnchorProps) => {
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
      {icon && <i className={icon} data-testid="icon"></i>}
      {cta}
    </a>
  );
};

export default Anchor;
