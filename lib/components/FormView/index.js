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

var _FormSelectGroup = _interopRequireDefault(require("../FormItems/FormSelectGroup"));

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

var Item = _antd.Form.Item;
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 4
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
var tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

var FormView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormView, _PureComponent);

  function FormView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "showRequire", function (disabled, notRequired) {
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
          formData = _this$props.formData,
          showData = _this$props.showData,
          category = _this$props.category,
          selectSearch = _this$props.selectSearch,
          selectSearchOption = _this$props.selectSearchOption,
          selectSearchCallBack = _this$props.selectSearchCallBack,
          imgUploadHeaders = _this$props.imgUploadHeaders,
          imgUploadUrl = _this$props.imgUploadUrl,
          cascaderOption = _this$props.cascaderOption;
      var ShowType;
      return formData.map(function (value) {
        var label = value.label,
            key = value.key,
            type = value.type,
            Message = value.Message,
            option = value.option,
            disabled = value.disabled,
            pattern = value.pattern,
            notRequired = value.notRequired,
            additional = value.additional;

        if (!value) {
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

          case 'selectGroup':
            ShowType = _FormSelectGroup.default;
            break;

          case 'selectMultiple':
            ShowType = FormSelectMultiple;
            break;

          default:
            ShowType = _FormError.default;
        }

        return _react.default.createElement(Item, {
          label: label,
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
          additional: additional,
          showData: showData === null || showData === void 0 ? void 0 : showData[key],
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

        })));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initialType", function (type) {
      if (type === 'cascader' || type === 'imageUploadList' || type === 'rangePicker' || type === 'selectMultiple') {
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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var _this$props2 = _this.props,
          validateFieldsAndScroll = _this$props2.form.validateFieldsAndScroll,
          submitFun = _this$props2.submitFun;
      validateFieldsAndScroll(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          submitFun(values);
        }
      });
    });

    return _this;
  }

  _createClass(FormView, [{
    key: "render",
    value: function render() {
      var submitText = this.props.submitText;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_antd.Form, _extends({}, formItemLayout, this.props, {
        onSubmit: this.handleSubmit
      }), this.form(), _react.default.createElement("br", null), _react.default.createElement(Item, tailFormItemLayout, _react.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit"
      }, submitText))));
    }
  }]);

  return FormView;
}(_react.PureComponent);
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
  submitFun: _propTypes.default.func,
  // 点击搜索的回调函数
  formData: _propTypes.default.arrayOf(_propTypes.default.object) // 数据类型; 位置:'../constant/formView.js' 记得写注释; 格式: `f${文件名}`

};
FormView.defaultProps = {
  formData: [],
  submitFun: function submitFun() {}
};

var _default = _antd.Form.create({})(FormView);

exports.default = _default;