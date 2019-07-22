"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormInput = _interopRequireDefault(require("../FormItems/FormInput"));

var _FormDataPicker = _interopRequireDefault(require("../FormItems/FormDataPicker"));

var _FormRangePicker = _interopRequireDefault(require("../FormItems/FormRangePicker"));

var _FormRadioGroup = _interopRequireDefault(require("../FormItems/FormRadioGroup"));

var _FormSelect = _interopRequireDefault(require("../FormItems/FormSelect"));

var _FormImageUploadList = _interopRequireDefault(require("../FormItems/FormImageUploadList"));

var _FormTextArea = _interopRequireDefault(require("../FormItems/FormTextArea"));

var _FormSelectSearch = _interopRequireDefault(require("../FormItems/FormSelectSearch"));

var _FormImageUpload = _interopRequireDefault(require("../FormItems/FormImageUpload"));

var _FormCascader = _interopRequireDefault(require("../FormItems/FormCascader"));

var _FormError = _interopRequireDefault(require("../FormItems/FormError"));

var _FormRichTextEditor = _interopRequireDefault(require("../FormItems/FormRichTextEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 5
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
var Item = _antd.Form.Item;

var ModalView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalView, _PureComponent);

  function ModalView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "caseCategory", function (category) {
      switch (category) {
        case 'check':
          return '查看';

        case 'import':
          return '导入';

        case 'create':
          return '新增';

        case 'edit':
          return '编辑';

        default:
          return '查看';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showLabel", function (type, label) {
      var category = _this.props.category;

      if (category === 'search') {
        if (type !== 'datePicker') {
          return undefined;
        }

        return label;
      }

      return label;
    });

    _defineProperty(_assertThisInitialized(_this), "showRequire", function (disabled, notRequired) {
      var category = _this.props.category;

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
    });

    _defineProperty(_assertThisInitialized(_this), "form", function () {
      var _this$props = _this.props,
          getFieldDecorator = _this$props.form.getFieldDecorator,
          data = _this$props.data,
          showData = _this$props.showData,
          category = _this$props.category,
          selectSearch = _this$props.selectSearch,
          selectSearchOption = _this$props.selectSearchOption,
          selectSearchCallBack = _this$props.selectSearchCallBack,
          imgUploadUrl = _this$props.imgUploadUrl,
          imgUploadHeaders = _this$props.imgUploadHeaders,
          cascaderOption = _this$props.cascaderOption;
      var ShowType;
      return data.map(function (value) {
        var label = value.label,
            key = value.key,
            type = value.type,
            Message = value.Message,
            option = value.option,
            disabled = value.disabled,
            pattern = value.pattern,
            notRequired = value.notRequired;
        if (disabled) if (!value) {
          return null;
        }

        switch (type) {
          case 'input':
            ShowType = _FormInput.default;
            break;

          case 'select':
            ShowType = _FormSelect.default;
            break;

          case 'datePicker':
            ShowType = _FormDataPicker.default;
            break;

          case 'rangePicker':
            ShowType = _FormRangePicker.default;
            break;

          case 'radioGroup':
            ShowType = _FormRadioGroup.default;
            break;

          case 'richTextEditor':
            ShowType = _FormRichTextEditor.default;
            break;

          case 'imageUploadList':
            ShowType = _FormImageUploadList.default;
            break;

          case 'textArea':
            ShowType = _FormTextArea.default;
            break;

          case 'selectSearch':
            ShowType = _FormSelectSearch.default;
            break;

          case 'imageUpload':
            ShowType = _FormImageUpload.default;
            break;

          case 'cascader':
            ShowType = _FormCascader.default;
            break;

          default:
            ShowType = _FormError.default;
        }

        return _react.default.createElement(_react.Suspense, {
          key: key,
          fallback: _react.default.createElement("div", null, "Loading...")
        }, _react.default.createElement(Item, {
          label: _this.showLabel(type, label),
          key: key
        }, getFieldDecorator(key, {
          rules: [{
            required: _this.showRequire(disabled, notRequired),
            message: Message,
            pattern: pattern || undefined,
            type: _this.initialType(type)
          }],
          initialValue: _this.initialValue(showData === null || showData === void 0 ? void 0 : showData[key], type)
        })(_react.default.createElement(ShowType, {
          option: option,
          Message: Message,
          disabled: !!(disabled || category === 'check'),
          selectSearch: selectSearch // 文本框值变化时回调（针对ant-design-select-onSearch）
          ,
          selectSearchOption: selectSearchOption // select-search对应的option([{severKey:'', showValue: ''}])
          ,
          selectSearchCallBack: selectSearchCallBack // 选择之后的返回，默认是返回severKey
          ,
          imgUploadUrl: imgUploadUrl // 图片上传的地址
          ,
          imgUploadHeaders: imgUploadHeaders // 图片上传的header
          ,
          cascaderOption: cascaderOption // 联级选择器的下拉框

        }))));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initialType", function (type) {
      if (type === 'cascader' || type === 'imageUploadList') {
        return 'array';
      }

      if (type === 'datePicker') {
        return 'object';
      }

      return 'string';
    });

    _defineProperty(_assertThisInitialized(_this), "initialValue", function (showData, type) {
      if (showData === undefined || showData === null) {
        return undefined;
      }

      if (showData === 0) {
        return String(0);
      }

      if (type === 'datePicker') {
        return moment(showData);
      }

      if (typeof showData === 'number') {
        return String(showData);
      }

      if (type === 'richTextEditor') {
        return BraftEditor.createEditorState(showData);
      }

      return showData;
    });

    _defineProperty(_assertThisInitialized(_this), "checkOk", function () {
      var _this$props2 = _this.props,
          onOk = _this$props2.onOk,
          form = _this$props2.form,
          resetFields = _this$props2.form.resetFields;
      form.validateFields(function (err, fieldsValue) {
        if (!err) {
          onOk(fieldsValue);
          resetFields();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      var _this$props3 = _this.props,
          onCancel = _this$props3.onCancel,
          resetFields = _this$props3.form.resetFields;
      resetFields();
      onCancel();
    });

    _defineProperty(_assertThisInitialized(_this), "upLoadProps", function () {
      var _this$props4 = _this.props,
          fileUploadHeaders = _this$props4.fileUploadHeaders,
          fileUploadUrl = _this$props4.fileUploadUrl,
          fileUploadCallback = _this$props4.fileUploadCallback;
      var props = {
        name: 'file',
        action: fileUploadUrl,
        headers: fileUploadHeaders,
        onChange: function onChange(info) {
          if (info.file.status !== 'uploading') {
            var data = info.file.response.data;

            _this.setState({
              data: data
            });
          }

          if (info.file.status === 'done') {
            fileUploadCallback(info.file.response);

            _antd.message.success("".concat(info.file.name, "\u4E0A\u4F20\u6210\u529F\uFF01"));
          } else if (info.file.status === 'error') {
            _antd.message.error("".concat(info.file.name, "\u4E0A\u4F20\u5931\u8D25\uFF01"));
          }
        }
      };
      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "importOk", function () {
      var data = _this.state.data;
      var importCallBack = _this.props.importCallBack;
      importCallBack(data);
    });

    return _this;
  }

  _createClass(ModalView, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          show = _this$props5.show,
          _this$props5$category = _this$props5.category,
          category = _this$props5$category === void 0 ? '' : _this$props5$category,
          importColumns = _this$props5.importColumns,
          data = _this$props5.data,
          downloadUrl = _this$props5.downloadUrl;
      var modalData = this.caseCategory(category);
      return _react.default.createElement(_antd.Modal, {
        visible: show,
        onCancel: this.closeModal,
        onOk: category === 'import' ? this.importOk : this.checkOk,
        title: modalData,
        width: "70%",
        footer: modalData === '查看' ? null : undefined,
        okText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88"
      }, category === 'import' ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, _react.default.createElement(_antd.Button, {
        type: "primary",
        onClick: function onClick() {
          return window.location.href = downloadUrl;
        }
      }, "\u4E0B\u8F7D\u6A21\u677F"), _react.default.createElement(_antd.Upload, this.upLoadProps(), _react.default.createElement(_antd.Button, {
        style: {
          marginLeft: '20px'
        }
      }, "\u4E0A\u4F20Excel"))), _react.default.createElement(_antd.Table, {
        dataSource: data,
        columns: importColumns
      })) : _react.default.createElement(_antd.Form, _extends({
        style: {
          paddingTop: '20px'
        }
      }, formItemLayout), this.form()));
    }
  }]);

  return ModalView;
}(_react.PureComponent);

