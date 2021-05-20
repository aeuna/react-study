import React from 'react';

/* 한 파일에 여러개의 컴포넌트 선언 가능 */
const User = ({ user, onRemove, onToggle }) => {
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
