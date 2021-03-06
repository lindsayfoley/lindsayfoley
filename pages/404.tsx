import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Nav from "../components/Nav";
import Scampi from "../components/css-drawings/Scampi";

const ErrorPage: React.FunctionComponent = () =>
    <Layout>
        <Head>
            <title>Uh-oh that page doesn't exist</title>
        </Head>
        <header>
            <h1 itemProp="name">
                <a href="/">Soz Try Again</a>
            </h1>
        </header>
        <main>
            <p>Oh no, that page you requested doesn't exist.</p>
            <p>On the plus side, here's a nice illustration of my cat Scampi that I've been trying to incorporate into this site.</p>
            <Scampi />
            <Nav buttonArr={[
                { link: "/about", cta: "about me" },
                { link: "/portfolio", cta: "View my work" }
            ]} />
        </main>
    </Layout>

export default ErrorPage;