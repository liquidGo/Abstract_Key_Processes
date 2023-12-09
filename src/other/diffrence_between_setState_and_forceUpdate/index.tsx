// @ts-nocheck
import React, { useState, useRef } from "react";

const DiffSetStateMethodsChild = () => {
  const ref = useRef(false);
  const r = ref.current;
  console.log("ref是否重新被刷新", r);
  if (!ref.current) {
    ref.current = true;
  }
  return <div>the diffrence between this.refresh and this.forceUpdate.</div>;
};

class DiffSetStateMethods extends React.Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      reset: new Date().getTime(),
      t: 2,
    };
  }

  public refresh = () => {
    this.setState(({ reset }: any) => ({
      reset: reset + 1,
    }));
  };

  render(): React.ReactNode {
    return (
      <div key={this.state.reset} onClick={() => this.refresh()}>
        <button
          onClick={() =>
            this.setState(({ t }) => ({
              t: t + 2,
            }))
          }
        >
          t:{this.state.t}
        </button>
        {this.state.reset}测试{Math.random()}
        <DiffSetStateMethodsChild />
      </div>
    );
  }
}

export default DiffSetStateMethods;
