import React, {Component, Fragment} from 'react'
import {Layout} from 'antd'
import BookMenu from "../common/components/BookMenu";
import {Route, withRouter, Switch} from "react-router-dom";
import Chapters from "./Chapters";
import BookInfo from "./BookInfo";
import Characters from "./Characters";
import Locations from "./Locations";
import Maps from "./Maps";
import MindMaps from "./MindMaps";

const {Sider} = Layout

class Book extends Component {
  state = {
    collapsed: false
  }

  render() {
    const {location, history, match} = this.props
    console.log('book', location, match)
    return (
      <Fragment>
        <Sider
          trigger={null}
          collapsible={false}
          collapsed={this.state.collapsed}
          width={70}
          style={{'-webkit-app-region': 'drag', paddingTop: '30px'}}
        >
          <BookMenu />
        </Sider>
        <Switch>
          <Route path={`${match.url}/:id`} component={BookInfo} />
          <Route path={`${match.url}/:id/chapters`} component={Chapters} />
          <Route path={`${match.url}/:id/characters`} component={Characters} />
          <Route path={`${match.url}/:id/locations`} component={Locations} />
          <Route path={`${match.url}/:id/maps`} component={Maps} />
          <Route path={`${match.url}/:id/mindmaps`} component={MindMaps} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(Book)