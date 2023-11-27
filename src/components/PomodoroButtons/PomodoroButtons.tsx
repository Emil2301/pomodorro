import styles from "./PomodoroButtons.module.scss";
import { FC, useState } from "react";
import PomodoroButton from "./PomodoroButton/PomodoroButton";
import { ButtonTypes, ButtonTypesValue } from "./ButtonTypes";

const PomodoroButtons: FC = () => {
  const [activeButton, setActiveButton] = useState<ButtonTypesValue>(ButtonTypes.POMODORO);
  const onButtonClick = (buttonName: ButtonTypesValue) => {
    setActiveButton(buttonName);
  };
  return (
    <div className={styles.buttons}>
      {Object.values(ButtonTypes).map(type => (
        <PomodoroButton key={type} {...{onButtonClick, activeButton, buttonText: type}} />
      ))}
    </div>
  );
};

export default PomodoroButtons;
