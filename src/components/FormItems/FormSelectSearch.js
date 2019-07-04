import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes, { object } from 'prop-types';

const { Option } = Select;
let timeout;
class FormSelectSearch extends Component {

  option = () => {
    const { selectSearchOption = [] } = this.props;
    return selectSearchOption.map(v => {
      const { showValue, severKey } = v;
      return (
        <Option value={severKey} key={severKey}>
          {showValue}
        </Option>
      );
    });
  };

  selectCurrency = (value, option) => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    const { onChange, selectSearchCallBack } = this.props;
    onChange(`${option.props.children}`);
    timeout = setTimeout(selectSearchCallBack(option.key), 300);
  };

  render() {
    const { Message, disabled, selectSearch, value } = this.props;
    return (
      <Select
        showSearch
        disabled={disabled}
        value={value}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        placeholder={Message}
        style={{ width: '170px' }}
        onSelect={this.selectCurrency}
        onSearch={selectSearch}
      >
        {this.option()}
      </Select>
    );
  }
}

FormSelectSearch.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
  option: PropTypes.arrayOf(object), // 选择框的选项
};

FormSelectSearch.defalutProps = {
  disabled: false,
  Message: '',
  option: [],
};

export default FormSelectSearch;
