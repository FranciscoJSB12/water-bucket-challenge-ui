import { useForm } from './hooks/useForm';
import { BucketsContainer } from './components/BucketsContainer';
import { Bucket } from './components/Bucket';
import { BucketInput } from './components/BucketInput';
import { SolveButton } from './components/SolveButton';
import { bucketInputs } from './utils/bucketInputs';
import { ValidationError } from './components/ValidationError';

function App() {
  const { values, validationError, onChangeValue, onClickButton } = useForm();

  return (
    <main>
      <BucketsContainer>
        {bucketInputs.map(bucketInput => (
          <div key={bucketInput.src}>
            <Bucket
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
