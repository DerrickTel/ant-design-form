/*
 * @Author: Derrick 
 * @Date: 2019-04-10 10:57:08 
 * @Last Modified by: Derrick
 * @Last Modified time: 2019-04-29 14:48:04
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

class FormDataPicker extends Component {

  change = (e) => {
    const {onChange} = this.props
    onChange(e)
  }

  render() {
    const {value, disabled} = this.props;
    return (
      <DatePicker disabled={disabled} value={value} onChange={this.change} />
    );
  }
}

FormDataPicker.propsType = {
  disabled: PropTypes.bool, // 是否不可选
}

FormDataPicker.defalutProps = {
  disabled: false,
}

export default FormDataPicker;