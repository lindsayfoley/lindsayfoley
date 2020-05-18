import React from "react";
import "../public/styles/_button.scss";

function Button({ link, cta }) {
  return (
    <a href={link}>
      <button>{cta}</button>
    </a>
  );
}

export default Button;
