import React, { Component, lazy, Suspense } from 'react';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import FormInput from '../FormItems/FormInput';
import FormDataPicker from '../FormItems/FormDataPicker';
import FormRangePicker from '../FormItems/FormRangePicker';
import FormRadioGroup from '../FormItems/FormRadioGroup';
import FormSelect from '../FormItems/FormSelect';
import FormImageUploadList from '../FormItems/FormImageUploadList';
import FormTextArea from '../FormItems/FormTextArea';
import FormSelectSearch from '../FormItems/FormSelectSearch';
import FormImageUpload from '../FormItems/FormImageUpload';
import FormCascader from '../FormItems/FormCascader';
import FormError from '../FormItems/FormError';

const { Item } = Form;

class SearchView extends Component {

  showLabel = (type, label) => {
    if (type !== 'datePicker') {
      return undefined;
    }

    return label
  }

  form = () => {

    const { form: { getFieldDecorator }, data } = this.props;

    let ShowType;

    return data.map((value) => {

      const { label, key, type, Message, option, defaultValue, additional } = value;
      if (!value) {
        return null
      }
      switch (type) {
        case 'input':
          ShowType = FormInput;
          break;
        case 'select':
          ShowType = FormSelect;
          break;
        case 'datePicker':
          ShowType = FormDataPicker;
          break;
        case 'rangePicker':
          ShowType = FormRangePicker;
          break;
        case 'radioGroup':
          ShowType = FormRadioGroup;
          break;
        case 'imageUploadList':
          ShowType = FormImageUploadList;
          break;
        case 'textAre':
          ShowType = FormTextArea;
          break;
        case 'selectSearch':
          ShowType = FormSelectSearch;
          break;
        case 'ImageUpload':
          ShowType = FormImageUpload;
          break;
        case 'cascader':
          ShowType = FormCascader;
          break;
        default:
          ShowType = FormError;
      }
      return (
        <Suspense key={key} fallback={<div>Loading...</div>}>
          <Item label={this.showLabel(type, label)} key={key}>
            {getFieldDecorator(key, { initialValue: defaultValue })(
              <ShowType
                {...additional}
                option={option}
                Message={Message}
              />
            )}
          </Item>
        </Suspense>
      )
    })
  }

  search = () => {
    const { searchFun, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      searchFun(fieldsValue)
    })
  }

  reSet = () => {
    const { form: { resetFields } } = this.props;
    resetFields();
  }

  render() {
    return (
      <Form {...this.props} layout="inline">
        {this.form()}
        <Item>
          <Button type="primary" onClick={this.search}>查询</Button>
        </Item>
        <Item>
          <Button onClick={this.reSet}>重置</Button>
        </Item>
        {/* <Item>
          <Icon type="sync" />
        </Item> */}
      </Form>
    );
  }
}

/**
 * data:[{
 *  label: 前端通知用户，组件类型（暂时只支持展示dataPicker
 *  key: 与服务端交互的key
 *  type: 展示的类型 暂时支持[input, select, dataPicker(暂时不支持const { MonthPicker, WeekPicker } = DatePicker;)]
 *  Message: placeholder展示
 *  defaultValue: 默认值
 *  option: select 的option（具体参照ant design
 * }]
 */
SearchView.propTypes = {
  searchFun: PropTypes.func, // 点击搜索的回调函数
  data: PropTypes.arrayOf(PropTypes.object), // 数据类型; 位置:'@/components/constant/formView.js' 记得写注释; 格式: `f${文件名}`
}

SearchView.defaultProps = {
  data: [],
  searchFun: () => { },
}


export default Form.create({})(SearchView);;
