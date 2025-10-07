import React, { FC } from 'react';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';

import '@/styles/globals.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
