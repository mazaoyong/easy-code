import React from 'react';
import { IDrageItem } from 'src/work-bench/types';
import { COMPONENTS_CONFIG } from '../../constants'
import './style.scss'

interface IFormField extends IDrageItem {

}

const FormField: React.FC<IFormField> = (props) => {
  const { component, placeholder, ...childProps } = props;
  const compList = Object
    .entries(COMPONENTS_CONFIG)
    .flatMap(([_, list]) => list)
    .reduce((initValue, item) => {
      return {
        ...initValue,
        [item.id]: item.component
      }
    }, {})
  const Comp = compList[component];
  return Comp ? <Comp props={{ placeholder }} {...childProps} /> : null;
}

export default FormField;