import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="container nav bg-info justify-content-center">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/"><h3>Home</h3></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/articles"><h3>Saved Articles</h3></Link>
      </li>
    </ul>
  );
};

export default Nav;