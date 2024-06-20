import { ChangeEvent } from 'react';
import styles from './bucketInput.module.css';

interface Props {
  bucket: string;
  name: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const BucketInput = ({ bucket, name, onChangeValue, value }: Props) => {
  return (
    <div>
      <label
        htmlFor={bucket}
        className={styles['label']}
      >
        {bucket}
      </label>
      <input
        className={styles['input']}
        type='number'
        min='1'
        id={bucket}
        name={name}
        onChange={onChangeValue}
        value={value}
      />
    </div>
  );
};
