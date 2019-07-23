import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes, { object } from 'prop-types';

const { Option, OptGroup } = Select;
class FormSelect extends Component {
  option = (option = []) => {
    return option.map(v => {
      const { name, id } = v;
      return (
        <Option value={id} key={id}>
          {name}
        </Option>
      );
    });
  };

  optGroup = () => {
    const {option} = this.props;
    return option.map(value => {
      const {children, id, name} = value
      return(
        <OptGroup key={id} label={name}>
          {this.option(children)}
        </OptGroup>
      )
    })
  }

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
        {this.optGroup()}
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
