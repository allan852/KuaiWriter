import React, {Component} from 'react'
import {Layout, Icon} from 'antd'
import BookMenu from "../common/components/BookMenu";

const {Header, Content, Sider} = Layout

export default class Characters extends Component {
  state = {
    collapsed: false
  }

  render() {
    return (
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
          Characters
        </Content>
      </Layout>
    )
  }
}