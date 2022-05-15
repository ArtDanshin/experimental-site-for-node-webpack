import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import {
  Button,
  Col,
  List,
  Row,
  Typography
} from 'antd';
import {
  CloseOutlined,
  FormOutlined
} from '@ant-design/icons';

// eslint-disable-next-line import/no-relative-packages
import { components } from '../../../../../schemas/typings/admin-api';

import { LayoutPage } from '@/components'; // eslint-disable-line import/extensions
import { AdminAPI } from '@/api/admin-back'; // eslint-disable-line import/extensions

type Schemas = components['schemas'];

const { Title } = Typography;

const Articles: NextPage = () => {
  const [articles, setArticles] = useState<[Schemas['ArticleDto']] | []>([]);

  useEffect(() => {
    AdminAPI.getArticles()
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <LayoutPage>
      <Row align='middle' justify='space-between'>
        <Col>
          <Title>Статьи</Title>
        </Col>
        <Col>
          <Button href='/articles/create'>Создать</Button>
        </Col>
      </Row>
      <List
        itemLayout='horizontal'
        dataSource={articles}
        renderItem={(article) => (
          <List.Item
            actions={[
              <Button
                type='primary'
                shape='circle'
                href={`/articles/edit/${article.slug}`}
                key='list-edit'
                icon={<FormOutlined />}
              />,
              <Button
                type='primary'
                shape='circle'
                href={`/articles/delete/${article.slug}`}
                key='list-delete'
                icon={<CloseOutlined />}
              />
            ]}
          >
            <List.Item.Meta
              title={article.title}
              description={article.description}
            />
          </List.Item>
        )}
      />
    </LayoutPage>
  );
};

export default Articles;
