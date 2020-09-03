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

const usePropsSyncedState = (prop) => {
  const [model, setModel] = React.useState(prop);

  const propRef = React.useRef(prop);

  React.useEffect(() => {
    if (propRef.current !== prop) {
      setModel({ ...prop, ...model });

      propRef.current = prop;
    }
  }, [prop, model]);

  return [model, setModel];
};

const UserForm = ({ user, onUpdateUser }) => {
  const [userModel, setUserModel] = usePropsSyncedState(user);

  const handleChanges = (key, value, withCommit) => {
    setUserModel({
      ...userModel,
      [key]: value,
    });

    if (withCommit) handleCommit();
  };

  const handleCommit = async () => {
    await onUpdateUser(userModel);
  };

  return (
    <div style={style}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        value={userModel.firstName}
        onChange={(e) =>
          handleChanges('firstName', e.target.value, false)
        }
        onBlur={handleCommit}
      />

      <label htmlFor="middleName">Middle Name:</label>
      <input
        id="middleName"
        type="text"
        value={userModel.middleName}
        onChange={(e) => handleChanges('middleName', e.target.value)}
        onBlur={handleCommit}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        value={userModel.lastName}
        onChange={(e) => handleChanges('lastName', e.target.value)}
        onBlur={handleCommit}
      />

      <label htmlFor="birthday">Birthday:</label>
      <input
        id="birthday"
        type="date"
        value={toDomDate(userModel.birthday)}
        onChange={(e) =>
          handleChanges('birthday', fromDomDate(e.target.value), true)
        }
      />

      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        selected={user.gender}
        onChange={(e) =>
          handleChanges('gender', e.target.value, true)
        }
      >
        <option value="FEMALE">Female</option>
        <option value="MALE">Male</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
  );
};

export default UserForm;
