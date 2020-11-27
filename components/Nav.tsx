import React from "react";
import Button, { IButtonProps } from "./Button";
import "../public/styles/Button.scss";

export interface INavProps {
  buttonArr: IButtonProps[];
}

const Nav: React.FunctionComponent<INavProps> = ({ buttonArr }) => {
  if (buttonArr.length < 1) {
    return null;
  }

  return (
    <nav>
      {buttonArr.map(button => <Button {...button} key={button.cta} />)}
    </nav>
  )
}

export default Nav;