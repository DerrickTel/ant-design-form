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
          return {
            title: '查看'
          };

        case 'import':
          return {
            title: '导入',
            import: true
          };

        case 'create':
          return {
            title: '新增'
          };

        case 'edit':
          return {
            title: '编辑'
          };

        default:
          return {
            title: '查看'
          };
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
          selectSearchCallBack = _this$props.selectSearchCallBack;
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
            type: (type === 'cascader' ? 'array' : type === 'datePicker') ? 'object' : 'string'
          }],
          initialValue: (showData === null || showData === void 0 ? void 0 : showData[key]) || undefined
        })(_react.default.createElement(ShowType, {
          option: option,
          Message: Message,
          disabled: !!(disabled || category === 'check'),
          selectSearch: selectSearch,
          selectSearchOption: selectSearchOption,
          selectSearchCallBack: selectSearchCallBack
        }))));
      });
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

    return _this;
  }

  _createClass(ModalView, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          show = _this$props4.show,
          _this$props4$category = _this$props4.category,
          category = _this$props4$category === void 0 ? '' : _this$props4$category;
      var modalData = this.caseCategory(category);
      return _react.default.createElement(_antd.Modal, {
        visible: show,
        onCancel: this.closeModal,
        onOk: category === 'import' ? this.importOk : this.checkOk,
        title: modalData.title,
        width: "70%",
        footer: modalData.title === '查看' ? null : undefined
      }, _react.default.createElement(_antd.Form, _extends({
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
  // 数据类型; 位置:'@/components/constant/sormView.js' 记得写注释; 格式: `s${文件名}`
  showData: _propTypes.default.object,
  // 查看或者编辑时的默认数据
  importCallBack: _propTypes.default.func,
  // 导入之后，点击确定的回调函数
  importColums: _propTypes.default.array,
  // 导入时候显示表格的表头
  downloadUrl: _propTypes.default.string // 下载的模板的文件名

};
ModalView.defaultProps = {
  show: false,
  category: 'check',
  showData: {},
  importCallBack: function importCallBack() {},
  importColums: [],
  downloadUrl: ''
};

var _default = _antd.Form.create()(ModalView);

exports.default = _default;