import React from "react";
import AnchorExternal from "./AnchorExternal";
import { ICompanyDetails } from "./workExperience";
import "../public/styles/_flip-card.scss";

interface IJobDetailsCardProps {
  company: ICompanyDetails;
  className: string;
  handleClick: (id: string) => void;
}

const JobDetailsCard: React.FunctionComponent<IJobDetailsCardProps> = ({ company, className, handleClick }) => {
  const defaultClassName = 'flip-card';
  const classNames = className !== "" && (`${className} ${defaultClassName}`);

  return (
    <article
      id={company.id}
      className={classNames || defaultClassName}
      onClick={() => handleClick(company.id)}
    >
      <img
        src={"/images/" + company.id + "-tile.png"}
        alt={company.companyName + " website"}
      />
      <div itemScope itemType="http://schema.org/CreativeWork">
        <div className="heading">
          <h3 itemProp="name">{company.companyName}</h3>
          <span>Details &rsaquo;</span>
        </div>
        <div className="description" itemProp="description">
          {company.description}
          <hr />
          {company.cta ? (
            <AnchorExternal link={company.link} cta={company.cta} />
          ) : (
            <AnchorExternal link={company.link} cta="Visit Site &rsaquo;" />
          )}
        </div>
      </div>
    </article>
  );
}

export default JobDetailsCard;
