import React, {Component, Fragment} from 'react'
import {Avatar, Button, Col, Icon, Input, Layout, List, Row} from 'antd'
import Quill from 'quill'

const {Header, Content, Sider} = Layout

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default class Chapters extends Component {
  constructor(props) {
    super(props)
    this.editorRef = React.createRef()
    this.state = {
      collapsed: false
    }
  }

  componentDidMount() {
    console.log('this.editorRef.current', this.editorRef.current)
    if (this.editorRef.current) {
      var options = {
        debug: 'info',
        modules: {
          toolbar: false,
        },
        placeholder: '输入正文',
        theme: 'bubble',
        bounds: document.body,
      };
      this.editor = new Quill(this.editorRef.current, options)
      this.editor.focus()
    }
  }

  render() {
    return (
      <Fragment>
        <Sider theme='light' width={260}>
          <Header style={{'-webkit-app-region': 'drag', background: '#fff', padding: '0'}}>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={20} style={{textAlign: 'center'}}>
                <Input
                  placeholder="搜索"
                  size="small"
                  prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  style={{width: '200px'}}
                />
              </Col>
              <Col span={4} style={{textAlign: 'left'}}>
                <Button size="small"><Icon type="plus"/></Button>
              </Col>
            </Row>
          </Header>
          <Layout style={{height: 'calc( 100% - 64px )', overflowY: 'scroll'}}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Layout>
        </Sider>
        <Layout style={{borderLeft: '1px solid #e8e8e8'}}>
          <Header style={{
            '-webkit-app-region': 'drag',
            // background: '#f0f2f5',
            background: '#ffffff',
            padding: 0,
            borderBottom: '1px solid #e8e8e8'
          }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{marginLeft: '16px'}}
            />
          </Header>
          <Layout style={{height: 'calc( 100% - 64px )', overflowY: 'scroll'}}>
            <Content style={{height: '100%', padding: '0', background: '#fff' }}>
              <div
                style={{
                  background: '#fff',
                  fontSize: '16px',
                }}
                ref={this.editorRef}
              >
              </div>
            </Content>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}