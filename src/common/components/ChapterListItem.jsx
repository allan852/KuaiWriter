import React, {Component} from 'react'
import {Icon, Input, Tooltip} from 'antd'
import PropTypes from 'prop-types'
import {NavLink, withRouter} from 'react-router-dom'
import style from './ChapterListItem.module.scss'

class ChapterListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  render() {
    const {location, match, item} = this.props
    return (
      <NavLink to={`${match.url}/${item.id}`} className={style.chapter_list_item} activeClassName={style.active}>
        {/*<div className={style.icon}>*/}
          {/*<Icon type="file-text" style={{fontSize: '24px'}} />*/}
        {/*</div>*/}
        <div className={style.content}>
          <div className={style.title}>{item.title}</div>
          <div className={style.desc}>{item.content}</div>
          <div className={style.footer}>2019/03/23</div>
        </div>
      </NavLink>
    )
  }
}

export default withRouter(ChapterListItem)
