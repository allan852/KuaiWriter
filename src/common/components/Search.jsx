import React, {Component} from 'react'
import {Icon, Input, Tooltip} from 'antd'
import {withRouter} from 'react-router-dom'
import style from './Search.module.scss'

class BookMenu extends Component {
  render() {
    const {location, match} = this.props
    return (
      <div className={style.search}>
        <Input
          placeholder="搜索"
          prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
        />
      </div>

    )
  }
}

export default withRouter(BookMenu)
