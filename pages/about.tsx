import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import AnchorButton from "../components/AnchorButton";
import "../public/styles/_about.scss";

const About: React.FunctionComponent = () => {

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
      <div>
        <p>
          I’ve been busy working on my little corner of the internet for quite a
          while so thanks for stopping by. If you've been here before the site
          presentation may look unchanged, however I update it every so often
          utilising new skills that I learn - it's currently written in HTML,
          CSS (SASS) and JS (ES6 standards) and my good mate Gulp is now helping
          out with all the manual tasks!
        </p>
        <p>
          I have 9 years of experience working in an Ecommerce environment and
          have been developing professionally for 8 years now.
        </p>
        <p>
          In that time, I've worked for notable companies such as Oliver Bonas,
          Anya Hindmarch, Selfridges and Disney. In 2019 I joined Charlotte
          Tilbury as a Frontend Engineer working on their React app.
        </p>
        <nav>
          <AnchorButton link="mailto:me@lindsayfoley.co.uk" cta="contact" external={true} />
          <AnchorButton link="" cta="skills" />
        </nav>
      </div>
    </Layout>
  );
}

export default About;