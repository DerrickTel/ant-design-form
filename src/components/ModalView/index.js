import React, { PureComponent, lazy, Suspense } from 'react';
import { Modal, Form } from 'antd';
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

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const { Item } = Form;


class ModalView extends PureComponent {

  // 返回title
  caseCategory = category => {
    switch (category) {
      case 'check':
        return { title: '查看' };
      case 'import':
        return { title: '导入', import: true };
      case 'create':
        return { title: '新增' };
      case 'edit':
        return { title: '编辑' };
      default:
        return { title: '查看' };
    }
  };

  showLabel = (type, label) => {
    const { category } = this.props;

    if (category === 'search') {
      if (type !== 'datePicker') {
        return undefined;
      }
      return label;
    }
    return label;
  };

  showRequire = (disabled, notRequired) => {
    const { category } = this.props;
    if (category === 'search') {
      return false;
    }
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
      data,
      showData,
      category,
      selectSearch,
      selectSearchOption,
      selectSearchCallBack
    } = this.props;

    let ShowType;
    return data.map(value => {
      const { label, key, type, Message, option, disabled, pattern, notRequired } = value;

      if (disabled)
        if (!value) {
          return null;
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
          <Item label={this.showLabel(type, label)} key={key}>
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
                option={option}
                Message={Message}
                disabled={!!(disabled || category === 'check')}
                selectSearch={selectSearch}
                selectSearchOption={selectSearchOption}
                selectSearchCallBack={selectSearchCallBack}
              />
            )}
          </Item>
        </Suspense>
      );
    });
  };

  checkOk = () => {
    const { onOk, form, form: { resetFields } } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (!err) {
        onOk(fieldsValue);
        resetFields();
      }
    });
  };

  closeModal = () => {
    const {
      onCancel,
      form: { resetFields },
    } = this.props;
    resetFields();
    onCancel();
  };

  render() {
    const { show, category = '' } = this.props;
    const modalData = this.caseCategory(category);
    return (
      <Modal
        visible={show}
        onCancel={this.closeModal}
        onOk={category === 'import' ? this.importOk : this.checkOk}
        title={modalData.title}
        width="70%"
        footer={modalData.title === '查看' ? null : undefined}
      >
        <Form style={{ paddingTop: '20px' }} {...formItemLayout}>
          {this.form()}
          {/* 测试数据暂时不删，等这个组件完美了再删 */}
          {/* <Item>
              {getFieldDecorator('key', {
                initialValue: '123',
              })(
                <Input />
              )}
            </Item> */}
        </Form>
      </Modal>
    );
  }
}

ModalView.propTypes = {
  onOk: PropTypes.func.isRequired, // 弹框点击确定
  onCancel: PropTypes.func.isRequired, // 隐藏弹框
  show: PropTypes.bool, // 是否显示弹窗
  category: PropTypes.string, // 弹框的类型（title显示
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // 数据类型; 位置:'@/components/constant/sormView.js' 记得写注释; 格式: `s${文件名}`
  showData: PropTypes.object, // 查看或者编辑时的默认数据
  importCallBack: PropTypes.func, // 导入之后，点击确定的回调函数
  importColums: PropTypes.array, // 导入时候显示表格的表头
  downloadUrl: PropTypes.string, // 下载的模板的文件名
};

ModalView.defaultProps = {
  show: false,
  category: 'check',
  showData: {},
  importCallBack: () => { },
  importColums: [],
  downloadUrl: '',
};

export default Form.create()(ModalView);
