import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Intro from "../components/Intro";
import AnchorButton from "../components/AnchorButton";
import "../public/styles/_home.scss";

const Home: React.FunctionComponent = () => {

  return (
    <Layout>
      <Head>
        <title>I'm Lindsay Foley, A Front End Web Developer Based In London</title>
        <meta
          name="keywords"
          content="freelancer, freelance, web, developer, development, London, XHTML, HTML, HTML 5, CSS, jQuery, JavaScript, web design, web development, web site development, web site design, web design development, interactive, london web design, london ecommerce, london e-commerce, london web development, uk, web site, web sites, Lindsay Foley"
        />
        <meta
          name="description"
          content="I'm a Web Developer with many years of  experience, specialising in the front end with a focus on design, UX, HTML, CSS, Javascript and web optimisation."
        />
      </Head>
      <section>
        <Intro />
        <nav>
          <AnchorButton link="portfolio" cta="View my work" />
          <AnchorButton link="about" cta="About me" />
        </nav>
      </section>
    </Layout>
  );
}

export default Home;