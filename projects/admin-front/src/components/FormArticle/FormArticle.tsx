import { FormProps } from 'rc-field-form/lib/Form'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment'; // eslint-disable-line import/no-extraneous-dependencies
import React, { FC } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input
} from 'antd';

// TODO: Форма не должна импортировать в себя типы API, она должна оперировать контрактом
import { components } from '@/specs/admin-api'; // eslint-disable-line import/extensions

type Schemas = components['schemas'];

type Props = {
  initialValues?: Schemas['ArticleDto'];
  onFinish: FormProps<Schemas['ArticleDto']>['onFinish'];
  onFinishFailed: FormProps<Schemas['ArticleDto']>['onFinishFailed'];
  submitButtonText: string;
};

export const FormArticle: FC<Props> = ({ initialValues, onFinish, onFinishFailed, submitButtonText }) => {
  const transformedInitialValue = initialValues
    ? {
      ...initialValues,
      publishedAt: moment(initialValues.publishedAt)
    }
    : undefined;

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={transformedInitialValue}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Заголовок'
        name='title'
        rules={[{ required: true, message: 'Введите заголовок' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Описание'
        name='description'
        rules={[{ required: true, message: 'Введите описание' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label='Дата публикации'
        name='publishedAt'
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label='Slug'
        name='slug'
        rules={[{ required: true, message: 'Введите slug' }]}
      >
        <Input addonBefore='https://site.com/articles/' placeholder='slug' />
      </Form.Item>

      <Form.Item
        label='Текст статьи'
        name='body'
        rules={[{ required: true, message: 'Введите описание' }]}
      >
        <Input.TextArea rows={8} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          {submitButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
};
