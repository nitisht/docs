// import Link from "next/link";
import React from "react";
import styles from './styles.module.css'

const Community = () => {
  return (
    <div id="community" className={`max-w-6xl ${styles.container}`}>
      <div className={styles.gridContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.leftInnerContainer}>
            <div className={styles.heading}>Community</div>
            <div className={styles.description}>
              Parseable is built on the principles of open and free software.
              Join our global community of contributors, developers, and
              enthusiasts on Slack and GitHub
            </div>
            <div className={styles.buttonsContainer}>
              <div>
                <a
                  href={"https://launchpass.com/parseable"}
                  target="_blank"
                  className={styles.joinButton}
                >
                  <img width="20px" src="img/slack-new-logo.svg" />
                  <span className={styles.joinButtonText}>Join our community</span>
                </a>
              </div>
              <div>
                <a
                  href={"https://github.com/parseablehq/parseable/stargazers"}
                  target="_blank"
                  className={styles.gitButton}
                >
                  <img width="20px" src="img/Icon awesome-github-alt.svg" />
                  <span className={styles.joinButtonText}>Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img className="w-full" src={"img/Component 18 – 1.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Community;
