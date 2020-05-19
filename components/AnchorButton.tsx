import React from "react";
import Link from "next/link";
import "../public/styles/_anchorButton.scss";

interface IAnchorButtonProps {
  link: string;
  cta: string;
  external?: boolean;
}

const AnchorButton: React.FunctionComponent<IAnchorButtonProps> = ({ link, cta, external = false }) =>
  external ? (
    <a className="AnchorButton" href={link} itemProp="url">
      {cta}
    </a>
  ) : (
      <Link href={link}>
        <a className="AnchorButton" itemProp="url">
          {cta}
        </a>
      </Link>
    );


export default AnchorButton;