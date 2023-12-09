// ControlProps Mode
// 不考虑使用内部维护兜底状态，通过顶层控制独一的状态.

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-globals */
import React, { useState, createContext, useContext } from "react";

const Ctx = createContext({});

const Light = ({ visible }) => {
  return visible && <div>灯开了</div>;
};

const Night = ({ visible }) => {
  return visible && <div>夜晚了</div>;
};

const ExternalControlState = () => {
  const { open } = useContext(Ctx);
  return (
    <>
      {open ? "现在是开启状态！" : "现在是关闭状态！"}
      <Night visible={open} />
      <Light visible={open} />
    </>
  );
};

export default () => {
  const [open, power] = useState(false);
  const [timeout, setTime] = useState(0);

  const handleToggleChange = () => {
    if (timeout >= 4) return console.log("请重置！");
    power(!open);
    setTime((time) => time + 1);
  };

  const handleResetChange = () => {
    power(true);
    setTime(0);
  };

  return (
    <Ctx.Provider value={{ open, handleToggleChange }}>
      <button onClick={() => handleToggleChange()}>开关</button>
      <button onClick={() => handleResetChange()}>重置</button>
      <ExternalControlState />
    </Ctx.Provider>
  );
};
