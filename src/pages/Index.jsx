import React, {Component} from 'react'
import {Layout} from 'antd'
import {withRouter} from "react-router-dom";

const {Header, Content} = Layout

class Index extends Component {
  state = {
    collapsed: false
  }

  render() {
    const {location} = this.props
    console.log('Index', location)
    return (
      <Layout style={{'-webkit-app-region': 'drag'}}>
        <Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
          Index
        </Content>
      </Layout>
    )
  }
}

export default withRouter(Index)