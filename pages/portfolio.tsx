import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import workExperience from "../utils/workExperience";
import JobDetailsCard from "../components/JobDetailsCard";
import Nav from "../components/Nav";
import "../public/styles/_portfolio.scss";

interface IPortfolioPageState {
  visibleJobDetailsCard: string[];
}

class PortfolioPage extends React.PureComponent<IPortfolioPageState> {

  state: IPortfolioPageState = {
    visibleJobDetailsCard: [],
  };

  handleClick = (id: string) => {
    const { visibleJobDetailsCard } = this.state;
    let updatedJobs: string[] = [...visibleJobDetailsCard];

    if (visibleJobDetailsCard.includes(id)) {
      updatedJobs = visibleJobDetailsCard.filter(cardId => cardId !== id);
      this.setState({ visibleJobDetailsCard: updatedJobs });
    } else {
      updatedJobs.push(id)
      this.setState({
        visibleJobDetailsCard: updatedJobs,
      });
    }
  };

  hasVisibleJobSummary = (id: string) => this.state.visibleJobDetailsCard.includes(id);

  render() {
    return (
      <Layout>
        <Head>
          <title>View My Web Development Portfolio and Past Projects</title>
          <meta name="description" content="Lindsay Foley is a web developer in London, have a look at some completed projects here." />
        </Head>
        <header>
          <h1 itemProp="name">
            <a href="/">My Portfolio</a>
          </h1>
        </header>
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
          <Nav buttonArr={[
            { link: "/about", cta: "about me" },
            { link: "/", cta: "back to home" }
          ]} />
        </main>
      </Layout>
    );
  }
}

export default PortfolioPage;