import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout1 from "../theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Hero from "../components/Hero";
import SecondSection from "../components/SecondSection";
import Navbar from "@theme/Navbar";
import { useLocation } from "@docusaurus/router";
import Footer from "@theme/Footer";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  // console.log(location.pathname);

  return (
    <>
      <Layout1
        title={"Parseable"}
        description="Description will go into a meta tag in <head />"
      >
        <Hero />
        {location.pathname}
        <main>
          <SecondSection />
        </main>

        {/* {location.pathname !== "/" ||
          (location.pathname !== "/#" && <Footer />)} */}
      </Layout1>
    </>
  );
}
