// @ts-nocheck
import React from "react";

class FormStore {
  private store = {};

  private fieldEntitys: any[] = [];

  /**
   * 注册子组件
   * @param field
   */
  registerField(field) {
    this.fieldEntitys.push(field);
    return () => {
      this.fieldEntitys = this.fieldEntitys.filter((item) => item !== field);
    };
  }

  /**
   * 设置初始值
   * @params Values
   */
  setInitialValues = (values, init) => {
    if (init) {
      this.store = values;
    }
  };

  /**
   * 拿到数据流
   * @param name string
   */
  getFieldValue = (name) => {
    return this.store?.[name];
  };

  getFieldsValue = (nameList = true) => {
    if (nameList === true) {
      return JSON.parse(JSON.stringify(this.store));
    }
    const fieldsValue = {};
    nameList.forEact((name) => {
      fieldsValue[name] = this.getFieldValue(name);
    });
    return fieldsValue;
  };

  /**
   * 设置数据流
   * @params newStore
   */
  setFieldsValue = (newStore = {}) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEntitys.forEach((field) => {
      const { name } = field.props;
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          field.onStoreChange("update");
        }
      });
    });
  };
}

export default FormStore;
