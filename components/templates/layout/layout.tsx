import { ReactNode, VFC } from "react";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "components/organisms";

const Layout: VFC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="freelancer, freelance Web Developer, Frontend Developer, Frontend Engineer, web development, London, React, Typescript, Javacript, SCSS, web design and development, web site development, web site design, web design development, interactive, london web design, London ecommerce, London web development, website, websites, Lindsay Foley Web Developer"
      />
    </Head>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-58028323-2"
    />
    <Script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-58028323-2');`,
      }}
    />
    {children}
    <Footer />
  </>
);

export default Layout;
