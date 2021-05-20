import React, { useEffect } from 'react';

/* 한 파일에 여러개의 컴포넌트 선언 가능 */
const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log('user 컴포 나타남. 마운트!');
    /* 컴포넌트가 만들어진 다음에, 
      또는 특정값이 바뀔때마다
      여기서 뭔가를 할거다 */
    return () => {
      console.log('user 컴포 사라짐. 언마운트! 이펙트 정리');
    };
  }, []);
  /* 
  *마운트: 컴포넌트가 처음 나타났을 때
  *언마운트: 컴포넌트 사라졌을 때
  useEffect 파라미터: (함수, 의존성(dependency) 배열)
    - 리턴되는 함수는 이펙트를 뒷정리해주는 cleanup 함수.
    - deps가 빈 배열일 경우 : 
      - 마운트할때만 이펙트 함수를 실행한다.
      - 언마운트에 cleanup함수를 실행한다.
    - deps에 값이 있으면, 그 값이 변경될때마다 이펙트 함수를 실행하고 cleanup한다.
    - 두번째 파리미터는 왜 이름이 '의존성 배열'일까? 처음에 이름 이해하기 어려웠음. 
      - deps배열 안에 값이 있냐 없냐에 따라 이펙트 작동 형태가 달라지기 때문에
        deps값에 의존하고 있어서 의존성 배열이라고 부르는 거 같음.
*/

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      {/* 
        id 파라미터를 넘겨야하는 상황.
        onRemove 함수를 즉시실행시키지 않고
        클릭된 후에 파라미터를 넘겨주면서 실행시키기 위해
        이렇게 콜백으로 작성함
      */}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default UserList;
