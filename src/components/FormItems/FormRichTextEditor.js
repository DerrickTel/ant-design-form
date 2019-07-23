/*
 * @Author: Derrick 
 * @Date: 2019-04-10 10:57:08 
 * @Last Modified by: Derrick
 * @Last Modified time: 2019-05-09 17:41:02
 */
import React, { Component } from 'react';
import BraftEditor from 'braft-editor'
import PropTypes from 'prop-types';
import 'braft-editor/dist/index.css'
// import '@/global.less'

class FormRichTextEditor extends Component {

  change = (e) => {
    const {onChange} = this.props;
    onChange(e.toHTML())
  }

  render() {
    const {Message, value, disabled, additional} = this.props;
    return (
      <BraftEditor {...additional} className="editor-wrapper border1" disabled={disabled} placeholder={Message} value={value} onChange={this.change} />
      );
  }
}

FormRichTextEditor.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
}

FormRichTextEditor.defalutProps = {
  disabled: false,
  Message: '',
}

export default FormRichTextEditor;