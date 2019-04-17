import React, {Component, Fragment} from 'react'
import {Button, Icon, Layout, List} from 'antd'
import {Route, Switch, withRouter} from "react-router-dom";
import ChapterEditor from "../common/components/ChapterEditor";
import ChapterListItem from "../common/components/ChapterListItem";
import ContentHeader from "../common/components/ContentHeader";
import ChapterListHeader from "../common/components/ChapterListHeader";

const {Sider} = Layout

const data0 = [
  {
    id: 0,
    title: '封面',
  }
]

const data1 = [
  {
    id: 1,
    title: 'Ant Design Title 1',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team4',
  },
  {
    id: 5,
    title: 'Ant Design Title 5',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team5',
  },
  {
    id: 6,
    title: 'Ant Design Title 6',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team6',
  },
  {
    id: 7,
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 8,
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 9,
    title: 'Ant Design Title 1',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 10,
    title: 'Ant Design Title 2',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 11,
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 12,
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 13,
    title: 'Ant Design Title 1',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 14,
    title: 'Ant Design Title 2',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 15,
    title: 'Ant Design Title 3',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
  {
    id: 16,
    title: 'Ant Design Title 4',
    content: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
  },
];

class Chapters extends Component {
  render() {
    const {location, match} = this.props
    console.log('chapters route', location, match)
    return (
      <Fragment>
        <Layout style={{borderLeft: '1px solid #e8e8e8'}}>
          <ContentHeader>
            <Button><Icon type="plus"/></Button>
          </ContentHeader>
          <Layout style={{height: 'calc( 100% - 64px )', overflowY: 'scroll'}}>
            <Sider theme='light' width={330} style={{borderRight: '1px solid #e8e8e8'}}>
              <Layout style={{height: '100%', overflowY: 'scroll'}}>
                <List
                  itemLayout="horizontal"
                  dataSource={data0}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Icon type="file-text" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                      />
                    </List.Item>
                  )}
                />
                <List
                  header={<ChapterListHeader />}
                  itemLayout="horizontal"
                  dataSource={data1}
                  renderItem={item => (
                    <List.Item style={{padding: 0}}>
                      <ChapterListItem item={item}/>
                    </List.Item>
                  )}
                />
              </Layout>
            </Sider>
            <Switch>
              {
                data1.map(item => (
                  <Route exact path={`${match.url}/${item.id}`} render={() => <ChapterEditor chapter={item}/>} />
                ))
              }
              <Route exact path={`${match.url}`} component={ChapterEditor} />
            </Switch>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}

export default withRouter(Chapters)