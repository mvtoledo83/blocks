import React from "react";
import "./styles.scss";
import "../assets/fonts/fonts.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PremiumBanner from "../components/PremiumBanner";
import PremiumBannerMobile from "../components/PremiumBannerMobile";

const Index = () => {
  return (
    <>
      <PremiumBanner />
      <Header />
      <Main />
      <Footer />
      <PremiumBannerMobile />
    </>
  );
};

export default Index;
