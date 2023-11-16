import styles from "./Timer.module.scss";
import { FC } from "react";

const Timer: FC = () => {

  return (
    <div className={styles.timerContainer} role="timer">
      <div className={styles.container}>
        <div className={styles.progress} style={{"--percentOfTimePassed":85}}>
          <div className={styles.timeLeft}>17:59</div>
          <div className={styles.pauseButton}>PAUSE</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
