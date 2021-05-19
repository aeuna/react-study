import React from 'react';
//컴포넌트를 불러와서 사용가능
import Hello from './Hello';
import Wrapper from './Wrapper';
//1. jsx는 항상 태그로 감쌀 것!!
//2. 변수를 보여줘야 할 경우 {} 사용

function App() {
  const name = 'kyeungeun';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <Wrapper>
    {/* Hello에서 name값을 사용하고 싶은 경우 props 사용 */}
      <Hello style={style} name= {name}/>
      <Hello style={style} />
      <div style={style}>{name}</div>
    </Wrapper>
  );
}

export default App;