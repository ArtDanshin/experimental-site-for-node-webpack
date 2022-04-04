import React, { FC, useCallback, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DingtalkOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

import styles from './Layout.module.scss';

const { Header, Sider, Content } = Layout;

export const LayoutPage: FC = ({ children }) => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const viewMenu = useCallback(() => {
    setVisibleMenu(!visibleMenu);
  }, [visibleMenu]);

  return (
    <Layout className={styles.container}>
      <Sider
        trigger={null}
        collapsible
        collapsed={visibleMenu}
      >
        <div className={styles.logo} />
        <Menu
          theme='dark'
          mode='inline'
        >
          <Menu.Item key='about' icon={<UserOutlined />}>
            <Link href='/about'>Об авторе</Link>
          </Menu.Item>
          <Menu.Item key='articles' icon={<ReadOutlined />}>
            <Link href='/articles'>Статьи</Link>
          </Menu.Item>
          <Menu.Item key='portfolio' icon={<DingtalkOutlined />}>
            <Link href='/portfolio'>Портфолио</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          {React.createElement(visibleMenu ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: viewMenu,
          })}
        </Header>
        <Content
          className={styles.content}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
