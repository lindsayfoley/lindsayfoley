import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import workExperience from "../utils/workExperience";
import JobDetailsCard from "../components/JobDetailsCard";
import Nav from "../components/Nav";
import "../public/styles/_portfolio.scss";

interface IPortfolioState {
  cardsWithJobDetailsVisible: string[];
}

class Portfolio extends React.PureComponent<IPortfolioState> {

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

  hasVisibleJobSummary = (id: string) => this.state.cardsWithJobDetailsVisible.includes(id);

  render() {
    return (
      <Layout>
        <Head>
          <title>View My Web Development Portfolio and Past Projects</title>
          <meta name="description" content="Lindsay Foley is a web developer in London, have a look at some completed projects here." />
        </Head>
        <main>
          <section className="companies">
            {workExperience.map(job => (
              <JobDetailsCard
                key={job.id}
                company={job}
                handleClick={this.handleClick}
                className={this.hasVisibleJobSummary(job.id) ? 'show-details' : ''}
                summaryIsVisible={this.hasVisibleJobSummary(job.id)}
              />
            ))}
          </section>
          <Nav buttons={[
            { link: "about", cta: "about me" },
            { link: "/", cta: "back to home" }
          ]} />
        </main>
      </Layout>
    );
  }
}

export default Portfolio;