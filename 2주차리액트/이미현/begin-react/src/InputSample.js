import React, { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존 input 객체 복사 **불변성 지키기
      [name]: value, // name키값에 value 할당
    });
  };

  /*
    [불변성 지키기]
    virtual dom과 원본 내용을 비교했을 때 바뀐 걸 알아봐야 update를 하게 되는데
    원본 내용 자체를 수정해버리면 바뀐걸 감지하지 못해서 업데이트가 안된다.
  */

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name='name'
        placeholder='이름'
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default InputSample;
