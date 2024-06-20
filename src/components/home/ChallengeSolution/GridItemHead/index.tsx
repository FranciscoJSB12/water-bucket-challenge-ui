import styles from './gridItemHead.module.css';

interface Props {
  text: string;
}

export const GridItemHead = ({ text }: Props) => {
  return (
    <li className={styles['head']}>
      <h2>{text}</h2>
    </li>
  );
};
