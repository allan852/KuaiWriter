import React, { Component } from 'react';
import {Layout, Icon} from 'antd';
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './common/components/Menu';
import Chapters from './pages/Chapters';
import Books from "./pages/Books";
import Names from "./pages/Names";
import Addresses from "./pages/Addresses";
import Maps from "./pages/Maps";
import MindMaps from "./pages/MindMaps";
import style from './App.module.scss';

const { Sider } = Layout;

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
          <Sider
            trigger={null}
            collapsible={false}
            collapsed={this.state.collapsed}
            width={70}
            style={{'-webkit-app-region': 'drag', paddingTop: '30px'}}
          >
            <Menu />
          </Sider>
          <Route path='/chapters' component={Chapters} />
          <Route path='/books' component={Books} />
          <Route path='/names' component={Names} />
          <Route path='/addresses' component={Addresses} />
          <Route path='/maps' component={Maps} />
          <Route path='/mindmaps' component={MindMaps} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
