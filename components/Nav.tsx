import React from "react";
import AnchorButton, { IAnchorButtonProps } from "./AnchorButton";
import "../public/styles/_anchorButton.scss";

interface INavProps {
  buttons: IAnchorButtonProps[];
}

const Nav: React.FunctionComponent<INavProps> = ({ buttons }) =>
  <nav>
    {buttons.map((button, index) => <AnchorButton {...button} key={index} />)}
  </nav>;

export default Nav;