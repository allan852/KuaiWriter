import React, {Component} from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import style from './Menu.module.scss'

export default class Menu extends Component {
  render() {
    const iconStyle = {fontSize: '24px', color: '#cccccc'}
    return (
      <ul className={style.menu}>
        <li className={style.menu_item}>
          <Link to='/chapters'>
            <Icon type="file-text" theme='filled' style={iconStyle}/>
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link to='/books'>
            <Icon type="book" theme='filled' style={iconStyle} />
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link to='/names'>
            <Icon type="book" theme='filled' style={iconStyle} />
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link to='/addresses'>
            <Icon type="book" theme='filled' style={iconStyle} />
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link to='/maps'>
            <Icon type="book" theme='filled' style={iconStyle} />
          </Link>
        </li>
        <li className={style.menu_item}>
          <Link to='/mindmaps'>
            <Icon type="upload" theme='filled' style={iconStyle} />
          </Link>
        </li>
      </ul>
    )
  }
}
