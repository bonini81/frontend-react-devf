import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Login from './views/Login';
import Home from './views/Home';
import Signup from './views/Signup';
import LinkUpload from './views/LinkUpload';

export default [
  <React.Fragment>
      <Route exact path="/" component={ Login } ></Route>
      <Route exact path="/home" component={ Home } ></Route>
      <Route exact path="/signup" component={ Signup } ></Route>
      <Route exact path="/linkupload" component={ LinkUpload } ></Route>
  </React.Fragment>
];