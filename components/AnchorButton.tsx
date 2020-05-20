import React from "react";
import Link from "next/link";
import "../public/styles/_anchorButton.scss";

export interface IAnchorButtonProps {
  link: string;
  cta: string;
}

const AnchorButton: React.FunctionComponent<IAnchorButtonProps> = ({ link, cta }) =>
  <Link href={link}>
    <button className="AnchorButton" itemProp="url">
      {cta}
    </button>
  </Link>;

export default AnchorButton;