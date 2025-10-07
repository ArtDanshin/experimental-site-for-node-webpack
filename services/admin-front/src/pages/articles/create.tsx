import React from 'react';
import { NextPage } from 'next';
import { Typography } from 'antd';

import { FormArticle, LayoutPage } from '@/components'; // eslint-disable-line import/extensions
import { AdminAPI } from '@/api/admin-back'; // eslint-disable-line import/extensions

const { Title } = Typography;

const onFinish = (values: any) => {
  console.log('Success:', values); // eslint-disable-line no-console

  AdminAPI.createArticle(values)
    .then(() => console.log('--- Success')); // eslint-disable-line no-console
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo); // eslint-disable-line no-console
};

const CreateArticle: NextPage = () => (
  <LayoutPage>
    <Title>Создать статью</Title>
    <FormArticle
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      submitButtonText='Создать'
    />
  </LayoutPage>
);

export default CreateArticle;
