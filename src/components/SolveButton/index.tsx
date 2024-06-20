import styles from './solveButton.module.css';

interface Props {
  onClickButton: () => void;
}

export const SolveButton = ({ onClickButton }: Props) => {
  return (
    <button
      className={styles['button']}
      onClick={onClickButton}
    >
      Solve Challenge
    </button>
  );
};
