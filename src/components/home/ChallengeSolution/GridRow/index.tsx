import { ReactNode } from 'react';
import styles from './gridRow.module.css';

interface Props {
  children: ReactNode;
}

export const GridRow = ({ children }: Props) => {
  return <ul className={styles['row']}>{children}</ul>;
};
