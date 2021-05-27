import React,{useState, useRef } from 'react';

function InputSample(){
    const [inputs,setInputs] = useState({
        name:"",
        nickname: ""
    });
    
    const nameInput = useRef();
    const {name,nickname} = inputs; // 비구조화 할당을 통해 값 추출
    
    //이벤트 객체 e를 파라미터로 받아 와서 사용 가능 이객체의 e.target은 이벤트가 발생하 Dom 인 inputDom를 가르키게 된다.
    //즉, e.target.vaule를 조회하면 현재 imput 에 입력한 값이 무엇인지 알수 있다.
    const onChange = (e) =>{
        //setText(e.target.value);
        const {value,name} = e.target;
        setInputs({
            ...inputs ,// 기존의 input 객체를 복사 spread 문법
            [name] :value //name 키를 가진 값을 value로 지정
        });
    }
    
    const onRest = () =>{
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus(); //초기화를 누르면 focus 부분이 이름에 위치
    }
    
    return(
        <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput} //
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onRest}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>

    );
}

export default InputSample;