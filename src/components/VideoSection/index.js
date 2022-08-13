import React from "react";
import styles from './styles.module.css'

const VideoSection = () => {
  return (
    <div id={"demo"} className={`max-w-6xl ${styles.videoContainer}`}>
      <div className={styles.negativeMargin} >
        <div className={styles.heading}>Parseable in Action</div>
        <div className={styles.imageContainerWeb}>
          <img
            src={"img/pika-2022-07-17T14_35_41.902Z.png"}
            className={styles.image}
            width="100%"
            height="100%"
          />
        </div>
        <div className={styles.imageContainerMOb}>
          <img
            src={"img/pika-2022-07-17T14_35_41.902Z.png"}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
