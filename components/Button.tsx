import React from "react";
import Link from "next/link";
import "../public/styles/Button.scss";

export interface IButtonProps {
  link: string;
  cta: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ link, cta }) =>
  <Link href={link}>
    <a className="button" itemProp="url">
      {cta}
    </a>
  </Link>;

export default Button;