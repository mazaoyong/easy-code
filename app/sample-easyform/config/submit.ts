import React from 'react';
import { Notify } from 'zent';
import transformFormValues from './transformer/form-values';
// import { saveData } from '[module]/api';
// TODO 在module层级创建api目录并引用对应接口方法
const saveData = (_payload?: any) => {};

import { IFormValues } from './types';
import { ZentForm } from 'zent/es/form/ZentForm';

export const useHandleSubmit = (): [(form: ZentForm<any>) => Promise<void>, boolean] => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(async (form: ZentForm<any>) => {
    const fromValues: IFormValues = form.getSubmitValue();

    const payload = transformFormValues(fromValues);

    setLoading(true);
    try {
      await saveData(payload);
      Notify.success('保存成功');
    } catch (e) {
      Notify.error(String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  return [handleSubmit, loading];
};
