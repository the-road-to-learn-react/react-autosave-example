import React from 'react';

import AutoSaveContext from './AutoSaveContext';

const style = {
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  backgroundColor: '#000000',
  color: '#ffffff',
};

const AutoSaveIndicator = () => {
  const { isAutoSaving } = React.useContext(AutoSaveContext);

  if (!isAutoSaving) {
    return null;
  }

  return (
    <div style={style} className="container">
      Saving ...
    </div>
  );
};

export default AutoSaveIndicator;
