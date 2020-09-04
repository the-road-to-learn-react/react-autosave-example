import React from 'react';

const UserList = ({ users, selectedUserId, onSelectUserId }) => {
  return (
    <ul>
      {users.map((id) => (
        <li key={id}>
          <input
            type="radio"
            value={id}
            checked={id === selectedUserId}
            onChange={() => onSelectUserId(id)}
          />
          User ID: {id}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
