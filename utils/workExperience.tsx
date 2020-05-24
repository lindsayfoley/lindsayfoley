import React from "react";

export interface ICompanyDetails {
  id: string;
  companyName: string;
  description: JSX.Element;
  cta?: string;
  link: string;
}

const workExperience: ICompanyDetails[] = [
  {
    id: "travel-blog",
    companyName: "Come Fly With Lindsay",
    description: (
      <>
        <p>My travel blog which I launched in November 2016.</p>
        <p>I designed and coded it using <span itemProp="keywords"> PHP, Markdown, HTML, CSS, jQuery &amp; Foundation.</span></p>
      </>
    ),
    link: "http://comeflywithlindsay.com",
  },
  {
    id: "disney",
    companyName: "Disney Holidays",
    description: (
      <p>I co-developed this site making it adaptive &amp; responsive using <span itemProp="keywords"> Foundation &amp; RESS principles</span> resulting in a better UX.</p>
    ),
    link: "http://www.disneyholidays.co.uk",
  },
  {
    id: "jia",
    companyName: "Jesus In Action",
    description: (
      <>
        <p>This website underwent a complete refresh in order to modernise it.</p>
        <p>It's written in <span itemProp="keywords">HTML, CSS, jQuery &amp; Foundation</span>.</p>
      </>
    ),
    link: "http://jesusinaction.org.uk",
  },
  {
    id: "perfume",
    companyName: "The Perfume Mistress",
    description: (
      <p>This one is on Squarespace as my client needed a transactional site, it has bespoke <span itemProp="keywords">CSS &amp; JavaScript</span> to customise the Hayden template.</p>
    ),
    link: "https://www.theperfumemistress.com",
  },
  {
    id: "dashwood",
    companyName: "Hayes Dashwood",
    description: (
      <p>I redesigned and coded this website using <span itemProp="keywords"> HTML, CSS, jQuery &amp; the Google Maps API</span>.</p>
    ),
    link: "http://www.hayesdashwood.org.uk",
  },
  {
    id: "selfridges",
    companyName: "Selfridges",
    description: (
      <>
        <p>I worked on Selfridges' 2014 site redesign.</p>
        <p>I migrated and <span itemProp="keywords"> developed new responsive content &amp; created HTML emails</span>.</p>
      </>
    ),
    cta: "View past work ›",
    link: "https://web.archive.org/web/20150707135538/http://www.selfridges.com/content/article/paddington",
  },
  {
    id: "hopelands",
    companyName: "Hopelands Cattery",
    description: (
      <p>I designed and developed this site using <span itemProp="keywords"> HTML, CSS, jQuery, Slick Slider &amp; the Google Maps API</span>.</p>
    ),
    link: "https://web.archive.org/web/20190625163932/http://hopelandscattery.com/",
  },
  {
    id: "whitestuff",
    companyName: "White Stuff",
    description: (
      <p>My first ever dev role! I created web content and weekly <span itemProp="keywords"> HTML emails using XHTML4, CSS &amp; jQuery</span>.</p>
    ),
    cta: "View past work ›",
    link: "http://web.archive.org/web/20140511040437/http://www.whitestuff.com/jobs",
  },
  {
    id: "ppp",
    companyName: "Paw Print Productions",
    description: (
      <p>I co-developed and designed this responsive site many years ago (2011) using <span itemProp="keywords">HTML, CSS &amp; a bit of jQuery</span>.</p>
    ),
    link: "https://web.archive.org/web/20160115162243/http://paw-print-productions.co.uk",
  },
];

export default workExperience;