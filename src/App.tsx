import { useForm } from './hooks/useForm';
import { BucketsContainer } from './components/home/BucketsContainer';
import { BucketImage } from './components/home/BucketImage';
import { BucketInput } from './components/home/BucketInput';
import { SolveButton } from './components/home/SolveButton';
import { bucketInputs } from './utils/bucketInputs';
import { ValidationError } from './components/home/ValidationError';
import { MainTitle } from './components/ui/MainTitle';

function App() {
  const { values, validationError, onChangeValue, onClickButton } = useForm();

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
      <SolveButton onClickButton={onClickButton} />
      {validationError && <ValidationError />}
    </main>
  );
}

export default App;
