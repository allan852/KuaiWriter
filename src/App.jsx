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
            <Route path='/book/:id' component={Book} />
            <Route exact path='/' component={Index} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
