import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
};

const toDomDate = (date) => {
  if (!date) {
    return null;
  }

  return date.toISOString().split('T')[0];
};

const fromDomDate = (date) => new Date(date);

const UserForm = ({ user }) => {
  const [userModel, setUserModel] = React.useState({});

  const handleChange = (key, value) => {
    setUserModel({
      ...userModel,
      [key]: value,
    });
  };

  return (
    <form style={style}>
      <label>
        First Name:{' '}
        <input
          type="text"
          value={userModel.firstName || user.firstName}
          onChange={(event) =>
            handleChange('firstName', event.target.value)
          }
        />
      </label>
      <label>
        Middle Name:{' '}
        <input
          type="text"
          value={userModel.middleName || user.middleName}
          onChange={(event) =>
            handleChange('middleName', event.target.value)
          }
        />
      </label>
      <label>
        Last Name:{' '}
        <input
          type="text"
          value={userModel.lastName || user.lastName}
          onChange={(event) =>
            handleChange('lastName', event.target.value)
          }
        />
      </label>
      <label>
        Birthday:{' '}
        <input
          type="date"
          value={
            toDomDate(userModel.birthday) || toDomDate(user.birthday)
          }
          onChange={(event) =>
            handleChange('birthday', fromDomDate(event.target.value))
          }
        />
      </label>

      <label>
        Gender:{' '}
        <select
          selected={user.gender}
          onChange={(event) =>
            handleChange('gender', event.target.value)
          }
        >
          <option value="FEMALE">Female</option>
          <option value="MALE">Male</option>
          <option value="OTHER">Other</option>
        </select>
      </label>
    </form>
  );
};

export default UserForm;
