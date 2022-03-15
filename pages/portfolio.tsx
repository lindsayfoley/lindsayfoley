import { VFC } from "react";
import Head from "next/head";
import { Layout } from "components/templates";
import { Portfolio } from "components/organisms";

const PortfolioPage: VFC = () => (
  <Layout>
    <Head>
      <title>View My Web Development Portfolio and Past Projects</title>
      <meta
        name="description"
        content="Lindsay Foley is a web developer in London, have a look at some completed projects here."
      />
    </Head>
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
