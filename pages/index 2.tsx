import { VFC } from "react";
import Head from "next/head";
import { Home, Layout, Nav } from "components";

const IndexPage: VFC = () => (
  <Layout>
    <Head>
      <title>
        I'm Lindsay Foley, A Front End Web Developer Based In London
      </title>
      <meta
        name="description"
        content="A Web Developer with many years of experience, specialising in front end development with a focus on design, UX, HTML, SCSS, Javascript and web optimisation."
      />
      <Home />
    </Head>
  </Layout>
);

export default IndexPage;
