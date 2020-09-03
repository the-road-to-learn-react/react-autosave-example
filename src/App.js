import React from 'react';

import UserList from './UserList';
import UserDetails from './UserDetails';
import { fetchUsers } from './api';

const style = {
  margin: '9px',
  padding: '16px',
  border: '1px solid #000000',
};

const App = () => {
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
    return <div style={style}>Loading users ...</div>;
  }

  return (
    <>
      <div style={style}>
        <UserList
          users={users}
          selectedUserId={selectedUserId}
          onSelectUserId={setSelectedUserId}
        />
      </div>
      <div style={style}>
        <UserDetails userId={selectedUserId} />
      </div>
    </>
  );
};

export default App;
