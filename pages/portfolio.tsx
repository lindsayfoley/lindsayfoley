import { VFC } from "react";
import Head from "next/head";
import { Portfolio } from "components/organisms";

const PortfolioPage: VFC = () => (
  <>
    <Head>
      <title>View My Web Development Portfolio and Past Projects</title>
      <meta
        name="description"
        content="Lindsay Foley is a web developer in London, have a look at some completed projects here."
      />
    </Head>
    <Portfolio />
  </>
);

export default PortfolioPage;
