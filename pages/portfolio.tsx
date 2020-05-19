import React, { Component } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import workExperience from "../components/workExperience";
import JobDetailsCard from "../components/JobDetailsCard";
import AnchorButton from "../components/AnchorButton";
import "../public/styles/_portfolio.scss";

interface IPortfolioState {
  cardsWithJobDetailsVisible: string[];
}

class Portfolio extends React.Component<IPortfolioState> {

  state: IPortfolioState = {
    cardsWithJobDetailsVisible: [],
  };

  handleClick = (id: string) => {
    const { cardsWithJobDetailsVisible } = this.state;
    let updatedJobs: string[] = [...cardsWithJobDetailsVisible];

    if (cardsWithJobDetailsVisible.includes(id)) {
      updatedJobs = cardsWithJobDetailsVisible.filter(cardId => cardId !== id);
      this.setState({ cardsWithJobDetailsVisible: updatedJobs });
    } else {
      updatedJobs.push(id)
      this.setState({
        cardsWithJobDetailsVisible: updatedJobs,
      });
    }
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
        <main>
          <section id="wrapper" className="companies">
            {workExperience.map((job) => (
              <JobDetailsCard
                key={job.id}
                company={job}
                handleClick={this.handleClick}
                className={this.state.cardsWithJobDetailsVisible.includes(job.id) ? 'show-details' : ''}
              />
            ))}
          </section>
          <nav>
            <AnchorButton link="about" cta="about me" />
            <AnchorButton link="/" cta="back to home" />
          </nav>
        </main>
      </Layout>
    );
  }
}

export default Portfolio;