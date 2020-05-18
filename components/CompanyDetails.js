import React from "react";
import ExternalLink from "./ExternalLink";
import "../public/styles/_flip-card.scss";

function CompanyDetails({ company, className }) {
  return (
    <section
      id={company.idName}
      className={className}
      onClick={() => props.handleClick(company.idName)}
    >
      <img
        src={"/images/" + company.idName + "-tile.png"}
        alt={company.companyName + " website"}
      />
      <div itemscope itemtype="http://schema.org/CreativeWork">
        <div className="heading">
          <h3 itemprop="name">{company.companyName}</h3>
          <span>Details &rsaquo;</span>
        </div>
        <div className="description" itemprop="description">
          {company.description}
          <hr />
          <ExternalLink link={company.link} cta="Visit Site &rsaquo;" />
        </div>
      </div>
    </section>
  );
}

export default CompanyDetails;
