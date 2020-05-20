import React from "react";

export interface ICompanyDetails {
  id: string;
  companyName: string;
  description: any;
  cta?: string;
  link: string;
}

const workExperience: ICompanyDetails[] = [
  {
    id: "travel-blog",
    companyName: "Come Fly With Lindsay",
    description: (
      <>
        <p>My travel blog which I launched in November 2016!</p>
        <p>I designed and coded it using <span itemProp="keywords"> PHP, Markdown, HTML5, CSS3, jQuery and Foundation 6.</span></p>
      </>
    ),
    link: "http://comeflywithlindsay.com",
  },
  {
    id: "disney",
    companyName: "Disney Holidays",
    description: (
      <p>I co-developed this site to make it adaptive/responsive using the <span itemProp="keywords"> Foundation framework and RESS principles </span>, allowing us to dynamically serve content by device type.</p>
    ),
    link: "http://www.disneyholidays.co.uk",
  },
  {
    id: "jia",
    companyName: "Jesus In Action",
    description: (
      <p>This website underwent a complete refresh to modernise it. It is written in <span itemProp="keywords">HTML5, CSS3, jQuery and Foundation 6</span></p>
    ),
    link: "http://jesusinaction.org.uk",
  },
  {
    id: "perfume",
    companyName: "The Perfume Mistress",
    description: (
      <p>This site is built on the Squarespace platform as my client required a site that was transactional. I added bespoke <span itemProp="keywords">CSS and JavaScript</span> to customise the Hayden template.</p>
    ),
    link: "https://www.theperfumemistress.com",
  },
  {
    id: "dashwood",
    companyName: "Hayes Dashwood",
    description: (
      <p>I updated the design and functionality of this website. It was <span itemProp="keywords"> written in HTML5, CSS, jQuery and uses the Google Maps API</span>.</p>
    ),
    link: "http://www.hayesdashwood.org.uk",
  },
  {
    id: "selfridges",
    companyName: "Selfridges",
    description: (
      <p>I worked on the new site launch in 2014, migrating and <span itemProp="keywords"> developing new responsive content as well as new HTML emails</span>.</p>
    ),
    cta: "View past work ›",
    link: "https://web.archive.org/web/20150707135538/http://www.selfridges.com/content/article/paddington",
  },
  {
    id: "hopelands",
    companyName: "Hopelands Cattery",
    description: (
      <p>I designed and developed this site using <span itemProp="keywords"> HTML5, CSS, jQuery, Slick carousel and the Google Maps API</span>.</p>
    ),
    link: "http://hopelandscattery.com",
  },
  {
    id: "whitestuff",
    companyName: "White Stuff",
    description: (
      <p>My first dev role! I created web content and weekly <span itemProp="keywords"> HTML emails using XHTML4, CSS3 and jQuery</span>.</p>
    ),
    cta: "View past work ›",
    link: "http://web.archive.org/web/20140511040437/http://www.whitestuff.com/jobs",
  },
  {
    id: "ppp",
    companyName: "Paw Print Productions",
    description: (
      <p>I co-developed and designed this responsive site many years ago (2011!) using <span itemProp="keywords">HTML5, CSS3 and a bit of jQuery</span>.</p>
    ),
    link: "https://web.archive.org/web/20160115162243/http://paw-print-productions.co.uk",
  },
];

export default workExperience;