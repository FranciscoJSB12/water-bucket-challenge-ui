import { BucketsAPIReponse } from '../../../../interfaces/buckets-api-reponse';
import { GridItem } from '../GridItem';
import { GridItemHead } from '../GridItemHead';
import { GridRow } from '../GridRow';
import styles from './solutionGrid.module.css';

let id: number = 1;

interface Props {
  challengeSolution: BucketsAPIReponse;
}

export const SolutionGrid = ({ challengeSolution }: Props) => {
  if (!challengeSolution.isSolutionPossible) {
    return <p className={styles['text']}>No Solution</p>;
  }

  return (
    <section className={styles['grid-container']}>
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
    </section>
  );
};
