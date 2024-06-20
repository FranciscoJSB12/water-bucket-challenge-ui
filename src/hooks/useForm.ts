import { ChangeEvent, useState } from 'react';
import { BucketsAPIReponse } from '../interfaces/buckets-api-reponse';
import { postBucketsData } from '../actions/home/post-buckets-data';
import { BucketsData } from '../interfaces/buckets-data.interface';

const initialValues: { [key: string]: string } = {
  bucketX: '1',
  bucketY: '1',
  amountWanted: '1',
};

export const useForm = () => {
  const [values, setValues] = useState(initialValues);
  const [validationError, setValidationError] = useState(false);
  const [challengeSolution, setChallengeSolution] =
  useState<BucketsAPIReponse>();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickButton = async () => {
    validationError && setValidationError(false);
    const pattern = /^([1-9]\d*)$/;
    const numbers = Object.values(values);

    for (const num of numbers) {
      if (!pattern.test(num)) {
        setValidationError(true);
        return;
      }
    }

    const data: BucketsData = {
      bucketX: +values.bucketX,
      bucketY: +values.bucketY,
      amountWantedZ: +values.amountWanted,
    };

    const response = await postBucketsData(data);

    setChallengeSolution(response);
  };

  return {
    values,
    validationError,
    challengeSolution,
    onChangeValue,
    onClickButton
  }
}

