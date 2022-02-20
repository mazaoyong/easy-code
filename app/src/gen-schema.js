const genSchemaItemTmpl = (schemaItem) => {
  const { name, component, required, label, placeholder, withoutLabel } = schemaItem || {}
  return `
  {
    name: '${name}',
    type: 'field.zent',
    component: ${component},
    required: ${!!required},
    label: '${label}',${withoutLabel ? '\nwithoutLabel:true' : ''}
    props: (_ctx: any) => ({
      placeholder: '${placeholder}',
      width: styles.fieldWidth,
    }),
  }
  `
}

const genSchema = schema => {
  return `[${schema.map(item => genSchemaItemTmpl(item))}]`
}
module.exports = genSchema;