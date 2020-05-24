import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import "../public/styles/_home.scss";

const Home: React.FunctionComponent = () =>
  <Layout>
    <Head>
      <title>I'm Lindsay Foley, A Front End Web Developer Based In London</title>
      <meta name="description" content="A Web Developer with many years of experience, specialising in front end development with a focus on design, UX, HTML, SCSS, Javascript and web optimisation." />
    </Head>
    <header>
      <h1 itemProp="name">
        <a href="/">Lindsay Foley</a>
      </h1>
    </header>
    <section id="home">
      <Intro />
      <Nav buttonArr={[
        { link: "portfolio", cta: "View my work" },
        { link: "about", cta: "about me" }
      ]} />
    </section>
  </Layout>

export default Home;