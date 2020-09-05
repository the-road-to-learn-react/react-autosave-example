import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const Navigation = () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
