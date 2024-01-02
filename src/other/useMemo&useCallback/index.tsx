import React, { useMemo, useCallback, useState, useEffect } from 'react';

const Other_useMemo_useCallback = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(1);
  const memoizedValue = useMemo(() => {
    return random * 10000;
  }, [random]);

  const memoizedCallback = useCallback(() => {
    console.log('memoizedCallback');
  }, [count]);

  const handleClick = () => {
    setRandom(Math.random());
    console.log("%c Line:17 🍪 父组件改变了状态！", "color:#fca650");
  }

  const handleClick2 = () => {
    setCount(count + 1);
    console.log("%c Line:17 🍪 父组件改变了状态！", "color:#fca650");
  }

  return <div>
    <p>useMemo: {memoizedValue}</p>
    <div>
        <button onClick={handleClick}>改变useMemo依赖，进行重新计算</button>
      </div>
    <p>useCallback：
      <MemoChild
        memoizedCallback={memoizedCallback}
      />
      <div>
        <button onClick={handleClick}>不改变callback依赖</button>
      </div>
      <div>
        <button onClick={handleClick2}>改变callback依赖</button>
      </div>

    </p>
  </div>

};

const Other_useMemo_useCallback_Child = ({
  memoizedCallback,
}) => {
  console.log('子组件重新渲染了');
  return <span onClick={memoizedCallback}>子组件</span>
}
const MemoChild = React.memo(Other_useMemo_useCallback_Child)

export default Other_useMemo_useCallback;