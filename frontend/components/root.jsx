import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_form_container';
import WelcomeContainer from './welcome/welcome_container';
import CityListContainer from './city/city_list_container';
import HeaderContainer from './layout/header_container';
import App from './app/app';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };
  return(
    <Provider store={ store }>
      <Router history= { hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={WelcomeContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SignUpFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/home" component={CityListContainer} onEnter={_ensureLoggedIn} >

            </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
