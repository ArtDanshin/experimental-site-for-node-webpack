import React, { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Typography } from 'antd';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/no-relative-packages
import { components } from '../../../../../../schemas/typings/admin-api';

import { FormArticle, LayoutPage } from '@/components'; // eslint-disable-line import/extensions
import { AdminAPI } from '@/api/admin-back'; // eslint-disable-line import/extensions

const { Title } = Typography;

type Schemas = components['schemas'];

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo); // eslint-disable-line no-console
};

const CreateArticle: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState<Schemas['ArticleDto']>();

  useEffect(() => {
    console.log('--- Check', slug);
    if (typeof slug === 'string') {
      AdminAPI.getArticle(slug)
        .then((response) => {
          setArticle(response.data);
        });
    }
  }, [slug]);

  const onFinish = useCallback((updatedArticle) => {
    if (typeof slug === 'string' && updatedArticle) {
      AdminAPI.updateArticle(slug, updatedArticle)
        .then(() => console.log('--- Success')); // eslint-disable-line no-console
    }
  }, [slug, article]);

  return (
    <LayoutPage>
      <Title>Редактировать статью</Title>
      {
        article
          ? (
            <FormArticle
              initialValues={article}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              submitButtonText='Редактировать'
            />
          )
          : null
      }
    </LayoutPage>
  );
};

export default CreateArticle;
