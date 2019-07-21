import React, { PureComponent, lazy, Suspense } from 'react';
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
import FormRichTextEditor from '../FormItems/FormRichTextEditor';

const { Item } = Form;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class FormView extends PureComponent {

  showRequire = (disabled, notRequired) => {
    if (disabled) {
      return false;
    }
    if (notRequired) {
      return false;
    }
    return true;
  };

  form = () => {

    const {
      form: { getFieldDecorator },
      formData,
      showData,
      category,
      selectSearch,
      selectSearchOption,
      selectSearchCallBack,
      cascaderOption
    } = this.props;

    let ShowType;

    return formData.map(value => {

      const { label, key, type, Message, option, disabled, pattern, notRequired } = value;
      if(!value){
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
        case 'richTextEditor':
          ShowType = FormRichTextEditor;
          break;
        case 'imageUploadList':
          ShowType = FormImageUploadList;
          break;
        case 'textArea':
          ShowType = FormTextArea;
          break;
        case 'selectSearch':
          ShowType = FormSelectSearch;
          break;
        case 'imageUpload':
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
          <Item label={label} key={key}>
            {getFieldDecorator(key, {
            rules: [
              {
                required: this.showRequire(disabled, notRequired),
                message: Message,
                pattern: pattern || undefined,
                type: (type === 'cascader' ? 'array' : type === 'datePicker') ? 'object' : 'string',
              },
            ],
            initialValue: showData?.[key] || undefined,
          })(
            <ShowType
              showData={showData?.[key]}
              option={option}
              Message={Message}
              disabled={!!(disabled || category === 'check')}
              selectSearch={selectSearch}
              selectSearchOption={selectSearchOption}
              selectSearchCallBack={selectSearchCallBack}
              cascaderOption={cascaderOption}
            />
          )}
          </Item>
        </Suspense>
      )
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {form: {validateFieldsAndScroll}, submitFun } = this.props
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        submitFun(values)
      }
    });
  };

  render() {
    const {submitText} = this.props;
    return (
      <>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {this.form()}
          <br />
          <Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              {submitText}
            </Button>
          </Item>
        </Form>
      </>
    )
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
FormView.propTypes = {
  submitFun: PropTypes.func, // 点击搜索的回调函数
  formData: PropTypes.arrayOf(PropTypes.object), // 数据类型; 位置:'../constant/formView.js' 记得写注释; 格式: `f${文件名}`
}

FormView.defaultProps = {
  formData: [],
  submitFun: () => {},
}

export default Form.create({})(FormView);