import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "asdfasdf@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "test@gmail.com",
    },
    {
      id: 3,
      username: "testest",
      email: "testtet@gmail.com",
    },
  ];

  return (
    <div>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
