import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/Header";
import Header from "../components/Header";
import companies from "../components/companies";
import CompanyDetails from "../components/CompanyDetails";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "../public/styles/_portfolio.scss";

class Portfolio extends Component {
  handleClick = (id) => {
    this.setState((prevState) => {
      const updatedCompaniesData = prevState.companiesData.map((place) => {
        if (id === place.idName) {
          place.showJobSummary = !place.showJobSummary;
        }
        return place;
      });

      return {
        companiesData: updatedCompaniesData,
      };
    });
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>View My Web Development Portfolio and Past Projects</title>
          <meta
            name="keywords"
            content="freelancer, freelance, web, developer, development, London, XHTML, HTML, HTML 5, CSS, jQuery, JavaScript, web design, web development, web site development, web site design, web design development, interactive, london web design, london ecommerce, london e-commerce, london web development, uk, web site, web sites, Lindsay Foley"
          />
          <meta
            name="description"
            content="Lindsay Foley is a web developer in London, have a look at some completed projects here."
          />
        </Head>
        <Header />
        <main>
          <section id="wrapper" className="companies">
            {companies.map(place => (
              <CompanyDetails
                key={place.companyName}
                company={place}
                handleClick={this.handleClick}
                classes={
                  place.showJobSummary ? "flip-card show-details" : "flip-card"
                }
              />
            ))}
          </section>
          <Button link="about" cta="about me" />
          <Button link="/" cta="back to home" />
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default Portfolio;
