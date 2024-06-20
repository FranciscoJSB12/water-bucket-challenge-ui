import styles from './mainTitle.module.css';

interface Props {
  text: string;
}

export const MainTitle = ({ text }: Props) => {
  return <h1 className={styles['title']}>{text}</h1>;
};
