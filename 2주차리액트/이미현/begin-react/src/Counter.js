import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    console.log('+1');
    // 함수형 업데이트는 컴포넌트 최적화랑 관련있다
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    console.log('-1');
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
