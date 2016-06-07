import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './App.jsx';
import Courses from './components/courses/Courses.jsx';
import ViewCourse from './components/courses/ViewCourse.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Resources from './components/Resources.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <Route component={App}>
        <IndexRedirect to="/courses" />
        <Route path="/courses" component={Courses} />
        <Route path="/courses/:id" component={ViewCourse} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/resources" component={Resources} />
        <Route path="/account" component={Resources} />
      </Route>
    </Route>
  </Router>
, document.getElementById('root'));
