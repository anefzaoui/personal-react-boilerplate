import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <div className="content">
           {this.props.children}
        </div>
      </div>
    );
  }
}
