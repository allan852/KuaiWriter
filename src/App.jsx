import React, { Component } from 'react';
import {Layout} from 'antd';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Book from "./pages/Book";
import Index from "./pages/Index";
import style from './App.module.scss';

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout style={{height: '100vh'}}>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/book' component={Book} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
