import { BucketsContainer } from './components/BucketsContainer';
import { Bucket } from './components/Bucket';
import { assets } from './utils/bucketImages';
import { BucketInput } from './components/BuckeInput';
import { SolveButton } from './components/SolveButton';

function App() {
  return (
    <main>
      <BucketsContainer>
        {assets.map(asset => (
          <div key={asset.src}>
            <Bucket {...asset} />
            <BucketInput bucket={asset.bucket} />
          </div>
        ))}
      </BucketsContainer>
      <SolveButton />
    </main>
  );
}

export default App;
