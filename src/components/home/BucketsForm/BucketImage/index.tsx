import styles from './bucketImage.module.css';

interface Props {
  src: string;
  alt: string;
}

export const BucketImage = ({ src, alt }: Props) => {
  return (
    <figure className={styles['figure']}>
      <img
        className={styles['img']}
        src={src}
        alt={alt}
      />
    </figure>
  );
};
