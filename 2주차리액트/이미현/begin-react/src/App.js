import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'rosybrown',
    padding: '1rem',
  };
  return (
    <Wrapper>
      {/* 주석입니다 */}
      <Hello
      // 태그 내부 주석
      />
      <div style={style}>{name}</div>
      <div className='gray-box'>{name}</div>
      <Hello
        name='mihyun'
        color='blue'
        isSpecial
        // 프랍스만 쓰고 값 할당 안하면 기본값 true
      />
      <Hello color='blue' />
      <Counter />
      <InputSample />
    </Wrapper>
  );
}

export default App;
