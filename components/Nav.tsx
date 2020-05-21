import React from "react";
import AnchorButton, { IAnchorButtonProps } from "./AnchorButton";
import "../public/styles/_anchorButton.scss";

interface INavProps {
  buttons: IAnchorButtonProps[];
}

const Nav: React.FunctionComponent<INavProps> = ({ buttons }) =>
  <nav>
    {buttons.map(button => <AnchorButton {...button} key={button[0].cta} />)}
  </nav>;

export default Nav;