import React from 'react';

import UserForm from './UserForm';
import { fetchUser, updateUser } from './api';

const UserDetails = ({ userId }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (!userId) return;

    const loadUser = async () => {
      setUser(null);
      const result = await fetchUser(userId);
      setUser(result);
    };

    loadUser();
  }, [userId]);

  if (!user) {
    return <div>Loading selected user ...</div>;
  }

  return <UserForm user={user} />;
};

export default UserDetails;
