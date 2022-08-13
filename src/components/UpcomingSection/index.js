import React from "react";
import styles from "./styles.module.css";

const UpcomingSection = () => {
  return (
    <div className={`bg-gray-bg ${styles.container}`}>
      <div className={styles.gridContainer}>
        <div className={styles.itemContainer}>
          <img
            height="56px"
            width="56px"
            src={"img/Icon ionic-md-notifications-outline.svg"}
          />
          <div className={styles.text}>Alerting</div>
        </div>
        <div className={styles.itemContainer}>
          <img
            height="56px"
            width="56px"
            src={"img/Icon metro-file-archive.svg"}
          />
          <div className={styles.text}>Log retention</div>
        </div>
        <div className={styles.itemContainer}>
          <img
            height="56px"
            width="56px"
            src={"img/Icon simple-openaccess.svg"}
          />
          <div className={styles.text}>Access Control</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSection;
