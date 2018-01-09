import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
          <NavLink exact to="/" activeClassName="selected">Go home, son.</NavLink>
      </div>
    );
  }
}
