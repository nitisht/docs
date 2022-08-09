import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '../theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Hero from '../components/Hero';
import SecondSection from '../components/SecondSection';
import Navbar from '@theme/Navbar';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={'Parseable'}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      {/* <Navbar /> */}
      <Hero />
      <main>
      <SecondSection />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
