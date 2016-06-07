import React from 'react';
import { Layout, Content } from 'react-mdl';

import Navbar from './components/nav/Navbar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Navbar />
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}
