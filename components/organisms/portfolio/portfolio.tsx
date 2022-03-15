import { VFC } from "react";
import { Nav } from "components/atoms";
import { JobDetailsCard } from "components/molecules";
import { Companies } from "components/molecules/jobDetailsCard/company-history";
import { CompanyDetails } from "components/molecules/jobDetailsCard/types";
import styles from "./portfolio.module.scss";

const Portfolio: VFC = () => (
  <>
    <header>
      <h1 itemProp="name">
        <a href="/">My Portfolio</a>
      </h1>
    </header>
    <main>
      <section className={styles.companies}>
        {Companies.map((company: CompanyDetails) => {
          return company && company.id ? (
            <JobDetailsCard key={company.id} company={company} />
          ) : null;
        })}
      </section>
      <Nav
        links={[
          { link: "/about", cta: "about me" },
          { link: "/", cta: "back to home" },
        ]}
      />
    </main>
  </>
);

export default Portfolio;
