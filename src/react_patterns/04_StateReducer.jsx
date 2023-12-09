// StateReducer Mode

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-globals */
import React, { useState, useReducer, useRef } from "react";

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const usePower = (initial, reducer) => {
  const { current } = useRef(initial);
  const [state, dispatch] = useReducer(reducer, current);

  const toggle = () => dispatch({ type: "toggle" });
  const reset = () => dispatch({ type: "reset", initial });

  const getTogglerProps = ({ onClick, ...props }) => {
    return {
      onClick: callAll(onClick, toggle),
      ...props,
    };
  };

  const getResetterProps = ({ onClick, ...props }) => {
    return {
      onClick: callAll(onClick, reset),
      ...props,
    };
  };

  return {
    state,
    getTogglerProps,
    getResetterProps,
  };
};

const Light = ({ visible }) => {
  return visible && <div>灯开了</div>;
};

const Night = ({ visible }) => {
  return visible && <div>夜晚了</div>;
};

export default () => {
  const [timeout, setTime] = useState(0);
  const togglerStateReducer = (state, action) => {
    switch (action.type) {
      case "toggle":
        if (timeout >= 4) {
          console.log("请重置！")
          return { open: state.open };
        }
        return { open: !state.open };
      case "reset":
        return { open: false };
      default:
        return new Error();
    }
  };
  const { state, getTogglerProps, getResetterProps } = usePower(
    { open: false },
    togglerStateReducer
  );

  return (
    <>
      {state.open ? "现在是开启状态！" : "现在是关闭状态！"}
      <button
        {...getTogglerProps({
          onClick: () => setTime((time) => time + 1),
        })}
      >
        开关
      </button>
      <button
        {...getResetterProps({
          onClick: ()=>setTime(0),
        })}
      >
        重置
      </button>
      <Night visible={state.open} />
      <Light visible={state.open} />
    </>
  );
};

// useHook里面处理逻辑
// export default里面写入Reducer并且通过useHook注册数据流
