import { BucketsContainer } from './components/BucketsContainer';
import { Bucket } from './components/Bucket';
import { assets } from './utils/bucketImages';
import { BucketInput } from './components/BuckeInput';

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
    </main>
  );
}

export default App;
