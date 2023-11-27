import styles from "./PomodoroButton.module.scss";
import { FC } from "react";
import { PomodoroButtonProps } from "./PomodoroButtonProps";

const PomodoroButton: FC<PomodoroButtonProps> = ({buttonText, onButtonClick, activeButton}) => {
  return (
    <button
      onClick={() => onButtonClick(buttonText)}
      className={`${styles.button} ${
        activeButton === buttonText && styles.activeButton
      }`}
    >
      {buttonText}
    </button>
  );
};

export default PomodoroButton;
