import React from 'react';

import styles from './styles.module.css';

import UserList from './UserList';
import UserDetails from './UserDetails';
import { fetchUsers } from '../api';

const Users = () => {
  const [users, setUsers] = React.useState(null);
  const [selectedUserId, setSelectedUserId] = React.useState(null);

  React.useEffect(() => {
    const loadUsers = async () => {
      const result = await fetchUsers();
      setUsers(result);
      setSelectedUserId(result[0]);
    };

    loadUsers();
  }, []);

  if (!users) {
    return <div className={styles.container}>Loading users ...</div>;
  }

  return (
    <>
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        onSelectUserId={setSelectedUserId}
      />
      <UserDetails userId={selectedUserId} />
    </>
  );
};

export default Users;
