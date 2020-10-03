import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Nav from "../components/Nav";
import "../public/styles/_home.scss";

const IndexPage: React.FunctionComponent = () =>
  <Layout>
    <Head>
      <title>I'm Lindsay Foley, A Front End Web Developer Based In London</title>
      <meta name="description" content="A Web Developer with many years of experience, specialising in front end development with a focus on design, UX, HTML, SCSS, Javascript and web optimisation." />
    </Head>
    <section id="home">
      <header>
        <h1 itemProp="name">
          <a href="/">Lindsay Foley</a>
        </h1>
      </header>
      <h2 itemProp="description">
        <span itemProp="jobTitle">Web Developer</span> based in <span itemProp="workLocation">London</span>
      </h2>
      <img
        src="/images/hp_hero.png"
        alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
      />
      <Nav buttonArr={[
        { link: "/portfolio", cta: "View my work" },
        { link: "/about", cta: "about me" }
      ]} />
    </section>
  </Layout>

export default IndexPage;