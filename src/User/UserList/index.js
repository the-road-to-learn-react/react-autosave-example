import React from 'react';

import styles from './styles.module.css';

const UserList = ({ users, selectedUserId, onSelectUserId }) => {
  return (
    <div className={styles.container}>
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
