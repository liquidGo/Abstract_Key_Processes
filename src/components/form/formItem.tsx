/* eslint-disable react/no-typos */
// @ts-nocheck
import React from "react";
import { Ctx } from "./context";


class FormItem extends React.Component {
  static contextType = Ctx;

  private cancelRegister;

  constructor(props) {
    super(props);
    this.state = {
      resetCount: 1,
    };
  }

  componentDidMount() {
    this.cancelRegister = this.context.registerField(this);
  }

  componentWillUnMount() {
    if (this.cancelRegister) {
      this.cancelRegister(this);
    }
  }

  getControlled(children) {
    const { name } = this.props;
    const fieldValue = this.context.getFieldValue(name);
    const controller = {
      ...children.props,
      value: fieldValue ? fieldValue : this.props.initialValue,
      onChange: (...arg) => {
        const originChange = this.props?.onChange;
        if (originChange) {
          originChange(...arg);
        }
        let [next] = arg;
        this.context.setFieldsValue({ [name]: next });
      },
    };
    return controller;
  }

  refresh() {
    this.setState(({ resetCount }) => ({
      resetCount: resetCount + 1,
    }));
  }

  onStoreChange(type) {
    if (type === "reset") {
      this.refresh();
    } else {
      this.forceUpdate();
    }
  }

  render() {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(
      children,
      this.getControlled(children)
    );
    return (
      <React.Fragment key={this.state.resetCount}>
        {returnChildNode}
      </React.Fragment>
    );
  }
}

export default FormItem;

