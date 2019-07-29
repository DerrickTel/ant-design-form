"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ModalView = _interopRequireDefault(require("./components/ModalView"));

var _formView = require("./constant/formView");

require("antd/dist/antd.css");

var _antd2 = require("antd");

var _SearchView = _interopRequireDefault(require("./components/SearchView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormView = (0, _react.lazy)(function () {
  return import('./components/FormView');
});
var dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  id: 'asd111asd111',
  age2: 'https://jb-avatar.jianbaolife.com/2019/7/19/1563507778428_FuPKAyd5_VrIdz52s4pQzKe7CzLo.jpg'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  id: 'asd222asd222'
}];

var ReactDemo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ReactDemo, _PureComponent);

  function ReactDemo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReactDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReactDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false,
      showData: {},
      category: 'check'
    });

    _defineProperty(_assertThisInitialized(_this), "clickModal", function (category, showData) {
      _this.setState({
        visible: true,
        category: category,
        showData: showData
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideModal", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "columns", function () {
      return [{
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: '操作',
        render: function render(text, record) {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_antd2.Button, {
            onClick: function onClick() {
              return _this.clickModal('check', record);
            },
            type: "primary"
          }, "\u67E5\u770B"), _react.default.createElement(_antd2.Divider, {
            type: "vertical"
          }), _react.default.createElement(_antd2.Button, {
            onClick: function onClick() {
              return _this.clickModal('edit', record);
            }
          }, "\u7F16\u8F91"));
        }
      }];
    });

    return _this;
  }

  _createClass(ReactDemo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          visible = _this$state.visible,
          category = _this$state.category,
          showData = _this$state.showData;
      return _react.default.createElement(_antd2.Card, {
        title: "ModalViewDemo"
      }, _react.default.createElement(_SearchView.default, {
        style: {
          margin: '100px'
        },
        searchFun: function searchFun(params) {
          return console.log(params);
        },
        data: [{
          label: '所有订单',
          key: 'pharmacyType',
          type: 'select',
          defaultValue: '所有订单',
          option: [{
            severKey: 'allList',
            showValue: '所有订单'
          }, {
            severKey: 'unpay',
            showValue: '待付款订单'
          }, {
            severKey: 'cancel',
            showValue: '订单取消'
          }, {
            severKey: 'returnGoods',
            showValue: '退订/退货'
          }, {
            severKey: 'success',
            showValue: '交易成功'
          }, {
            severKey: 'paid',
            showValue: '已付款'
          }]
        }, {
          label: '开始时间',
          key: 'startTime',
          type: 'datePicker',
          Message: '请选择时间'
        }, {
          label: '结束时间',
          key: 'endTime',
          type: 'datePicker',
          Message: '请选择时间'
        }, {
          label: '关键字',
          key: 'keywords',
          type: 'input',
          Message: '请输入商品名称'
        }]
      }), _react.default.createElement(_antd2.Button, {
        onClick: function onClick() {
          return _this2.clickModal('create', {});
        }
      }, "\u6211\u662F\u65B0\u589E"), _react.default.createElement(_ModalView.default, {
        onOk: function onOk(params) {
          console.log(params);

          _this2.setState({
            visible: false
          });
        },
        onCancel: function onCancel() {
          _this2.setState({
            visible: false
          });
        },
        show: visible,
        category: category,
        data: [{
          label: 'ID（无需录入）',
          key: 'id',
          type: 'select',
          Message: 'ID自动录入无需您操心~',
          disabled: true,
          additional: {
            style: {
              width: 10
            }
          }
        }, {
          label: '姓名',
          key: 'name',
          type: 'input',
          Message: '请输入姓名'
        }, {
          label: '年龄',
          key: 'age',
          type: 'select',
          Message: '请选择年龄',
          option: [{
            severKey: '32',
            showValue: '12岁'
          }, {
            severKey: '42',
            showValue: '13岁'
          }]
        }, {
          label: '年龄',
          key: 'age2',
          type: 'imageUpload',
          Message: '请选择年龄'
        }],
        showData: showData
      }), _react.default.createElement(_antd2.Table, {
        dataSource: dataSource,
        columns: this.columns()
      }));
    }
  }]);

  return ReactDemo;
}(_react.PureComponent);

var _default = ReactDemo;
exports.default = _default;