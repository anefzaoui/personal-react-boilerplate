import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home';
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <Router basename="/">
      <Layout>
          <Route exact path="/" component={Home}/>
      </Layout>
  </Router>,
app);
