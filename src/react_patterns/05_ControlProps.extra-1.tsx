/* eslint-disable import/no-anonymous-default-export */
// Controller Props Pattern
// 如果外部传值了就使用外部的value和onChange，否则使用内部的value和onChange并且把内部的action传递给外部的onChange
import React, { useState, useRef, useReducer } from 'react';

enum EActionType {
  重制 = 0,
  切换
}

export interface IAction<V> {
  type: EActionType,
  payload?: V
}

export interface IUseTogglerProps<V extends {}> {
  initialValue?: boolean,
  value?: V,
  reducer: any;
  onChange?: (value: IToggleState<V>, action: EActionType) => void
}

export type IToggleState<V extends {}> = V;

export const toggleReducer = <T extends Record<string, any>, V = {}>(
  state: IToggleState<T>,
  action: IAction<V>
): T => {
  switch (action.type) {
    case EActionType.切换:
      return {
        ...state,
        on: !state.on
      }
    case EActionType.重制:
      return {
        ...state,
        ...action.payload
      }
    default:
      throw new Error('未知的action类型');
  }
}

export const useToggle = <V extends Record<string, any>>({
  initialValue = false,
  reducer,
  value,
  onChange
}: IUseTogglerProps<V>) => {
  const [state, dispatch] = useReducer<typeof toggleReducer<{ on: boolean }, { on: boolean }>>(reducer, { on: initialValue });

  const isControlled = value !== undefined;
  const on = isControlled ? value.on : state.on;

  const dispatchWithOnChange = (action: IAction<{ on: boolean }>) => {
    // 如果外部没传值value，就使用内部的dispatch的value，如果外部传值了value，就使用外部的
    if (!isControlled) {
      dispatch(action);
    }

    onChange?.(reducer({ ...state, on }, action), action.type);
  }

  const toggle = () => dispatchWithOnChange({ type: EActionType.切换 });
  const reset = (action: IAction<{ on: boolean }>) => dispatchWithOnChange(action);
  return {
    on,
    toggle,
    reset
  }
}


export default () => {

  const [btnOn, setBtnOn] = useState(false);

  const handleChange = (value, action) => {
    console.log("value,action", "color:#ed9ec7", value, action);
    setBtnOn(value.on);
  }

  const { on, toggle, reset } = useToggle({
    initialValue: true,
    onChange: handleChange,
    reducer: toggleReducer,
    value: {
      on:btnOn
    }
  });


  return (
    <button
      onClick={toggle}
    >
      灯{on?'亮':'灭' }
    </button>
  )
}