ModalView.propTypes = {
  onOk: _propTypes.default.func.isRequired,
  // 弹框点击确定
  onCancel: _propTypes.default.func.isRequired,
  // 隐藏弹框
  show: _propTypes.default.bool,
  // 是否显示弹窗
  category: _propTypes.default.string,
  // 弹框的类型（title显示
  data: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  // 数据类型; 位置:'@/components/constant/formView.js' 记得写注释; 格式: `f${文件名}`
  showData: _propTypes.default.object,
  // 查看或者编辑时的默认数据
  importCallBack: _propTypes.default.func,
  // 导入之后，点击确定的回调函数
  importColumns: _propTypes.default.array,
  // 导入时候显示表格的表头
  downloadUrl: _propTypes.default.string,
  // 下载的模板地址
  imgUploadHeaders: _propTypes.default.object,
  // 图片上传地址
  imgUploadUrl: _propTypes.default.string,
  // 图片上传header
  fileUploadHeaders: _propTypes.default.object,
  // 文件（暂时只支持excel）上传地址
  fileUploadUrl: _propTypes.default.string,
  // 文件（暂时只支持excel）上传header
  cascaderOption: _propTypes.default.array // 联级选择器的下拉框

};
ModalView.defaultProps = {
  show: false,
  category: 'check',
  showData: {},
  importCallBack: function importCallBack() {},
  importColumns: [],
  downloadUrl: ''
};

var _default = _antd.Form.create()(ModalView);

exports.default = _default;