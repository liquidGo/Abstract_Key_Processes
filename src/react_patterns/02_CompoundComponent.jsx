// CompoundComponent
// Internal Maintenance Common State.

import React, { createContext, useContext, useState } from "react";

const Ctx = createContext({});

const Wrapper = ({ children }) => {
  const [open, power] = useState(false);
  return <Ctx.Provider value={{ open, power }}>{children}</Ctx.Provider>;
};

const On = () => {
  const { open, power } = useContext(Ctx);
  return (
    <>
      {open ? (
        <button onClick={() => power(false)}>现在是开启状态！</button>
      ) : null}
    </>
  );
};

const Off = () => {
  const { open, power } = useContext(Ctx);
  return (
    <>
      {open ? null : (
        <button onClick={() => power(true)}>现在是关闭状态！</button>
      )}
    </>
  );
};
Wrapper.On = On;
Wrapper.Off = Off;

export default () => {
  return (
    <Wrapper>
      <Wrapper.Off />
      <Wrapper.On />
    </Wrapper>
  );
};
