import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import App from './app/app';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/sign_up_form_container';

import HeaderContainer from './layout/header_container';
import CityListContainer from './city/city_list_container';
import CityContainer from './city/city_container';
import CityMemberContainer from './city/city_member_container';
import CityCalendarContainer from './city/city_calendar_container';
import CityEventContainer from './city/city_event_container';
import EventFormContainer from './city/event_form_container';

import UserContainer from './user/user_container';
import UserEditContainer from './user/user_edit_container';
import EventContainer from './event/event_container';

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
      replace('/cities');
    }
  };
  return(
    <Provider store={ store }>
      <Router history= { hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={WelcomeContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SignUpFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/cities" component={CityListContainer} onEnter={_ensureLoggedIn} />
          <Route path="/users/:userId" component={UserContainer} onEnter={_ensureLoggedIn} />
          <Route path="/users/:userId/edit" component={UserEditContainer} onEnter={_ensureLoggedIn} />
          <Route path="/city/:cityId" component={CityContainer} onEnter={_ensureLoggedIn} >
            <Route path="/city/:cityId/member" component={CityMemberContainer} onEnter={_ensureLoggedIn}/>
            <Route path="/city/:cityId/event" component={CityEventContainer} onEnter={_ensureLoggedIn} />
            <Route path="/city/:cityId/calendar" component={CityCalendarContainer} onEnter={_ensureLoggedIn} />
            <Route path="/city/:cityId/create" component={EventFormContainer} onEnter={_ensureLoggedIn} />
          </Route>
          <Route path="/event/:eventId" component={EventContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
