import React from 'react';
import { Link } from 'react-router';
import { Header, Navigation } from 'react-mdl';

export default class Navbar extends React.Component {
  render() {
    return (
      <Header
        title={'Mobi'}>
        <Navigation>
          <Link to="/courses">Courses</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/account">Account</Link>
        </Navigation>
      </Header>
    );
  }
}
