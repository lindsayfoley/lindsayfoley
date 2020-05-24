import React from "react";
import Button, { IButtonProps } from "./Button";
import "../public/styles/Button.scss";

export interface INavProps {
  buttonArr: IButtonProps[];
}

const Nav: React.FunctionComponent<INavProps> = ({ buttonArr }) => {
  if (!buttonArr || buttonArr.length < 1) {
    return null;
  }

  return (
    <nav>
      {buttonArr.map((button, index) => <Button {...button} key={index} />)}
    </nav>
  )
}

export default Nav;