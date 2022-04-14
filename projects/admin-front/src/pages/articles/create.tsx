import React from 'react';
import { NextPage } from 'next';
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Typography
} from 'antd';

// eslint-disable-next-line import/extensions
import { LayoutPage } from '@/components';

const { Title } = Typography;
const { Option } = Select;

const onFinish = (values: any) => {
  console.log('Success:', values); // eslint-disable-line no-console
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo); // eslint-disable-line no-console
};

const CreateArticle: NextPage = () => (
  <LayoutPage>
    <Title>Создать статью</Title>
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
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
        label='Изображение'
        name='image'
        rules={[{ required: true, message: 'Введите ссылку на изображение' }]}
      >
        <Input />
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
        name='category'
        label='Категория'
        rules={[{ required: true, message: 'Введите категорию' }]}
      >
        <Select placeholder='Выберите категорию'>
          <Option value='backend'>Backend</Option>
          <Option value='design'>Дизайн</Option>
          <Option value='career'>Карьера</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name='tags'
        label='Тэги'
      >
        <Select mode='multiple' placeholder='Выберите тэги'>
          <Option value='html'>HTML</Option>
          <Option value='Javascript'>Javascript</Option>
          <Option value='career'>Карьера</Option>
        </Select>
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
          Создать
        </Button>
      </Form.Item>
    </Form>
  </LayoutPage>
);

export default CreateArticle;
