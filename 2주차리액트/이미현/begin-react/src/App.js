import React, { useRef, useCallback, useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './hooks/useInputs';

function countActiveUsers(users) {
  console.log('active user 세는 중');
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

/*
  < useReducer를 이용한 상태관리 >
  원래 사용하던 방법: useState -> 컴포넌트 내에서 관리하는 값이 딱 하나일 경우 편함
  reducer를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리할 수 있다.
  컴포넌트 밖이나 다른 파일에서 불러와서 사용가능!
  TODO: 상태를 컴포넌트에서 벗어난 전역에서 관리한다고 보면 되나? 그러면 리덕스인가? 

  reducer 함수: 새로운 상태를 만든다.
    - 현재상태, 취해야할 액션을 파라미터로 받는다.
    - 새로운 상태를 만드는 로직을 구현한다.
    - action 객체는 업데이트를 위한 정보를 갖고있다.
      - 보통 type값에 액션이름을 지정함
    - 액션은 우리가 이제껏 작성한 CRUD 등의 작업이다.
  
  useReducer 사용: 
  - const [state, dispatch] = useReducer(reducer, initialState);
    - dispatch는 액션을 발생시키는 함수
    - reducer 함수안에 모든 액션들이 모여 있잖아
    - 그래서 dispatch가 리듀서의 특정 액션로직이 작동할 수 있도록 특정 액션정보를 보내서 리듀서를 호출함.
*/

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        users: state.users.concat(action.user), // 원래 있던 users 상태 복사해서 그대로 새로운 사용자 이어붙여줌
      };
    case 'TOGGLE_USER':
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case 'REMOVE_USER':
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  /* 
  useReducer에 내가 업데이트 로직을 모아둔 리듀서 함수와 초기 상태값을 전달하고,
  사용하고자 하는 상태랑 특정 액션 호출할 dispatch 함수를 만든다.
  state는 초기값에서 시작해서 모든 액션 수행 결과가 반영된 최신상태를 담고있다.
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* 
    useRef: 인자 4는 기본값을 의미함.
    current라는 속성에 기본값을 세팅해둔다. 
    nextId를 찍어보면 {current: 4} 정보만 갖고있게된다.
  */
  const nextId = useRef(4);

  // state 객체에서 사용할 애들 빼줌.
  const { users } = state;

  /* useCallback Hook: change 이벤트가 발생했을 때만 이 함수를 만들어줘.
    => 쓸데없이 컴포넌트 리렌더링 될 때마다 함수를 다시 생성하지 않는다.
  */
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current, // useRef에 할당된 기본값에서부터 시작.
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
    // 업데이트 끝나면 바로 id 기본값에 +1해서 올려줌.
    // 그러면 다음엔 5부터 시작
  }, [username, email, reset]); // 사용중인 상태 의존성 값 명시

  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>active 사용자 수 : {count}</div>
    </>
  );
}

export default App;
