import React from 'react';

const UserList = ({ users, selectedUserId, onSelectUserId }) => {
  return (
    <div className="container">
      <ul>
        {users.map((id) => (
          <li key={id}>
            <label>
              <input
                type="radio"
                value={id}
                checked={id === selectedUserId}
                onChange={() => onSelectUserId(id)}
              />
              User ID: {id}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
