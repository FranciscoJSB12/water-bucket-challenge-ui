import { ReactNode } from 'react';
import styles from './bucketsContainer.module.css';

interface Props {
  children: ReactNode;
}

export const BucketsContainer = ({ children }: Props) => {
  return <section className={styles['section']}>{children}</section>;
};
