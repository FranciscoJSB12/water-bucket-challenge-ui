import styles from './solveButton.module.css';

interface Props {
  disabled: boolean;
  onClickButton: () => void;
}

export const SolveButton = ({ onClickButton, disabled }: Props) => {
  return (
    <button
      className={styles['button']}
      onClick={onClickButton}
      disabled={disabled}
    >
      Solve Challenge
    </button>
  );
};
