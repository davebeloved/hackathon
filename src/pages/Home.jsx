import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GetlinkedIntro from "../components/GetlinkedIntro";
import Guide from "../components/Guide";
import Criteria from "../components/Criteria";
import Faq from "../components/Faq";
import Timeline from "../components/Timeline";
import Pricing from "../components/Pricing";
import Partners from "../components/Partners";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <GetlinkedIntro />
      <Guide />
      <Criteria />
      <Faq />
      <Timeline />
      <Pricing />
      <Partners />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Home;
