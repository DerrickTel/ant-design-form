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

var SearchView =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchView, _Component);

  function SearchView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "showLabel", function (type, label) {
      if (type !== 'datePicker') {
        return undefined;
      }

      return label;
    });

    _defineProperty(_assertThisInitialized(_this), "form", function () {
      var _this$props = _this.props,
          getFieldDecorator = _this$props.form.getFieldDecorator,
          data = _this$props.data;
      var ShowType;
      return data.map(function (value) {
        var label = value.label,
            key = value.key,
            type = value.type,
            Message = value.Message,
            option = value.option,
            defaultValue = value.defaultValue,
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

          case 'imageUploadList':
            ShowType = _FormImageUploadList.default;
            break;

          case 'textAre':
            ShowType = _FormTextArea.default;
            break;

          case 'selectSearch':
            ShowType = _FormSelectSearch.default;
            break;

          case 'ImageUpload':
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
          initialValue: defaultValue
        })(_react.default.createElement(ShowType, _extends({}, additional, {
          option: option,
          Message: Message
        })))));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "search", function () {
      var _this$props2 = _this.props,
          searchFun = _this$props2.searchFun,
          form = _this$props2.form;
      form.validateFields(function (err, fieldsValue) {
        searchFun(fieldsValue);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reSet", function () {
      var resetFields = _this.props.form.resetFields;
      resetFields();
    });

    return _this;
  }

  _createClass(SearchView, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_antd.Form, _extends({}, this.props, {
        layout: "inline"
      }), this.form(), _react.default.createElement(Item, null, _react.default.createElement(_antd.Button, {
        type: "primary",
        onClick: this.search
      }, "\u67E5\u8BE2")), _react.default.createElement(Item, null, _react.default.createElement(_antd.Button, {
        onClick: this.reSet
      }, "\u91CD\u7F6E")));
    }
  }]);

  return SearchView;
}(_react.Component);
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
  searchFun: _propTypes.default.func,
  // 点击搜索的回调函数
  data: _propTypes.default.arrayOf(_propTypes.default.object) // 数据类型; 位置:'@/components/constant/formView.js' 记得写注释; 格式: `f${文件名}`

};
SearchView.defaultProps = {
  data: [],
  searchFun: function searchFun() {}
};

var _default = _antd.Form.create({})(SearchView);

exports.default = _default;
;