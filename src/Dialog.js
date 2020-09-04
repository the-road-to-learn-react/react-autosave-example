import React from 'react';
import ReactDOM from 'react-dom';

const DialogState = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return children(open, setOpen);
};

const dialogHeader = {
  boxSizing: 'border-box',
  padding: '0 4px 0 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '64px',
};

const DialogHeader = ({ children }) => (
  <div style={dialogHeader}>
    <h1>{children}</h1>
  </div>
);

const dialogContent = {
  boxSizing: 'border-box',
  flex: '1',
  padding: '14px 20px 14px 12px',
  boxShadow: '0 -3px 6px -3px #dddddd',
};

const DialogContent = ({ children }) => (
  <div style={dialogContent}>{children}</div>
);

const dialogFooter = {
  display: 'flex',
  justifyContent: 'space-between',
};

const DialogFooter = ({ left, right }) => (
  <div style={dialogFooter}>
    {left}
    {right}
  </div>
);

const blurryOverlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: '#ffffff',
  filter: 'opacity(0.9)',
  zIndex: '15',
};

const dialogContainer = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: '25',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '420px',
  minHeight: '360px',
  background: '#ffffff',
  boxShadow: '0 0 6px 0 #dddddd',
};

const Dialog = ({ children }) =>
  ReactDOM.createPortal(
    <>
      <div style={blurryOverlay} />
      <div style={dialogContainer}>{children}</div>
    </>,
    document.body
  );

Dialog.DialogState = DialogState;
Dialog.DialogHeader = DialogHeader;
Dialog.DialogFooter = DialogFooter;
Dialog.DialogContent = DialogContent;

export default Dialog;
