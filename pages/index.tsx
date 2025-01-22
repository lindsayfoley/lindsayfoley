import Head from "next/head";
import { Intro } from "components/molecules";

const IndexPage = () => (
  <>
    <Head>
      <title>
        Lindsay Foley - Freelance Front-End Developer | React Expert
      </title>
      <meta
        name="description"
        content="Freelance front-end developer in London, specialising in React, TypeScript, and e-commerce. I build interactive, user-friendly, and performance-focused websites."
      />
    </Head>
    <Intro />
  </>
);

export default IndexPage;
