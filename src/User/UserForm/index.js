import React from 'react';

import styles from './styles.module.css';

import Dialog from '../../Dialog';
import useClickOutside from '../../hooks/useClickOutside';

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

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'birthday',
  'gender',
];

const UserForm = ({ user, onUpdateUser }) => {
  const [isPrompt, setIsPrompt] = React.useState(false);

  const [userModel, setUserModel] = usePropsSyncedState(user);

  const handleChanges = (key, value, withCommit) => {
    setUserModel({
      ...userModel,
      [key]: value,
    });

    if (withCommit) handleCommit();
  };

  const handleCommit = async () => {
    const hasAllRequired = REQUIRED_FIELDS.reduce((acc, value) => {
      if (!userModel[value]) {
        acc = false;
      }

      return acc;
    }, true);

    const hasChanged = user !== userModel;

    if (hasAllRequired && hasChanged) {
      await onUpdateUser(userModel);
    }
  };

  const boundaryRef = React.useRef();
  useClickOutside(boundaryRef, () => {
    const hasAllRequired = REQUIRED_FIELDS.reduce((acc, value) => {
      if (!userModel[value]) {
        acc = false;
      }

      return acc;
    }, true);

    const hasChanged = user !== userModel;

    if (!hasAllRequired && hasChanged) {
      setIsPrompt(true);
    }
  });

  const handleCancel = () => {
    setIsPrompt(false);
  };

  const handleDiscard = () => {
    setIsPrompt(false);
    setUserModel(user);
  };

  return (
    <div className={styles.container} ref={boundaryRef}>
      {isPrompt && (
        <Dialog>
          <Dialog.DialogHeader>Unsaved Changes</Dialog.DialogHeader>

          <Dialog.DialogContent>
            There are unsaved changes ...
          </Dialog.DialogContent>

          <Dialog.DialogFooter
            left={
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            }
            right={
              <button type="button" onClick={handleDiscard}>
                Discard
              </button>
            }
          />
        </Dialog>
      )}

      <div className={styles.form}>
        <label htmlFor="firstName">First Name*</label>
        <input
          id="firstName"
          type="text"
          value={userModel.firstName}
          onChange={(e) => {
            handleChanges('firstName', e.target.value, false);
          }}
          onBlur={handleCommit}
        />

        <label htmlFor="middleName">Middle Name</label>
        <input
          id="middleName"
          type="text"
          value={userModel.middleName}
          onChange={(e) =>
            handleChanges('middleName', e.target.value)
          }
          onBlur={handleCommit}
        />

        <label htmlFor="lastName">Last Name*</label>
        <input
          id="lastName"
          type="text"
          value={userModel.lastName}
          onChange={(e) => handleChanges('lastName', e.target.value)}
          onBlur={handleCommit}
        />

        <label htmlFor="birthday">Birthday*</label>
        <input
          id="birthday"
          type="date"
          value={toDomDate(userModel.birthday)}
          onChange={(e) =>
            handleChanges(
              'birthday',
              fromDomDate(e.target.value),
              true
            )
          }
        />

        <label htmlFor="gender">Gender*</label>
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
    </div>
  );
};

export default UserForm;
