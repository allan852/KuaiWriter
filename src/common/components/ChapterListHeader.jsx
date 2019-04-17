import React, {Component} from 'react'
import {Icon, Input, Tooltip} from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {NavLink, withRouter} from 'react-router-dom'
import style from './ChapterListHeader.module.scss'

class ChapterListHeader extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      title: props.title || "第一卷"
    }
    this.inputElement = React.createRef()
  }

  updateTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  toggleEditing = () => {
    this.setState(prevState => ({
      editing: !prevState.editing
    }))
  }

  enableEditing = () => {
    this.setState({
      editing: true
    }, () => {
      this.inputElement.current.focus()
    })
  }

  render() {
    const {location, match, item} = this.props
    const {editing, title} = this.state
    if (editing) {
      return (
        <div className={classNames(style.chapter_list_header, style.editing)}>
          <Input.TextArea
            autosize
            ref={this.inputElement}
            onBlur={this.toggleEditing}
            onPressEnter={this.toggleEditing}
            onChange={this.updateTitle}
            value={title}
          />
        </div>
      )
    }
    return (
      <div className={style.chapter_list_header}>
        <div className={style.title} onDoubleClick={this.enableEditing}>{title}</div>
        <div className={style.editor_indicator} onClick={this.enableEditing}><Icon type="edit" /></div>
      </div>
    )
  }
}

export default withRouter(ChapterListHeader)
