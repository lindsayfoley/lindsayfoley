import { useState, VFC } from "react";
import { Anchor } from "components/atoms";
import { CompanyDetails } from "./types";
import cardStyles from "./jobDetailsCard.module.scss";
import { useJobDescriptionToggler } from "hooks";
import styles from "components/organisms/portfolio/portfolio.module.scss";

const JobDetailsCard: VFC<{ company: CompanyDetails }> = ({ company }) => {
  const [selectedCardCompanyId] = useState<string>("");

  const { hasVisibleDescription, handleCardInteraction, handleOnKeyDown } =
    useJobDescriptionToggler(selectedCardCompanyId);

  const companyId = company.id;
  const articleClassnames = `${styles[companyId]} ${cardStyles["flip-card"]} ${styles["flip-card"]}`;

  return (
    <article
      className={
        hasVisibleDescription(companyId)
          ? `${styles["show-details"]} ${cardStyles["show-details"]} ${articleClassnames}`
          : articleClassnames
      }
      onClick={() => handleCardInteraction(companyId)}
      onKeyDown={handleOnKeyDown}
      aria-controls={companyId}
      role="button"
      tabIndex={0}
    >
      <div
        className={`${cardStyles.wrapper} ${styles.wrapper}`}
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <div className={cardStyles.heading}>
          <h3 itemProp="name">{company.companyName}</h3>
          <span>Details &rsaquo;</span>
        </div>
        <div
          className={`${styles.description} ${cardStyles.description}`}
          itemProp="description"
          aria-labelledby={companyId}
        >
          {company.description}
          <hr />
          <Anchor link={company.link} cta={company.cta || "Visit Site ›"} />
        </div>
      </div>
    </article>
  );
};

export default JobDetailsCard;
