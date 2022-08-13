// import Link from "next/link";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import styles from "./styles.module.css";

const TEXTS = ["Developers", "Analysts", "Managers"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id={"#"} className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={`max-w-6xl ${styles.innerContainer}`}>
          <div className={styles.rightContainer}>
            <div className={`${styles.noWrap} ${styles.heading}`}>
              {"Cloud native log storage &"}
            </div>
            <div className={styles.heading}>
              {"management for"}
            </div>
            <h1 className={styles.animatedText}>
              <TextTransition springConfig={presets.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <div className={styles.heroImageMob}>
              <img src={"img/Group 331.svg"} />
            </div>
            <div className={styles.buttonsContainer}>
              <div>
                <a
                  target="_blank"
                  href={"https://launchpass.com/parseable"}
                  className={styles.joinButton}
                >
                  <img width="20px" src="img/slack-new-logo.svg" />
                  <span className={styles.joinButtonText}>
                    Join our community
                  </span>
                </a>
              </div>
              <div>
                <a
                  href={"/docs/intro"}
                  target="_blank"
                  className={styles.docsButton}
                >
                  <img width="20px" src="img/Icon awesome-book-open.svg" />
                  <span className={styles.joinButtonText}>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={"img/Group 331.svg"}
          className={`h-110 max-w-1/2  ${styles.heroImage}`}
        />
      </div>

      {/* Down Section */}
      <div className={`custom-shadow ${styles.downSectionContainer}`}>
        <div className={styles.downGridContainer}>
          <div className={styles.itemContainer}>
            <img
              height="56px"
              width="56px"
              src={"img/Icon material-timer.svg"}
            />
            <div className={styles.textWeb}>
              Deploy in seconds
            </div>
            <div className={styles.textMob}>
              Deploy in seconds
            </div>
          </div>
          <div className={styles.itemContainer}>
            <img
              height="56px"
              width="56px"
              src={"img/Icon material-donut-large.svg"}
            />
            <div className={styles.textWeb}>
              Fast log ingestion
            </div>
            <div className={styles.textMob}>
              Fast logs ingestion
            </div>
          </div>
          <div className={styles.itemContainer}>
            <img
              height="56px"
              width="56px"
              src={"img/Icon material-multiline-chart.svg"}
            />
            <div className={styles.textWeb}>
              Access and analyse logs
            </div>
            <div className={styles.textMob}>
              Access and analyse logs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
