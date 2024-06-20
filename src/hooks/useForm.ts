import { ChangeEvent, useState } from 'react';

const initialValues: { [key: string]: string } = {
  bucketX: '1',
  bucketY: '1',
  amountWanted: '1',
};

export const useForm = () => {
  const [values, setValues] = useState(initialValues);
  const [validationError, setValidationError] = useState(false);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onClickButton = () => {
    setValidationError(false);
    const pattern = /^([1-9]\d*)$/;
    const numbers = Object.values(values);

    for (const num of numbers) {
      if (!pattern.test(num)) { 
        setValidationError(true);
        return;
      };
    }

    console.log(values);
  };

  return {
    values,
    validationError,
    onChangeValue,
    onClickButton
  }
}

