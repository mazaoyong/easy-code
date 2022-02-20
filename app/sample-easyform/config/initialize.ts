import React from 'react';
import transformApiResponse from './transformer/api-response';
import { Notify } from 'zent';
// import { getData } from '[module]/api';
// TODO 在module层级创建api目录并引用对应接口方法
const getData: any = () => {};

import { EasyFormX } from '@youzan/ebiz-components/es/types/easy-form-x';

export const useInitializeForm = (formRef: React.RefObject<EasyFormX>) => {
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState<Error | string>();
  const [initialFormValues, setInitialFormValues] = React.useState<any>();

  React.useEffect(() => {
    const initFormValue = async () => {
      try {
        // 从接口中获取活动数据
        const result = await getData();
        const formValues = transformApiResponse(result);

        setInitialFormValues(formValues);

        // 初始化表单数据
        formRef.current?.initialize(formValues);

        setDone(true);
      } catch (err) {
        Notify.error(String(err));
        console.error(err);
        setError(err);
      }
    };

    initFormValue();
  }, [formRef]);

  return [done, error, initialFormValues];
};
