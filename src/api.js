let users = {
  1: {
    id: '1',
    firstName: 'Robin',
    middleName: '',
    lastName: 'Wieruch',
    birthday: new Date(),
    gender: 'MALE',
  },
  2: {
    id: '2',
    firstName: 'Dave',
    middleName: '',
    lastName: 'Davddis',
    birthday: new Date(),
    gender: 'MALE',
  },
};

export const fetchUsers = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(Object.keys(users)), 1000)
  );

export const fetchUser = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(users[id]), 1000)
  );

export const updateUser = (id, data) =>
  new Promise((resolve) => {
    const { [id]: user, ...rest } = users;

    if (!user) {
      return setTimeout(() => resolve(false), 1000);
    }

    const modifiedUser = { ...user, ...data };
    users = { ...rest, [id]: modifiedUser };

    return setTimeout(() => resolve(true), 1000);
  });
