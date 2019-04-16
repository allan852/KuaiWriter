import React, {Component, Fragment} from 'react'
import {Route, withRouter, Switch} from "react-router-dom";
import Chapters from "./Chapters";
import BookInfo from "./BookInfo";
import Characters from "./Characters";
import Locations from "./Locations";
import Maps from "./Maps";
import MindMaps from "./MindMaps";
import BookMenu from "../common/components/BookMenu";
import {Layout} from "antd";

const {Sider} = Layout

class Book extends Component {
  state = {
    collapsed: false
  }

  render() {
    const {location, match} = this.props
    console.log('book', location, match)
    return (
      <Fragment>
        <Sider
          trigger={null}
          collapsible={false}
          collapsed={this.state.collapsed}
          width={70}
          style={{'-webkit-app-region': 'drag', paddingTop: '50px'}}
        >
          <BookMenu />
        </Sider>
        <Switch>
          <Route path={`${match.url}/chapters`} component={Chapters} />
          <Route exact path={`${match.url}/characters`} component={Characters} />
          <Route exact path={`${match.url}/locations`} component={Locations} />
          <Route exact path={`${match.url}/maps`} component={Maps} />
          <Route exact path={`${match.url}/mindmaps`} component={MindMaps} />
          <Route exact path={`${match.url}`} component={BookInfo} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(Book)