import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Footer from "./components/Footer";
import "../public/styles/_about.scss";

function About() {
  return (
    <Layout>
      <Head>
        <title>About Lindsay Foley, A Web Developer Based In London</title>
        <meta
          name="keywords"
          content="freelancer, freelance, web, developer, development, London, XHTML, HTML, HTML 5, CSS, jQuery, JavaScript, web design, web development, web site development, web site design, web design development, interactive, london web design, london ecommerce, london e-commerce, london web development, uk, web site, web sites, Lindsay Foley"
        />
        <meta
          name="description"
          content="A Front End Web Developer from London with years of development experience. Find out more about my skills in HTML, CSS, JavaScript, UX and Web Optimisation."
        />
      </Head>
      <Footer />
    </Layout>
  );
}

export default About;