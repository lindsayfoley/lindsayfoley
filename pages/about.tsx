import React, { FC } from "react";
import Head from "next/head";
import { AboutMe } from "components/organisms";

const AboutPage: FC = () => (
  <>
    <Head>
      <title>About Lindsay Foley - Freelance Front-End Developer</title>
      <meta
        name="description"
        content="Freelance front-end developer in London, specialising in HTML, CSS, JavaScript, UX, and web optimisation. Learn more about my expertise and experience"
      />
    </Head>
    <AboutMe />
  </>
);

export default AboutPage;
