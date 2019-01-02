import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/saved">Saved Articles</Link>
      </li>
    </ul>
  );
};

export default Nav;