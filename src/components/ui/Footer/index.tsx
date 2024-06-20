import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <p className={styles['text']}>
        <a
          className={styles['anchor']}
          href='https://www.flaticon.com/free-icons/bucket'
          title='bucket icons'
        >
          Bucket icons created by Smashicons - Flaticon
        </a>
      </p>
    </footer>
  );
};
