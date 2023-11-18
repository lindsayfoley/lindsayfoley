import Head from "next/head";
import { Portfolio } from "components/organisms";

const PortfolioPage = () => (
  <>
    <Head>
      <title>Lindsay Foley - Web Development Portfolio</title>
      <meta
        name="description"
        content="Discover the diverse web development portfolio of Lindsay Foley, a seasoned web developer based in London. Explore a showcase of completed projects and a demonstration of expertise."
      />
    </Head>
    <Portfolio />
  </>
);

export default PortfolioPage;
