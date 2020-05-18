import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import "../public/styles/_home.scss";

function Home() {
  return (
    <Layout>
      <Head>
        <title>
          I'm Lindsay Foley, A Front End Web Developer Based In London
        </title>
        <meta
          name="keywords"
          content="freelancer, freelance, web, developer, development, London, XHTML, HTML, HTML 5, CSS, jQuery, JavaScript, web design, web development, web site development, web site design, web design development, interactive, london web design, london ecommerce, london e-commerce, london web development, uk, web site, web sites, Lindsay Foley"
        />
        <meta
          name="description"
          content="I'm a Web Developer with many years of  experience, specialising in the front end with a focus on design, UX, HTML, CSS, Javascript and web optimisation."
        />
      </Head>
      <section id="home">
        <header itemscope itemtype="http://schema.org/Person">
          <h1 itemprop="name">Lindsay Foley</h1>
          <h2 itemprop="description">
            <span itemprop="jobTitle">Web Developer</span> based in{" "}
            <span itemprop="workLocation">London</span>
          </h2>
        </header>
        <main id="homepage">
          <img
            src="/images/hp_hero.png"
            alt="A neat and tidy desk housing all the essentials including a cat mug full of english breakfast tea, biscuits and an iMac"
          />
          <nav>
            <Link href="portfolio">
              <a>
                <button>View my work</button>
              </a>
            </Link>
            <Link itemprop="url" href="about">
              <a>
                <button>About me</button>
              </a>
            </Link>
          </nav>
        </main>
      </section>
    </Layout>
  );
}

export default Home;
