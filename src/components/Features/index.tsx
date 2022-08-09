import React from "react";
import styles from "./styles.module.css";

const Features = () => {
  return (
    <div id="features" className={`max-w-6xl ${styles.featureContainer}`}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>Features</div>
        <div className={styles.subHeading}>
          Parseable is a high performance, cloud native, developer friendly
          platform for log storage and management
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Fast Log Ingestion</div>
          <div className={styles.cardDescription}>
            Simple and high performance data ingestion with SDK less REST API
          </div>
          <img
            src={"img/Icon material-donut-large.svg"}
            className={`opacity-10 ${styles.cardImage}`}
          />
        </div>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Cloud Native Design</div>
          <div className={styles.cardDescription}>
            Deploy on Kubernetes in seconds and start collecting logs from all
            containers
          </div>
          <img
            src={"img/download-icon-kubernetes-1324440186569978041_0.svg"}
            className={styles.cardImage}
          />
        </div>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Parquet Format</div>
          <div className={styles.cardDescription}>
            Store log data as high compress and analytics friendly Parquet
            format
          </div>
          <img src={"img/Component 17–1.svg"} className={styles.cardImage} />
        </div>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Object Storage</div>
          <div className={styles.cardDescription}>
            Parseable uses object storage as the primary storage
          </div>
          <img
            src={"img/Icon awesome-cloud.svg"}
            className={styles.cardImage}
          />
        </div>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Own Your Log Data</div>
          <div className={styles.cardDescription}>
            Bring your own bucket and completely own your log storage data
          </div>
          <img
            src={"img/Icon awesome-user-lock.svg"}
            className={styles.cardImage}
          />
        </div>
        <div className={`custom-shadow2 ${styles.cardContainer}`}>
          <div className={styles.cardTitle}>Simple, Intuitive UI</div>
          <div className={styles.cardDescription}>
            Intuitive dashboard to parse through log data efficiently
          </div>
          <img
            src={"img/Icon material-desktop-windows.svg"}
            className={styles.cardImage}
          />
        </div>
      </div>
      <div className={styles.comingSoonHeading}>
        Coming Soon
      </div>
      <div className={styles.upcomingText}>
        Upcoming features getting added to Parseable
      </div>
    </div>
  );
};

export default Features;
