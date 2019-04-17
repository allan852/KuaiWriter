import React, {Component} from 'react'
import {Col, Row, Layout} from 'antd'
import {withRouter} from 'react-router-dom'
import Search from "./Search";

const {Header} = Layout
const {remote} = window.require('electron')

class ContentHeader extends Component {

  toggleMaximize = (event) => {
    console.log('event', event.currentTarget)
    const win = remote.getCurrentWindow()
    win.isMaximized() ? win.unmaximize() : win.maximize()
  }

  render() {
    const {children} = this.props
    return (
      <Header
        style={{
          '-webkit-app-region': 'drag',
          background: '#ffffff',
          padding: '0 8px',
          borderBottom: '1px solid #e8e8e8'
        }}
        onDoubleClick={this.toggleMaximize}
      >
        <Row type="flex" justify="space-between" align="middle">
          <Col span={20} style={{textAlign: 'left'}}>
            <Search/>
          </Col>
          <Col span={4} style={{textAlign: 'right'}}>
            {children}
          </Col>
        </Row>
      </Header>
    )
  }
}

export default withRouter(ContentHeader)
