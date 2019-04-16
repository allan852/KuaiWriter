import React, {Component} from 'react'
import {Layout} from 'antd'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import Quill from "quill";
import style from './ChapterEditor.module.scss'

const {Content} = Layout

class ChapterEditor extends Component {
  static propTypes = {
    chapter: PropTypes.object
  }

  static defaultProps = {
    chapter: {}
  }

  constructor(props) {
    super(props)
    this.editorRef = React.createRef()
    this.state = {
      collapsed: false
    }
  }

  componentDidMount() {
    const {chapter} = this.props
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
      this.editor.setText(chapter.content)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {chapter} = this.props
    if (prevProps.chapter.id === chapter.id) return
    if (this.editor) {
      // this.editor.focus()
      this.editor.setText(chapter.content)
    }
  }

  render() {
    const {location, match, chapter} = this.props
    console.log('ChapterEditor', location, match, chapter)
    return (
      <Content className={style.chapter_editor_wrap}>
        <div
          style={{
            background: '#fff',
            fontSize: '16px',
          }}
          ref={this.editorRef}
        >
        </div>
      </Content>

    )
  }
}

export default withRouter(ChapterEditor)
