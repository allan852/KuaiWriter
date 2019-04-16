import React, {Component} from 'react'
import {Icon, Tooltip} from 'antd'
import {NavLink, withRouter} from 'react-router-dom'
import style from './BookMenu.module.scss'

class BookMenu extends Component {
  render() {
    const {location, match} = this.props
    console.log('menu', location, match)
    return (
      <ul className={style.menu}>
        <li className={style.menu_item}>
          <Tooltip title="章节" placement="right">
            <NavLink to={`${match.url}/chapters`} activeClassName={style.active}>
              <Icon type="file-text" theme='outlined' className={style.icon}/>
            </NavLink>
          </Tooltip>
        </li>
        <li className={style.menu_item}>
          <Tooltip title="人物" placement="right">
            <NavLink exact to={`${match.url}/characters`} activeClassName={style.active}>
              <Icon type="team" theme='outlined' className={style.icon} />
            </NavLink>
          </Tooltip>
        </li>
        <li className={style.menu_item}>
          <Tooltip title="地点" placement="right">
            <NavLink exact to={`${match.url}/locations`} activeClassName={style.active}>
              <Icon type="environment" theme='outlined' className={style.icon} />
            </NavLink>
          </Tooltip>
        </li>
        <li className={style.menu_item}>
          <Tooltip title="地图" placement="right">
            <NavLink exact to={`${match.url}/maps`} activeClassName={style.active}>
              <Icon type="compass" theme='outlined' className={style.icon} />
            </NavLink>
          </Tooltip>
        </li>
        <li className={style.menu_item}>
          <Tooltip title="大纲" placement="right">
            <NavLink exact to={`${match.url}/mindmaps`} activeClassName={style.active}>
              <Icon type="profile" theme='outlined' className={style.icon} />
            </NavLink>
          </Tooltip>
        </li>
        <li className={style.menu_item}>
          <Tooltip title="书籍" placement="right">
            <NavLink exact to={`${match.url}`} activeClassName={style.active}>
              <Icon type="book" theme='outlined' className={style.icon} />
            </NavLink>
          </Tooltip>
        </li>
      </ul>
    )
  }
}

export default withRouter(BookMenu)
