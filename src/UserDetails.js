import React from 'react';

import UserForm from './UserForm';
import AutoSaveContext from './AutoSaveContext';
import { fetchUser, updateUser } from './api';

const UserDetails = ({ userId }) => {
  const { setIsAutoSaving } = React.useContext(AutoSaveContext);

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
    setIsAutoSaving(true);
    await updateUser(userId, changes);
    setIsAutoSaving(false);

    await loadUser(userId);
  };

  if (!user) {
    return <div>Loading selected user ...</div>;
  }

  return <UserForm user={user} onUpdateUser={handleUpdateUser} />;
};

export default UserDetails;
