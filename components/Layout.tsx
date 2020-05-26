import React from 'react';
import Head from "next/head";
import MetaKeywords from './MetaKeywords';
import Footer from "./Footer";
import "../public/styles/_layout.scss";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <MetaKeywords />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58028323-2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-58028323-2');`
          }} />
        <link rel="stylesheet" href="https://use.typekit.net/ohe1rsj.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
      </Head>
      {children}
      <Footer />
    </>
  );
}

export default Layout;