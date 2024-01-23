/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Button, Form, Input } from 'antd';

export default () => {

  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item
        label="姓名"
        // 设置路径name.name1=name1
        name={['name','name1']}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="姓名"
        // 设置路径name.name2=name2
        name={['name', 'name2']}
      >
        <Input />
      </Form.Item>
      <Button onClick={()=>{console.log(form.getFieldsValue())}}>getForm</Button>
    </Form>
  )
}