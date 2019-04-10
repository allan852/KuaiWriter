import React, { Component } from 'react';
import {Layout, Menu, Icon} from 'antd';
import './App.css';

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
      <Layout style={{height: '100vh'}}>
        <Sider
          trigger={null}
          collapsible={false}
          collapsed={this.state.collapsed}
          width={68}
          style={{'-webkit-app-region': 'drag', paddingTop: '30px'}}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
