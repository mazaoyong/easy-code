import React from 'react';
import { IEasyFormXSchema } from '@youzan/ebiz-components/es/types/easy-form-x';
import { FormInputField, FormNumberInputField } from 'zent';
import styles from '../styles.m.scss';

export const useSchemaConfig = () => {
  return React.useMemo<IEasyFormXSchema[]>(
    () => [
      {
        type: 'field.zent',
        component: FormInputField,
        name: 'name',
        required: true,
        label: '姓名：',
        deps: ['giftEnabled'],
        props: (_ctx: any) => ({
          placeholder: '请输入15个字以内',
          maxLength: 15,
          width: styles.fieldWidth,
        }),
      },
      {
        type: 'field.zent',
        component: FormNumberInputField,
        name: 'giftEnabled',
        defaultValue: 10,
        label: '年龄：',
        watch: {
          callback: (_form, _patch) => {},
          deps: ['name'],
        },
      }
    ],
    [],
  );
};
