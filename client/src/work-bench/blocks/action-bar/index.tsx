import React, { useCallback, useEffect, useState } from 'react';
import { IActionBarProps } from 'src/work-bench/types';
import { Form, FormCheckboxField, FormInputField, FormStrategy } from 'zent';
import { omit } from 'lodash'
import './style.scss'

const ActionBar: React.FC<IActionBarProps> = (props) => {
  const { selectedItem, onChange } = props;
  const form = Form.useForm(FormStrategy.View);
  const [withoutLabel, setWithoutLabel] = useState<boolean>(false)
  useEffect(() => {
    const withoutLabelField = form.model.get('withoutLabel');
    const watch = withoutLabelField?.value$.subscribe(val => {
      setWithoutLabel(val)
    })
    return watch?.unsubscribe;
  }, [form])

  useEffect(() => {
    if (selectedItem) {
      form.patchValue(omit(selectedItem, ['id', 'type', 'component']))
    }
  }, [form, selectedItem]);

  const handleChange = useCallback(() => {
    onChange({
      ...(selectedItem || {}),
      ...(form.getValue() || {})
    })
  }, [form, selectedItem])
  return (
    <div className="action-bar" hidden={!selectedItem}>
      <h1 style={{ marginBottom: '16px' }}>配置</h1>
      <Form form={form} onChange={handleChange}>
        <FormInputField name="name" label="name："></FormInputField>
        <FormInputField name="label" label="标题：" props={{ disabled: withoutLabel }}></FormInputField>
        {
          !['FormCheckboxField', 'FormSwitchField'].includes(selectedItem?.component) && (
            <FormInputField name="placeholder" label="占位符："></FormInputField>
          )
        }
        <FormCheckboxField name="required" before="是否必填："></FormCheckboxField>
        <FormCheckboxField name="withoutLabel" before="是否隐藏标题："></FormCheckboxField>
      </Form>
    </div>
  )
}

export default ActionBar;