import React, { PureComponent, lazy, Suspense } from 'react';
import { Modal, Form, Button, Upload, Table, message } from 'antd';
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
import FormSelectMultiple from '../FormItems/FormSelectMultiple';

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
        return '查看' ;
      case 'import':
        return '导入';
      case 'create':
        return '新增' ;
      case 'edit':
        return '编辑' ;
      default:
        return '查看' ;
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
      selectSearchCallBack,
      imgUploadUrl,
      imgUploadHeaders,
      cascaderOption,
    } = this.props;

    let ShowType;
    return data.map(value => {
      const { 
        label, 
        key, 
        type, 
        Message, 
        option, 
        disabled, 
        pattern, 
        notRequired, 
        additional, 
        cascaderSelectedOptions, 
      } = value;
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
        case 'selectMultiple':
          ShowType = FormSelectMultiple;
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
                type: this.initialType(type),
              },
            ],
            initialValue: this.initialValue(showData?.[key], type),
            })(
              <ShowType
                additional={additional}
                option={option}
                Message={Message}
                disabled={!!(disabled || category === 'check')}
                selectSearch={selectSearch} // 文本框值变化时回调（针对ant-design-select-onSearch）
                selectSearchOption={selectSearchOption} // select-search对应的option([{severKey:'', showValue: ''}])
                selectSearchCallBack={selectSearchCallBack} // 选择之后的返回，默认是返回severKey
                imgUploadUrl={imgUploadUrl} // 图片上传的地址
                imgUploadHeaders={imgUploadHeaders} // 图片上传的header
                cascaderOption={cascaderOption} // 联级选择器的下拉框
                cascaderSelectedOptions={cascaderSelectedOptions} // 联级选择返回SelectedOptions而不是[ID]
              />
            )}
          </Item>
        </Suspense>
      );
    });
  };

  
  initialType = (type) => {
    if(type === 'cascader' || type === 'imageUploadList' || type === 'rangePicker' || type === 'selectMultiple') {
      return 'array'
    }
    if(type === 'datePicker') {
      return 'object'
    }
    return ('number' || 'string')
  }

  initialValue = (showData, type) => {
    if(showData === undefined || showData === null) {
      return undefined
    }
    if(showData === 0) {
      return  String(0)
    }
    if( type === 'datePicker' ) {
      return moment(showData)
    }
    if( typeof showData === 'number' ) {
      return String(showData)
    }
    if( type === 'richTextEditor' ) {
      return BraftEditor.createEditorState(showData)
    }
    return showData
  }

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

  upLoadProps = () => {
    const {fileUploadHeaders, fileUploadUrl, fileUploadCallback} = this.props
    const props = {
      name: 'file',
      action: fileUploadUrl,
      headers: fileUploadHeaders,
      onChange: info => {
        if (info.file.status !== 'uploading') {
          const { data } = info.file.response;
          this.setState({ data });
        }
        if (info.file.status === 'done') {
          fileUploadCallback(info.file.response)
          message.success(`${info.file.name}上传成功！`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name}上传失败！`);
        }
      },
    };
    return props;
  };

  importOk = () => {
    const { data } = this.state;
    const { importCallBack } = this.props;
    importCallBack(data);
  };

  render() {
    const { show, category = '', importColumns, data, downloadUrl } = this.props;
    const modalData = this.caseCategory(category);
    return (
      <Modal
        width="70%"
        {...this.props}
        visible={show}
        onCancel={this.closeModal}
        onOk={category === 'import' ? this.importOk : this.checkOk}
        title={modalData}
        footer={modalData === '查看' ? null : undefined}
        okText="确认"
        cancelText="取消"
      >
        {category === 'import' ? (
          <>
            <div style={{marginBottom: '20px'}}>
              <Button type="primary" onClick={() => window.location.href = downloadUrl}>
                下载模板
              </Button>
              <Upload {...this.upLoadProps()}>
                <Button style={{marginLeft: '20px'}}>上传Excel</Button>
              </Upload>
            </div>
            
            <Table dataSource={data} columns={importColumns} />
          </>
        ) : (
          <Form style={{ paddingTop: '20px' }} {...formItemLayout}>
            {this.form()}
          </Form>
        )}
      </Modal>
    );
  }
}

ModalView.propTypes = {
  onOk: PropTypes.func, // 弹框点击确定
  onCancel: PropTypes.func, // 隐藏弹框
  show: PropTypes.bool, // 是否显示弹窗
  category: PropTypes.string, // 弹框的类型（title显示
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // 数据类型; 位置:'@/components/constant/formView.js' 记得写注释; 格式: `f${文件名}`
  showData: PropTypes.object, // 查看或者编辑时的默认数据
  importCallBack: PropTypes.func, // 导入之后，点击确定的回调函数
  importColumns: PropTypes.array, // 导入时候显示表格的表头
  downloadUrl: PropTypes.string, // 下载的模板地址
  imgUploadHeaders: PropTypes.object, // 图片上传地址
  imgUploadUrl: PropTypes.string, // 图片上传header
  fileUploadHeaders: PropTypes.object, // 文件（暂时只支持excel）上传地址
  fileUploadUrl: PropTypes.string, // 文件（暂时只支持excel）上传header
  cascaderOption: PropTypes.array, // 联级选择器的下拉框
  cascaderSelectedOptions: PropTypes.bool, // 联级选择返回SelectedOptions而不是[ID]
};

ModalView.defaultProps = {
  show: false,
  category: 'check',
  showData: {},
  importCallBack: () => {},
  importColumns: [],
  downloadUrl: '',
};

export default Form.create()(ModalView);
