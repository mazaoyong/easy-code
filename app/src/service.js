const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())
router.post('/demo', async ctx => {
  const schema = [
    {
      id: 'd2343a2f-fdd4-4baa-a1cc-2a7e455cc9d6',
      type: 'field.zent',
      component: 'FormInputField',
      name: 'name_rhrq',
      label: '输入框：',
      placeholder: ''
    },
    {
      id: 'b381b490-8931-465b-82b5-17ed3c338c4e',
      type: 'field.zent',
      component: 'FormNumberInputField',
      name: 'name_igj4',
      label: '数字框：',
      placeholder: ''
    },
    {
      id: '8f74214a-b505-4a02-bc4e-2bd42cde4b22',
      type: 'field.zent',
      component: 'FormSelectField',
      name: 'name_cey3',
      label: '下拉框：',
      placeholder: ''
    },
    {
      id: 'a8f79cec-46ee-432e-b59f-976a381edc5c',
      type: 'field.zent',
      component: 'FormMonthPickerField',
      name: 'name_gtnp',
      label: '月份选择：',
      placeholder: ''
    }
  ]
  ctx.body = 'Hello Router';
})

const home = serve(path.join(__dirname, '../../client/build/'));
app.use(home);
app.listen(7777);