import { BucketsAPIReponse } from '../../../../interfaces/buckets-api-reponse';
import { GridItem } from '../GridItem';
import { GridItemHead } from '../GridItemHead';
import { GridRow } from '../GridRow';
import styles from './solutionGrid.module.css';

let id: number = 1;

interface Props {
  challengeSolution: BucketsAPIReponse;
  loading: boolean;
  error: boolean;
}

export const SolutionGrid = ({ challengeSolution, loading, error }: Props) => {
  if (loading) {
    return <p className={styles['text']}>Loading...</p>;
  }

  if (error) {
    return <p className={styles['text']}>Error sending data</p>;
  }

  return (
    <section className={styles['grid-container']}>
      {!challengeSolution.isSolutionPossible ? (
        <p className={styles['text']}>No Solution</p>
      ) : (
        <>
          <h2 className={styles['title']}>Best solution</h2>
          <GridRow>
            <GridItemHead text='Bucket X' />
            <GridItemHead text='Bucket Y' />
            <GridItemHead text='Explanation' />
          </GridRow>
          {challengeSolution.results.map(result => (
            <GridRow key={id++}>
              <GridItem text={result.bucketX.toString()} />
              <GridItem text={result.bucketY.toString()} />
              <GridItem text={result.explanation} />
            </GridRow>
          ))}
        </>
      )}
    </section>
  );
};
