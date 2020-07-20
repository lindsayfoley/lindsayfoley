import React from "react";
import "../../public/styles/spotlight-tile.scss";
import "../../public/styles/scampi-drawing.scss";

const Scampi = () => (
  <div className="spotlight-tile scampi" aria-hidden="true">
    <div className="inner">
      <div className="head">
        <span className="eye">&nbsp;</span>
        <span className="eye">&nbsp;</span>
        <span className="nose">&nbsp;</span>
      </div>
      <div className="body">
        <span className="paw">&nbsp;</span>
        <span className="paw">&nbsp;</span>
      </div>
    </div>
  </div>
);

export default Scampi;