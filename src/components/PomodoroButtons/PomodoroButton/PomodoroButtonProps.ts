export interface PomodoroButtonProps {
  buttonText: string;
  onButtonClick: (buttonText: string) => void;
  activeButton: string;
}