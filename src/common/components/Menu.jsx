import React, {Component} from 'react'
import {Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import style from './Menu.module.scss'

export default class Menu extends Component {
  render() {
    return (
      <ul className={style.menu}>
        <li className={style.menu_item}>
          <NavLink to='/chapters' activeClassName={style.active}>
            <Icon type="file-text" theme='filled' className={style.icon}/>
          </NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink to='/books' activeClassName={style.active}>
            <Icon type="book" theme='filled' className={style.icon} />
          </NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink to='/names' activeClassName={style.active}>
            <Icon type="book" theme='filled' className={style.icon} />
          </NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink to='/addresses' activeClassName={style.active}>
            <Icon type="book" theme='filled' className={style.icon} />
          </NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink to='/maps' activeClassName={style.active}>
            <Icon type="book" theme='filled' className={style.icon} />
          </NavLink>
        </li>
        <li className={style.menu_item}>
          <NavLink to='/mindmaps' activeClassName={style.active}>
            <Icon type="book" theme='filled' className={style.icon} />
          </NavLink>
        </li>
      </ul>
    )
  }
}
