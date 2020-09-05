import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';

const DialogState = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return children(open, setOpen);
};

const DialogHeader = ({ children }) => (
  <div className={styles.header}>
    <h1>{children}</h1>
  </div>
);

const DialogContent = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

const DialogFooter = ({ left, right }) => (
  <div className={styles.footer}>
    {left}
    {right}
  </div>
);

const Dialog = ({ children }) =>
  ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.dialog}>{children}</div>
    </>,
    document.body
  );

Dialog.DialogState = DialogState;
Dialog.DialogHeader = DialogHeader;
Dialog.DialogFooter = DialogFooter;
Dialog.DialogContent = DialogContent;

export default Dialog;
