import Head from "next/head";
import { Portfolio } from "components/organisms";

const PortfolioPage = () => (
  <>
    <Head>
      <title>Lindsay Foley - Freelance Web Development Portfolio</title>
      <meta
        name="description"
        content="Explore the portfolio of Lindsay Foley, a freelance web developer in London. Discover projects that showcase expertise in React, JavaScript, web design and more"
      />
    </Head>
    <Portfolio />
  </>
);

export default PortfolioPage;
