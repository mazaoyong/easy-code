import { IFormValues, IResponseDto } from '../types';

const transformFormValues = (resp: IFormValues): IResponseDto => {
  const { name, age } = resp;

  return {
    name,
    age: Number(age),
  };
};

export default transformFormValues;
