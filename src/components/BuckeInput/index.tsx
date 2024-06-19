import styles from './buckeInput.module.css';

interface Props {
  bucket: string;
}

export const BucketInput = ({ bucket }: Props) => {
  return (
    <div>
      <label className={styles['label']}>{bucket}</label>
      <input
        className={styles['input']}
        type='number'
        min='1'
      />
    </div>
  );
};
