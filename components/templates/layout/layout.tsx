import { ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";
import { Footer } from "components/organisms";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Head>
      <meta
        name="keywords"
        content="freelancer, freelance web developer, frontend developer, frontend engineer, web development, London, React, TypeScript, JavaScript, SCSS, web design, interactive websites, ecommerce, Lindsay Foley"
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
