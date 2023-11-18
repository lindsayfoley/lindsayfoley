import Head from "next/head";
import { Intro } from "components/molecules";

const IndexPage = () => (
  <>
    <Head>
      <title>Lindsay Foley - Front End Web Developer in London</title>
      <meta
        name="description"
        content="Hi there! I'm Lindsay Foley, an experienced Web Developer specialising in front-end development. Explore my skills in design, UX, HTML, SCSS, JavaScript, and web optimisation."
      />
    </Head>
    <Intro />
  </>
);

export default IndexPage;
