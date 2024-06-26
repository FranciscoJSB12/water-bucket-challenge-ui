import { useSolveChallenge } from './hooks/useSolveChallenge';
import { BucketsContainer } from './components/home/BucketsForm/BucketsContainer';
import { BucketImage } from './components/home/BucketsForm/BucketImage';
import { BucketInput } from './components/home/BucketsForm/BucketInput';
import { SolveButton } from './components/home/BucketsForm/SolveButton';
import { bucketInputs } from './utils/bucketInputs';
import { ValidationError } from './components/home/BucketsForm/ValidationError';
import { MainTitle } from './components/ui/MainTitle';
import { SolutionGrid } from './components/home/ChallengeSolution/SolutionGrid';
import { Footer } from './components/ui/Footer';

function App() {
  const {
    values,
    loading,
    error,
    validationError,
    challengeSolution,
    onChangeValue,
    onClickButton,
  } = useSolveChallenge();

  return (
    <main>
      <MainTitle text='Welcome to the Water bucket challenge!' />
      <BucketsContainer>
        {bucketInputs.map(bucketInput => (
          <div key={bucketInput.src}>
            <BucketImage
              src={bucketInput.src}
              alt={bucketInput.alt}
            />
            <BucketInput
              bucket={bucketInput.bucket}
              name={bucketInput.inputName}
              onChangeValue={onChangeValue}
              value={values[bucketInput.inputName]}
            />
          </div>
        ))}
      </BucketsContainer>
      <SolveButton
        onClickButton={onClickButton}
        disabled={loading}
      />
      {validationError && <ValidationError />}
      {challengeSolution && (
        <SolutionGrid
          challengeSolution={challengeSolution}
          loading={loading}
          error={error}
        />
      )}
      <Footer />
    </main>
  );
}

export default App;
