import React from 'react';

import UserForm from './UserForm';
import { fetchUser, updateUser } from './api';

const UserDetails = ({ userId }) => {
  const [user, setUser] = React.useState(null);

  const loadUser = React.useCallback(async (id) => {
    setUser(await fetchUser(id));
  }, []);

  React.useEffect(() => {
    setUser(null);

    if (userId) {
      loadUser(userId);
    }
  }, [loadUser, userId]);

  const handleUpdateUser = async (changes) => {
    await updateUser(userId, changes);

    await loadUser(userId);
  };

  if (!user) {
    return <div>Loading selected user ...</div>;
  }

  return <UserForm user={user} onUpdateUser={handleUpdateUser} />;
};

export default UserDetails;
