import React from "react";
import { About, Layout, Nav } from "components";
import Head from "next/head";

const AboutPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>About Lindsay Foley, A Web Developer Based In London</title>
        <meta
          name="description"
          content="A Front End Web Developer from London with years of development experience. Find out more about my skills in HTML, CSS, JavaScript, UX and Web Optimisation."
        />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;
