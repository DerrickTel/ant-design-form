import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes, { object } from 'prop-types';

const { Option } = Select;
class FormSelectMultiple extends Component {
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
    const { onChange, selectCallback, useSelectCallback } = this.props;
    if(selectCallback && useSelectCallback) {
      selectCallback(e)
    }
    onChange(e);
  };

  render() {
    const { Message, value, disabled } = this.props;
    return (
      <Select
        disabled={disabled}
        value={value}
        placeholder={Message}
        // style={{ width: '170px' }}
        onChange={this.selectCurrency}
        mode="multiple"
      >
        {this.option()}
      </Select>
    );
  }
}

FormSelectMultiple.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
  option: PropTypes.arrayOf(object), // 选择框的选项
};

FormSelectMultiple.defalutProps = {
  disabled: false,
  Message: '',
  option: [],
};

export default FormSelectMultiple;
