import React, { useRef, useState, useMemo, useCallback } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('active user 세는 중');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // 함수형 업데이트를 통한 컴포넌트 렌더링 최적화
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);
  // create할때만 함수 만들어줘.
  // 함수안에서 사용중인 상태들 다 의존성 값에 명시해줌.

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);
  // 삭제될때만 함수 만들어줘

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  // 토글할때만 함수 만들어줘

  /* 1-17. useMemo Hook */
  const count = useMemo(() => countActiveUsers(users), [users]);
  /* useMemo 파라미터 : (연산함수, deps 배열)
     의존성 배열값이 바뀌면 연산 실행, 바뀐거 없으면 연산값 재사용
  */

  /* 1-18. useCallback Hook */
  /*
    함수는 컴포넌트가 리렌더링 될 때마다 새로 만들어진다. 
    -> 매번 새로 만들어질 필요가 있을까? 함수를 재사용하자.
  */

  return (
    <Wrapper>
      {/* <Hello
        name='mihyun'
        color='blue'
        isSpecial
        // 프랍스만 쓰고 값 할당 안하면 기본값 true
      />
      <Hello color='blue' />
      <Counter />
      <InputSample /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>active 사용자 수 : {count}</div>
    </Wrapper>
  );
}

export default App;
