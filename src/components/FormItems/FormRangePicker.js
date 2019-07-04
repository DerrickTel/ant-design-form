import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';

const {RangePicker} = DatePicker

class FormRangePicker extends Component {

  /**
   * 返回的是一个数组[moment, moment]
   */
  change = (e) => {
    const {onChange} = this.props
    onChange(e)
  }

  render() {
    const {value, disabled} = this.props;
    return (
      <RangePicker disabled={disabled} value={value} onChange={this.change} />
    );
  }
}

FormRangePicker.propsType = {
  disabled: PropTypes.bool, // 是否不可选
}

FormRangePicker.defalutProps = {
  disabled: false,
}

export default FormRangePicker;