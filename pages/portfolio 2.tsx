import React from "react";
import { Layout, Nav } from "components";
import Head from "next/head";
import Portfolio from "components/Portfolio/Portfolio";

interface IPortfolioPageState {
  visibleJobDetailsCard: string[];
}

class PortfolioPage extends React.PureComponent<IPortfolioPageState> {
  state: IPortfolioPageState = {
    visibleJobDetailsCard: [],
  };

  render() {
    return (
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
  }
}

export default PortfolioPage;
