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
      <main>
        <p>I’ve been busy working on my little corner of the internet for quite a while so thanks for stopping by!</p>
        <p>If you've been here before, the site it may look unchanged but I do update it every so often
        utilising new skills that I learn - currently it's a React app written in Typescript,
        on the Next.js framework using SASS.</p>
        <p>I have 9 years of experience working in an Ecommerce environment and have been developing professionally for 8 years now. 
          In that time, I've worked for notable companies such as Oliver Bonas,
          Anya Hindmarch, Selfridges and Disney.
        </p>
        <Nav buttons={[
          { link: "portfolio", cta: "View my work" },
          { link: "/", cta: "back to home" }
        ]} />
      </main>
    </Layout>
  );
}

export default About;