"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../util/utils");

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

var FormImageUpload =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormImageUpload, _PureComponent);

  function FormImageUpload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormImageUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormImageUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "uploadButton", function () {
      var loading = _this.state.loading;
      return _react.default.createElement("div", null, _react.default.createElement(_antd.Icon, {
        type: loading ? 'loading' : 'plus'
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, "\u70B9\u6211\u4E0A\u4F20\u56FE\u7247"));
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (info) {
      if (info.file.status === 'uploading') {
        _this.setState({
          loading: true
        });

        return;
      }

      if (info.file.status === 'done') {
        var onChange = _this.props.onChange;
        console.log(onChange);

        _this.setState({
          imageUrl: info.file.response.data,
          loading: false
        });

        onChange(info.file.response.data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "beforeUpload", function (file) {
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        _antd.message.error('图片大小不能大于2MB!');
      }

      return isLt2M;
    });

    _defineProperty(_assertThisInitialized(_this), "upLoadProps", function () {
      var _this$props = _this.props,
          imgUploadUrl = _this$props.imgUploadUrl,
          imgUploadHeaders = _this$props.imgUploadHeaders;
      var props = {
        name: 'file',
        action: imgUploadUrl,
        headers: imgUploadHeaders,
        onChange: _this.handleChange,
        showUploadList: false,
        beforeUpload: _this.beforeUpload
      };
      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "change", function (e) {
      var onChange = _this.props.onChange;
      onChange(e);
    });

    _defineProperty(_assertThisInitialized(_this), "showView", function () {
      // const { imageUrl } = this.state;
      // const { value } = this.props;
      // const style = { width: 100, height: 100 };
      // if (imageUrl) {
      //   return <img style={style} src={imageUrl} alt="resource" />;
      // }
      // if (isUrl(value)) {
      //   return <img style={style} src={value} alt="resource" />;
      // }
      // if (isColor(value)) {
      //   return <div style={{ backgroundColor: `#${value}`, height: 100, width: 100 }} />;
      // }
      return _this.uploadButton();
    });

    return _this;
  }

  _createClass(FormImageUpload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          Message = _this$props2.Message,
          value = _this$props2.value,
          disabled = _this$props2.disabled,
          isHaveInput = _this$props2.isHaveInput,
          additional = _this$props2.additional;
      return _react.default.createElement("div", {
        style: {
          display: 'flex'
        }
      }, isHaveInput === true ? _react.default.createElement(_antd.Input, {
        disabled: disabled,
        placeholder: Message,
        value: value,
        onChange: this.change
      }) : '', value && _react.default.createElement("img", {
        onClick: function onClick() {
          _this2.setState({
            visible: true
          });
        },
        style: {
          width: 100,
          height: 100,
          marginRight: 20
        },
        src: value,
        alt: "resource"
      }), _react.default.createElement(_antd.Upload, _extends({}, additional, {
        disabled: disabled,
        listType: "picture-card"
      }, this.upLoadProps()), this.showView()), _react.default.createElement(_antd.Modal, {
        footer: null,
        onCancel: function onCancel() {
          _this2.setState({
            visible: false
          });
        },
        visible: this.state.visible
      }, _react.default.createElement("img", {
        style: {
          maxWidth: '100%'
        },
        src: value
      })));
    }
  }]);

  return FormImageUpload;
}(_react.PureComponent);

FormImageUpload.propsType = {
  disabled: _propTypes.default.bool,
  // 是否不可选
  Message: _propTypes.default.string // 默认文字（placeholder

};
FormImageUpload.defaultProps = {
  disabled: false,
  Message: ''
};
var _default = FormImageUpload;
exports.default = _default;