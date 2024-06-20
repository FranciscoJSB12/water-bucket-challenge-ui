import styles from './validationError.module.css';

export const ValidationError = () => {
  return (
    <p className={styles['text']}>
      Only integers greater than zero are allowed
    </p>
  );
};
