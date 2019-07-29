import React, { Component } from 'react';
import { Cascader } from 'antd';
import PropTypes from 'prop-types';

class FormCascader extends Component {
  change = (value, selectedOptions) => {
    const { onChange, cascaderSelectedOptions } = this.props;
    if(cascaderSelectedOptions) {
      onChange(selectedOptions)
    } else {
      onChange(value);
    }
  };

  render() {
    const { value, disabled, Message, cascaderOption = [], additional } = this.props;
    return (
      <Cascader
        {...additional}
        placeholder={Message}
        options={cascaderOption}
        disabled={disabled}
        value={value}
        onChange={this.change}
      />
    );
  }
}

FormCascader.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
};

FormCascader.defalutProps = {
  disabled: false,
  Message: '',
};

export default FormCascader;
