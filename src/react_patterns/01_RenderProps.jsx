// RenderProps Mode
// Mutipul External Components Share a Internal Common State
import React, { useState } from "react";

const Wrapper = ({ children }) => {
  const [open, power] = useState(false);

  return (
    <>
      <button onClick={() => power(!open)}>
        {open ? "现在是开启状态！" : "现在是关闭状态！"}
      </button>
      {children(open)}
    </>
  );
};

const Light = ({ visible }) => {
  return visible && <div>灯开了</div>;
};

const Night = ({ visible }) => {
  return visible && <div>夜晚了</div>;
};

export default () => {
  return (
    <Wrapper>
      {(visible) => {
        return (
          <>
            <Night visible={visible} />
            <Light visible={visible} />
          </>
        );
      }}
    </Wrapper>
  );
};
