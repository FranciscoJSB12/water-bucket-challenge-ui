import { useState } from 'react';
import { useForm } from './useForm';
import { BucketsAPIReponse } from '../interfaces/buckets-api-reponse';
import { postBucketsData } from '../actions/home/post-buckets-data';

export const useSolveChallenge = () => {
  const { values, onChangeValue, validationError, validateData } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [challengeSolution, setChallengeSolution] =
  useState<BucketsAPIReponse>();

  const onClickButton = async () => {

    const data = validateData();

    if (!data) return;

    try {
      setLoading(true);
      error && setError(false);
      
      const response = await postBucketsData(data);

      if(!response.ok) throw new Error('Error sending data');

      setLoading(false);
      
      setChallengeSolution(response);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return {
    values,
    loading,
    error,
    validationError,
    challengeSolution,
    onChangeValue,
    onClickButton,
  }
}

