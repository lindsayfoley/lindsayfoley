import React from "react";
import Anchor from "./Anchor";
import { ICompanyDetails } from "../utils/workExperience";
import "../public/styles/_flip-card.scss";

export interface IJobDetailsCardProps {
  company: ICompanyDetails;
  className?: string;
  handleClick: (id: string) => void;
  summaryIsVisible: boolean;
}

const JobDetailsCard: React.FunctionComponent<IJobDetailsCardProps> = ({ 
  company, className, handleClick, summaryIsVisible 
}) => {

  if (!company) {
    return null;
  }

  const defaultClassName = 'flip-card';
  const classNames = className !== "" && `${className} ${defaultClassName}`;

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
      handleClick(company.id);
    }
  }

  return (
    <article
      id={company.id}
      className={classNames || defaultClassName}
      onClick={() => handleClick(company.id)}
      onKeyDown={handleOnKeyDown}
      aria-controls={company.id}
      role="button" 
      tabIndex={0}
      aria-pressed={summaryIsVisible}
    >
      <div className="wrapper" itemScope itemType="http://schema.org/CreativeWork">
        <div className="heading">
          <h3 itemProp="name">{company.companyName}</h3>
          <span>Details &rsaquo;</span>
        </div>
        <div 
          className="description" 
          itemProp="description" 
          aria-hidden={!summaryIsVisible}
          aria-labelledby={company.id}
        >
          {company.description}
          <hr />
          {company.cta ? (
            <Anchor link={company.link} cta={company.cta} />
          ) : (
            <Anchor link={company.link} cta="Visit Site &rsaquo;" />
          )}
        </div>
      </div>
    </article>
  );
}

export default JobDetailsCard;
