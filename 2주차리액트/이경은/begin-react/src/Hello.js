//리액트 컴포 넌트
import React from 'react';

//1. props는 객체 형태로 전달 ,파리미터 를 통하여 조회가능 
//2. 

function Hello({style,name}) {
  return <div style={style}>안녕하세요{name}</div>
}
Hello.defaultProps = {
    name: '이름없음'
  }

export default Hello;