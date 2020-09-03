import React from 'react';

const UserList = ({ users, selectedUserId, onSelectUserId }) => {
  return (
    <select
      selected={selectedUserId}
      onChange={(event) => onSelectUserId(event.target.value)}
    >
      {users.map((id) => (
        <option key={id} value={id}>
          User ID: {id}
        </option>
      ))}
    </select>
  );
};

export default UserList;
