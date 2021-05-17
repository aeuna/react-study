import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import './App.css';

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
      <Hello name='mihyun' color='blue' />
      <Hello color='blue' />
    </Wrapper>
  );
}

export default App;
