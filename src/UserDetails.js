import React from 'react';

import UserForm from './UserForm';
import { fetchUser, updateUser } from './api';

const UserDetails = ({ userId }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!userId) return;

    const loadUser = async () => {
      setIsLoading(true);
      const result = await fetchUser(userId);
      setUser(result);
      setIsLoading(false);
    };

    loadUser();
  }, [userId]);

  if (isLoading) {
    return <div>Loading selected user ...</div>;
  }

  if (!user) {
    return null;
  }

  return <UserForm user={user} />;
};

export default UserDetails;
