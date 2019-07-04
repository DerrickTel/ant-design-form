/*
 * @Author: Derrick 
 * @Date: 2019-04-23 10:20:36 
 * @Last Modified by: Derrick
 * @Last Modified time: 2019-05-09 16:49:12
 */
import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;
class FormTextArea extends Component {

  change = (e) => {
    const {onChange} = this.props;
    onChange(e)
  }

  render() {
    const {Message, value, disabled} = this.props;
    return (
      <TextArea rows={4} disabled={disabled} placeholder={Message} value={value} onChange={this.change} />
      );
  }
}

FormTextArea.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
}

FormTextArea.defalutProps = {
  disabled: false,
  Message: '',
}

export default FormTextArea;