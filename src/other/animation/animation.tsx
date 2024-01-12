//@ts-nocheck

import React, { useState, useRef } from "react";
import classNames from "classnames";
import { Transition, CSSTransition } from "react-transition-group";
import "./animation.css";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [csstransitionVisible, setCssTransitionVisible] = useState(true);
  const [onShowDiv, setOnShowDiv] = useState(false);
  const nodeRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Transition in={isVisible} timeout={0} classNames="fade">
        {(state) => (
          <div
            className="box"
            style={{
              ...defaultStyle,
              // @ts-ignore
              ...transitionStyles[state],
            }}
          >
            {state}
          </div>
        )}
      </Transition>
      <button onClick={toggleVisibility}>切换可见性</button>
      <div
        className={classNames(`box2`, {
          [`box2-toggle`]: visible,
        })}
      />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换可见性
      </button>
      {onShowDiv && <div style={{ width: "100px", height: "100px" }} />}
      <CSSTransition
        in={csstransitionVisible}
        timeout={1000}
        nodeRef={nodeRef}
        unmountOnExit  // 这个属性很重要
        classNames={`csstransitionVisible`}
        // onEnter={() => setOnShowDiv(false)}
        onExited={() => setOnShowDiv(true)}
      >
        <div
          ref={nodeRef}
          style={{
            width: "100px",
            height: "100px",
            background: "red",
          }}
        />
      </CSSTransition>
      <button
        onClick={() => {
          if (!csstransitionVisible) {
            setOnShowDiv(false);
          }
          setCssTransitionVisible(!csstransitionVisible);
        }}
      >
        切换可见性
      </button>
    </div>
  );
}

export default App;
