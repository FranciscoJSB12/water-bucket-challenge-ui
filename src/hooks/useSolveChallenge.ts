import { useState } from 'react';
import { useForm } from './useForm';
import { BucketsAPIReponse } from '../interfaces/buckets-api-reponse';
import { postBucketsData } from '../actions/home/post-buckets-data';

export const useSolveChallenge = () => {
  const { values, onChangeValue, validationError, validateData } = useForm();
  const [challengeSolution, setChallengeSolution] =
  useState<BucketsAPIReponse>();

  const onClickButton = async () => {

    const data = validateData();

    if (!data) return;

    const response = await postBucketsData(data);

    setChallengeSolution(response);
  };

  return {
    values,
    validationError,
    challengeSolution,
    onChangeValue,
    onClickButton,
  }
}

