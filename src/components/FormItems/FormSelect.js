/*
 * @Author: Derrick
 * @Date: 2019-04-10 10:13:58
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-27 17:28:57
 */
import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes, { object } from 'prop-types';

const { Option } = Select;
class FormSelect extends Component {
  option = () => {
    const { option = [] } = this.props;
    return option.map(v => {
      const { showValue, severKey } = v;
      return (
        <Option value={severKey} key={severKey}>
          {showValue}
        </Option>
      );
    });
  };

  selectCurrency = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  render() {
    const { Message, value, disabled, additional } = this.props;
    return (
      <Select
        {...additional}
        disabled={disabled}
        value={value}
        placeholder={Message}
        style={{ width: '170px' }}
        onSelect={this.selectCurrency}
      >
        {this.option()}
      </Select>
    );
  }
}

FormSelect.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
  option: PropTypes.arrayOf(object), // 选择框的选项
};

FormSelect.defalutProps = {
  disabled: false,
  Message: '',
  option: [],
};

export default FormSelect;
