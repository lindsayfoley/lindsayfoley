import React, { FC } from "react";
import Head from "next/head";
import { AboutMe } from "components/organisms";

const AboutPage: FC = () => (
  <>
    <Head>
      <title>About Lindsay Foley - Web Developer in London</title>
      <meta
        name="description"
        content="Experienced Front End Web Developer from London. Discover my expertise in HTML, CSS, JavaScript, UX and Web Optimisation."
      />
    </Head>
    <AboutMe />
  </>
);

export default AboutPage;
