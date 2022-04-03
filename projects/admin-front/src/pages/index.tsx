import React from 'react';
import { NextPage } from 'next';
import { Button } from 'antd';

import { LayoutPage } from '../components';

const Home: NextPage = () => (
  <LayoutPage>
    <Button type='primary'>Content</Button>
  </LayoutPage>
);

export default Home;
