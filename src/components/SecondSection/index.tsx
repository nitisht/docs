import Footer from "@theme/Footer";
import React from "react";
import Features from "../Features";
import VideoSection from "../VideoSection";
import UpcomingSection from '../UpcomingSection';
import Community from '../Community'
import styles from "./styles.module.css";

const SecondSection = () => {
  return (
    <div>
      <div className={`h-600 bg-blue-bg ${styles.container}`}>
        <VideoSection />
        <Features />
        <UpcomingSection />
        <Community />
        <Footer />
      </div>
    </div>
  );
};

export default SecondSection;
