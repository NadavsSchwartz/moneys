import React, { useState } from "react";
import Footer from "../components/Footer";
import InfoSection from "../components/Info";
import {
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "../components/Info/Data";
import MainSection from "../components/Main/index";
import Navbar from "../components/Navbar";
import Discover from "../components/Discover";

import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />

      <Discover />
      <Footer />
    </>
  );
};

export default Home;
