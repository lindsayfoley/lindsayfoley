import React from "react";
import Button, { IButtonProps } from "./Button";
import "../public/styles/Button.scss";

interface INavProps {
  buttons: IButtonProps[];
}

const Nav: React.FunctionComponent<INavProps> = ({ buttons }) =>
  <nav>
    {buttons.map((button, index) => <Button {...button} key={index} />)}
  </nav>;

export default Nav;