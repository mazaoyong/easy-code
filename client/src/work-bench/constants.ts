import {
  FormInputField,
  FormSelectField,
  FormRadioGroupField,
  FormCheckboxField,
  FormCheckboxGroupField,
  FormDateRangePickerField,
  FormNumberInputField,
  FormSwitchField,
  FormTimeRangePickerField,
  FormDatePickerField,
  FormWeekPickerField,
  FormMonthPickerField,
  FormQuarterPickerField,
  FormYearPickerField,
  FormTimePickerField,
  FormDateRangeQuickPickerField,
  FormCombinedTimeRangePickerField,
  FormCombinedDateRangePickerField
} from 'zent'
import { ECompType } from './types'
// text长度不要超过四个，否则布局会乱！
export const COMPONENTS_CONFIG = {
  [ECompType.BASIC]: [
    {
      id: 'FormInputField',
      icon: 'format_color_text',
      text: '输入框',
      component: FormInputField
    },
    {
      id: 'FormNumberInputField',
      icon: 'looks_one',
      text: '数字框',
      component: FormNumberInputField
    },
    {
      id: 'FormSelectField',
      icon: 'expand_more',
      text: '下拉框',
      component: FormSelectField
    },
    // {
    //   id: 'FormRadioGroupField',
    //   icon: 'radio_button_checked',
    //   text: '单选框',
    //   component: FormRadioGroupField
    // },
    {
      id: 'FormCheckboxField',
      icon: 'check',
      text: '多选框',
      component: FormCheckboxField
    },
    // {
    //   id: 'FormCheckboxGroupField',
    //   icon: 'check_box',
    //   text: '多选框组',
    //   component: FormCheckboxGroupField
    // },
    {
      id: 'FormSwitchField',
      icon: 'rotate_left',
      text: '开关',
      component: FormSwitchField
    },
    {
      id: 'FormDatePickerField',
      icon: 'today',
      text: '日期选择',
      component: FormDatePickerField
    },
    {
      id: 'FormWeekPickerField',
      icon: 'date_range',
      text: '周选择',
      component: FormWeekPickerField
    },
    {
      id: 'FormMonthPickerField',
      icon: 'date_range',
      text: '月份选择',
      component: FormMonthPickerField
    },
    {
      id: 'FormQuarterPickerField',
      icon: 'date_range',
      text: '季度选择',
      component: FormQuarterPickerField
    },
    {
      id: 'FormYearPickerField',
      icon: 'date_range',
      text: '年份选择',
      component: FormYearPickerField
    },
    {
      id: 'FormTimePickerField',
      icon: 'date_range',
      text: '时间选择',
      component: FormTimePickerField
    },
    {
      id: 'FormDateRangeQuickPickerField',
      icon: 'date_range',
      text: '聚合日期',
      component: FormDateRangeQuickPickerField
    },
    {
      id: 'FormTimeRangePickerField',
      icon: 'date_range',
      text: '时间段1',
      component: FormTimeRangePickerField
    },
    {
      id: 'FormCombinedTimeRangePickerField',
      icon: 'date_range',
      text: '时间段2',
      component: FormCombinedTimeRangePickerField
    },
    {
      id: 'FormDateRangePickerField',
      icon: 'date_range',
      text: '日期段1',
      component: FormDateRangePickerField
    },
    {
      id: 'FormCombinedDateRangePickerField',
      icon: 'date_range',
      text: '日期段2',
      component: FormCombinedDateRangePickerField
    }
  ]
}

export const FORM_TYPE = {
  [ECompType.BASIC]: 'field.zent'
}