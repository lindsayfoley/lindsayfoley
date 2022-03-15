import React from "react";
import Head from "next/head";
import { Layout } from "components/templates";
import { AboutMe } from "components/organisms";

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <Head>
      <title>About Lindsay Foley, A Web Developer Based In London</title>
      <meta
        name="description"
        content="A Front End Web Developer from London with years of development experience. Find out more about my skills in HTML, CSS, JavaScript, UX and Web Optimisation."
      />
    </Head>
    <AboutMe />
  </Layout>
);

export default AboutPage;
