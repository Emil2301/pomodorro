import styles from "./App.module.css";
import { FC } from "react";
import PomodoroButtons from "./components/PomodoroButtons/PomodoroButtons";
import Timer from "./components/Timer/Timer";
import {default as Settings} from './assets/icon-settings.svg';

const App: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.pomodoroText}>pomodoro</p>
      <PomodoroButtons />
      <Timer />
      <div className={styles.emptyDivToPushButtonDown}></div>
      <div className={styles.settingsIcon}>
        <button aria-label='Settings' className={styles.settingsIconButton}>
          <img src={Settings} alt='Settings' aria-hidden='true'/>
        </button>
      </div>
    </div>
  );
};

export default App;
