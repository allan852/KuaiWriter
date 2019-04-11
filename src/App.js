import React, { Component } from 'react';
import {Layout, Icon} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import Menu from './common/components/Menu';
import Chapters from './pages/Chapters';
import style from './App.module.scss';

const { Header, Sider, Content } = Layout;

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
            width={68}
            style={{'-webkit-app-region': 'drag', paddingTop: '30px'}}
          >
            <Menu />
          </Sider>
          <Route path='/' component={Chapters} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
