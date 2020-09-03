import React from 'react';

import UserForm from './UserForm';
import { fetchUser, updateUser } from './api';

const App = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const loadUser = async () => setUser(await fetchUser('1'));

    loadUser();
  }, []);

  if (!user) {
    return <div>Loading ...</div>;
  }

  return <UserForm user={user} />;
};

export default App;
