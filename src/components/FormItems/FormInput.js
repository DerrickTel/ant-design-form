/*
 * @Author: Derrick 
 * @Date: 2019-04-10 10:57:08 
 * @Last Modified by: Derrick
 * @Last Modified time: 2019-05-09 17:41:02
 */
import React, { Component } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

class FormInput extends Component {

  change = (e) => {
    const {onChange} = this.props;
    onChange(e)
  }

  render() {
    const {Message, value, disabled, additional} = this.props;
    return (
      <Input {...additional} disabled={disabled} placeholder={Message} value={value} onChange={this.change} />
      );
  }
}

FormInput.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
}

FormInput.defalutProps = {
  disabled: false,
  Message: '',
}

export default FormInput;