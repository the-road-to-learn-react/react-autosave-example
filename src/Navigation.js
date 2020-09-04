import React from 'react';
import { Link } from 'react-router-dom';

const listStyle = {
  display: 'flex',
};

const listItemStyle = {
  marginLeft: '8px',
};

const Navigation = () => (
  <nav>
    <ul style={listStyle}>
      <li style={listItemStyle}>
        <Link to="/">Home</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
