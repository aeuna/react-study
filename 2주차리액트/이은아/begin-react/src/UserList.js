import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
};

const UserList = ({ users }) => {
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
