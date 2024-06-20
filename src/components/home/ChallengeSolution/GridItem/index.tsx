import styles from './gridItem.module.css';

interface Props {
  text: string;
}

export const GridItem = ({ text }: Props) => {
  return (
    <div className={styles['item']}>
      <p className={styles['text']}>{text}</p>
    </div>
  );
};
