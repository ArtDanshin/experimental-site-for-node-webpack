import React from 'react';
import { NextPage } from 'next';
import { Typography } from 'antd';

// eslint-disable-next-line import/extensions
import { LayoutPage } from '@/components';

const { Title } = Typography;

const Categories: NextPage = () => (
  <LayoutPage>
    <Title>Категории</Title>
  </LayoutPage>
);

export default Categories;
