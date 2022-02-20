import React from 'react';
import { IPreviewProps } from '@youzan/ebiz-components/es/types/easy-form-x';
// import styles from './styles.m.scss';

const Preview: React.FC<IPreviewProps> = props => {
  return <section>{JSON.stringify(props.formModel)}</section>;
};

export default Preview;
