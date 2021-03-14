import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Nav from "../components/Nav";
import Coding from "../components/css-drawings/Coding";
import "../public/styles/_about.scss";

const AboutPage: React.FunctionComponent = () => {
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
            <Coding />
            <p>I have many years of experience working in Ecom and have been developing professionally for 10+ years.</p>
            <p>In that time, I've been very lucky to work for some notable companies including Selfridges, Disney, Charlotte Tilbury and most recently The Times. I've also worked on many projects from CRO initiatives to improving web performance, to building component libraries.</p>
          </div>
          <div>
            <dl>
              <dt>Web Development Skills</dt>
              <dd>HTML, CSS, SCSS, Styled JSX &amp; Styled Components</dd>
              <dd>Typescript, JavaScript, jQuery</dd>
              <dd>React and Redux</dd>
              <dd>GraphQL and REST APIs</dd>
              <dd>Next.js &amp; CRA frameworks</dd>
              <dd>Accessibility</dd>
              <dd>Jest, Enzyme, Mocha, React Testing Library</dd>
              <dd>A bit of PHP, VB &amp; SQL</dd>
              <dd>Foundation &amp; Bootstrap</dd>
              <dd>A/B and MVT testing</dd>
              <dd>Version control via Git &amp; SVN</dd>
              <dd>Building responsive HTML emails</dd>
              <dd>Tooling; Webpack, NPM, Babel, Gulp, Storybook</dd>
              <dd>Vast CMS platforms; Contentful, Drupal, Wordpress, Squarespace</dd>
              <dd>Graphic design, UI/UX design principles &amp; usability testing</dd>
              <dd>Qualified Digital Marketer</dd>
              <dd>SEO best practises</dd>
            </dl>
          </div>
        </section>
        <Nav buttonArr={[
          { link: "/portfolio", cta: "View my work" },
          { link: "/", cta: "back to home" }
        ]} />
      </main>
    </Layout>
  );
}

export default AboutPage;