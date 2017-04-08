import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../components/Home';
import AllVideos from '../components/AllVideos';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path='/videos' component={AllVideos} />
    <Redirect from='*' to='/' />
  </Router>
);
