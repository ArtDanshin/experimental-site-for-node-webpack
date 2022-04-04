import React from 'react';
import { NextPage } from 'next';
import { Typography } from 'antd';

// eslint-disable-next-line import/extensions
import { LayoutPage } from '@/components';

const { Title } = Typography;

const Portfolio: NextPage = () => (
  <LayoutPage>
    <Title>Портфолио</Title>
  </LayoutPage>
);

export default Portfolio;
