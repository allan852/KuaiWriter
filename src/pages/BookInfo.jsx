import React, {Component, Fragment} from 'react'
import {Layout, Icon} from 'antd'
import {withRouter} from "react-router-dom";

const {Header, Content, Sider} = Layout

class BookInfo extends Component {
  state = {
    collapsed: false
  }

  render() {
    const {location, match} = this.props
    console.log('BookInfo', location, match)
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
          Book Info
        </Content>
      </Layout>
    )
  }
}

export default withRouter(BookInfo)