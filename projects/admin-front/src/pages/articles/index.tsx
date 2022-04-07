import React from 'react';
import { NextPage } from 'next';
import { Button, Typography } from 'antd';

// eslint-disable-next-line import/extensions
import { LayoutPage } from '@/components';

const { Title } = Typography;

const Articles: NextPage = () => (
  <LayoutPage>
    <Title>Статьи</Title>
    <Button href='/articles/create'>Создать</Button>
  </LayoutPage>
);

export default Articles;
