// @ts-nocheck

import React from "react";
import Form from "./form";
import FormItem from "./formItem";
import FormStore from "./useForm";
import { Input, Radio } from "@nutui/nutui-react";
const Demo = () => {
  const form = new FormStore();
  return (
    <>
      <Form form={form} initialValues={{ test: "测试表单", radio: "A" }}>
        <FormItem name="test">
          <Input />
        </FormItem>
        <FormItem name="radio">
          <Radio.Group>
            <Radio value="A">A</Radio>
            <Radio value="B">B</Radio>
          </Radio.Group>
        </FormItem>
      </Form>
      <button
        onClick={() => {
          console.log(form.getFieldsValue());
        }}
      >
        测试表单取值
      </button>
    </>
  );
};

export default Demo;
