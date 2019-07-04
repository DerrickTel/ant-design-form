/*
 * @Author: Derrick 
 * @Date: 2019-04-10 10:57:08 
 * @Last Modified by: Derrick
 * @Last Modified time: 2019-05-09 17:41:02
 */
import React, { Component } from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';

const  { Group } = Radio;

class FormRadioGroup extends Component {

  change = (e) => {
    const {onChange} = this.props;
    onChange(e)
  }

  option = () => {
    const { option } = this.props;
    return option.map(value => {
      const { showValue, severKey } = value;
      return (
        <Radio value={severKey} key={severKey}>
          {showValue}
        </Radio>
      )
    })
  }

  render() {
    const {Message, value, disabled} = this.props;
    return (
      <Group disabled={disabled} placeholder={Message} value={value} onChange={this.change}>
        {this.option()}
      </Group>
    );
  }
}

FormRadioGroup.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
}

FormRadioGroup.defaultProps = {
  disabled: false,
  Message: '',
}

export default FormRadioGroup;