import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Nav from "../components/Nav";
import "../public/styles/_about.scss";

const About: React.FunctionComponent = () => {

  return (
    <Layout>
      <Head>
        <title>About Lindsay Foley, A Web Developer Based In London</title>
        <meta name="description" content="A Front End Web Developer from London with years of development experience. Find out more about my skills in HTML, CSS, JavaScript, UX and Web Optimisation." />
      </Head>
      <header>
        <h1 itemProp="name">
          <a href="/">All About Me</a>
        </h1>
      </header>
      <main>
        <p>I’ve been busy working on my little corner of the internet for quite a while so thank you for stopping by!</p>
        <p>If you've been here before the site may look unchanged but I do update it every so often
        utilising new skills that I learn. Currently it's a React app written in Typescript,
        on the Next.js framework and styled using SASS.</p>
        <section id="skills">
          <div>
            <h3>My experience</h3>
            <img src="/images/coding.png" alt="Coding illustration" />
            <p>I have 9 years of experience working in an Ecommerce environment and have been developing professionally for about 8 years now.</p>
            <p>In that time, I've been fortunate to work for some notable companies including Oliver Bonas, Anya Hindmarch, Selfridges and Disney and most recently Charlotte Tilbury, where I joined as a Frontend Engineer working on their React site.</p>
          </div>
          <div>
            <h3>Web Development Skills</h3>
            <dl>
              <dd>HTML</dd>
              <dd>CSS, SCSS, BEM methodology</dd>
              <dd>JavaScript ES6 standards</dd>
              <dd>Typescript</dd>
              <dd>React</dd>
              <dd>Next.js/CRA frameworks</dd>
              <dd>A bit of PHP &amp; VB</dd>
              <dd>jQuery</dd>
              <dd>SQL</dd>
              <dd>Schema/Microdata</dd>
              <dd>Git/SVN</dd>
              <dd>A/B and MVT testing</dd>
              <dd>Usability testing</dd>
              <dd>Task automation e.g. Gulp</dd>
              <dd>Foundation/Bootstrap</dd>
              <dd>FE optimisation techniques</dd>
              <dd>Load testing experience</dd>
              <dd>Responsive HTML emails</dd>
              <dd>Graphic and UI design</dd>
              <dd>A11y best practises</dd>
              <dd>Qualified Digital Marketer</dd>
              <dd>SEO experience</dd>
              <dd>Agile methodologies</dd>
            </dl>
          </div>
        </section>
        <Nav buttonArr={[
          { link: "portfolio", cta: "View my work" },
          { link: "/", cta: "back to home" }
        ]} />
      </main>
    </Layout>
  );
}

export default About;