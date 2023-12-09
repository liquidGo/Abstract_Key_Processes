// PropsCollections/Getters Mode
// Organize The Same Functional Functions into a Collection
// Getter EventHandles

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-globals */
import React, { useState } from "react";

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const usePower = () => {
  const [visible, power] = useState(false);
  const turnPower = () => power(!visible);

  const getPowerProps = ({ onClick, ...props } = {}) => ({
    onClick: callAll(onClick, turnPower),
    ...props,
  });

  return {
    visible,
    getPowerProps,
  };
};

const Light = ({ visible }) => {
  return visible && <div>灯开了</div>;
};

const Night = ({ visible }) => {
  return visible && <div>夜晚了</div>;
};

export default () => {
  const { visible, getPowerProps } = usePower();

  return (
    <>
      {visible ? "现在是开启状态！" : "现在是关闭状态！"}
      <button
        {...getPowerProps({
          onClick: () => {
            console.log("click");
          }
        })}
      >
        开关
      </button>
      <Night visible={visible} />
      <Light visible={visible} />
    </>
  );
};


// useHook里面整理逻辑