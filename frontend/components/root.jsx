import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import WelcomeContainer from './welcome/welcome_container';
import Welcome from './welcome/welcome';
import App from './app/app';

const Root = ({ store }) => {
  // const _ensureLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/login');
  //   }
  // };
  //
  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (currentUser) {
  //     replace('/');
  //   }
  // };
  return(
    <Provider store={ store }>
      <Router history= { hashHistory }>
        <Route path="/" component= { App }>
          <IndexRedirect to="/welcome" />
          <Route path="/welcome" component={WelcomeContainer} />
          <Route path="/login" component={LoginFormContainer}  />
          <Route path="/signup" component={SignUpFormContainer}  />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
