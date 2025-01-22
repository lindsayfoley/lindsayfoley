import { Anchor } from "components/atoms";
import { CompanyDetails } from "./types";
import cardStyles from "./jobDetailsCard.module.scss";
import { useJobDescriptionToggler } from "hooks";
import styles from "components/organisms/portfolio/portfolio.module.scss";

const JobDetailsCard = ({ company }: { company: CompanyDetails }) => {
  const { hasVisibleDescription, handleCardInteraction, handleOnKeyDown } =
    useJobDescriptionToggler();

  const { id, companyName, description, link, cta } = company;
  const articleClassnames = `${styles[id]} ${cardStyles["flip-card"]}`;
  const isVisible = hasVisibleDescription(id);

  return (
    <article
      className={
        isVisible
          ? `${cardStyles["show-details"]} ${articleClassnames}`
          : articleClassnames
      }
      onClick={() => handleCardInteraction(id)}
      onKeyDown={(event) => handleOnKeyDown(event, id)}
      id={id}
      aria-expanded={isVisible}
      role="button"
      tabIndex={0}
    >
      <div
        className={cardStyles.wrapper}
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        {!isVisible && (
          <div
            className={cardStyles.heading}
            aria-label={`View the ${companyName} site`}
            aria-hidden={isVisible}
          >
            <h3 itemProp="name">{companyName}</h3>
            <span>Details &rsaquo;</span>
          </div>
        )}
        <div
          aria-hidden={!isVisible}
          className={cardStyles.description}
          aria-labelledby={id}
        >
          {description}
          <hr />
          <Anchor link={link} cta={cta || "Visit Site ›"} />
        </div>
      </div>
    </article>
  );
};

export default JobDetailsCard;
