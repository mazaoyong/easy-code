import { IFormValues, IResponseDto } from '../types';

const transformApiResponse = (resp: IResponseDto): IFormValues => {
  const { name, age } = resp;

  return {
    name,
    age: String(age),
  };
};

export default transformApiResponse;
