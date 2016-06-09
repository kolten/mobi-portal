import React from 'react';
import { Layout, Content } from 'react-mdl';

import './App.scss'

import Navbar from './components/nav/Navbar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Navbar />
          <Content style={{width:"100%"}}>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}
