import { VFC } from "react";
import Head from "next/head";
import { Intro } from "components/molecules";

const IndexPage: VFC = () => (
  <>
    <Head>
      <title>
        I'm Lindsay Foley, A Front End Web Developer Based In London
      </title>
      <meta
        name="description"
        content="A Web Developer with many years of experience, specialising in front end development with a focus on design, UX, HTML, SCSS, Javascript and web optimisation."
      />
    </Head>
    <Intro />
  </>
);

export default IndexPage;
