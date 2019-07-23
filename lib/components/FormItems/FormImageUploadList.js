"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var FormImageUploadList =
/*#__PURE__*/
function (_Component) {
  _inherits(FormImageUploadList, _Component);

  function FormImageUploadList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormImageUploadList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormImageUploadList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      imageList: [],
      previewImage: '',
      previewVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "uploadButton", function () {
      var loading = _this.state.loading;
      return _react.default.createElement("div", null, _react.default.createElement(_antd.Icon, {
        type: loading ? 'loading' : 'plus'
      }), _react.default.createElement("div", {
        className: "ant-upload-text"
      }, "\u70B9\u6211\u4E0A\u4F20"));
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
        var imageList = _this.state.imageList;
        imageList.push({
          imgSrc: info.file.response.data[0],
          isMain: 0
        });

        _this.setState({
          imageList: imageList,
          loading: false
        });

        onChange(imageList);
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

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.setState({
        previewVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previewImageList", function () {
      var imageList = _this.state.imageList;
      return imageList.map(function (value, index) {
        return _react.default.createElement("div", {
          key: value.imgSrc,
          style: {
            margin: '0 10px'
          }
        }, _react.default.createElement("img", {
          alt: "\u9884\u89C8\u56FE\u7247",
          style: {
            width: '100px',
            height: '100px',
            padding: '5px'
          },
          src: value.imgSrc,
          onClick: function onClick() {
            _this.previewImage(value.imgSrc);
          }
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setMain", function (i) {
      var List = _this.state.imageList;
      var imageList = List.map(function (value, index) {
        var rValue = value;
        rValue.isMain = 0;

        if (i === index) {
          rValue.isMain = 1;
        }

        return rValue;
      });

      _this.setState({
        imageList: imageList
      });
    });

    _defineProperty(_assertThisInitialized(_this), "cleanItem", function (i) {
      var imageList = _this.state.imageList;
      imageList.splice(i, 1);

      _this.setState({
        imageList: imageList
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previewImage", function (previewImage) {
      _this.setState({
        previewImage: previewImage,
        previewVisible: true
      });
    });

    return _this;
  }

  _createClass(FormImageUploadList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var showData = this.props.showData;
      this.setState({
        imageList: showData || []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          previewVisible = _this$state.previewVisible,
          previewImage = _this$state.previewImage,
          additional = _this$state.additional;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_antd.Row, {
        type: "flex"
      }, this.previewImageList(), _react.default.createElement(_antd.Upload, _extends({}, additional, {
        listType: "picture-card"
      }, this.upLoadProps()), this.uploadButton())), _react.default.createElement(_antd.Modal, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, _react.default.createElement("img", {
        alt: "\u9884\u89C8\u56FE\u7247",
        style: {
          width: '100%'
        },
        src: previewImage
      })));
    }
  }]);

  return FormImageUploadList;
}(_react.Component);

FormImageUploadList.propsType = {
  disabled: _propTypes.default.bool,
  // 是否不可选
  Message: _propTypes.default.string // 默认文字（placeholder

};
FormImageUploadList.defaultProps = {
  disabled: false,
  Message: ''
};
var _default = FormImageUploadList;
exports.default = _default;