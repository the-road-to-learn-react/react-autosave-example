import React from 'react';

import AutoSaveContext from './AutoSaveContext';

import styles from './styles.module.css';

const AutoSaveIndicator = () => {
  const { isAutoSaving } = React.useContext(AutoSaveContext);

  if (!isAutoSaving) {
    return null;
  }

  return <div className={styles.container}>Saving ...</div>;
};

export default AutoSaveIndicator;
