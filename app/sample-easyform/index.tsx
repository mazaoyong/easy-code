import React from 'react';

import { EasyFormX } from '@youzan/ebiz-components';
import { useSchemaConfig } from './config/schema-config';

import styles from './styles.m.scss';
import { Button } from 'zent';
import { useHandleSubmit } from './config/submit';
import { EasyFormX as EasyFormXInstance } from '@youzan/ebiz-components/es/types/easy-form-x';
import { useInitializeForm } from './config/initialize';

const App: React.FC = () => {
  console.log(styles);

  // 表单 ref
  const formRef = React.useRef<EasyFormXInstance>(null);

  // 初始化表单值
  const [done, error] = useInitializeForm(formRef);

  // 获取表单配置
  const schemaConfig = useSchemaConfig();

  // 表单提交
  const [handleSubmit, submitLoading] = useHandleSubmit();

  // 出错，展示错误页面
  if (error) {
    // return <ErrorPage error={error} />;
    return null;
  }

  const loading = submitLoading || !done;

  return (
    <main className={styles.main}>
      <section className={styles.form}>
        <EasyFormX schema={schemaConfig} ref={formRef} onSubmit={handleSubmit}>
          <footer className={styles.footer}>
            <Button loading={loading} htmlType="submit" type="primary">
              保存
            </Button>
          </footer>
        </EasyFormX>
      </section>
    </main>
  );
};

export default App;
