"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SearchView = _interopRequireDefault(require("./components/SearchView"));

var _formView = require("./constant/formView");

require("antd/dist/antd.css");

var _antd2 = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import FromView from './components/FormView'
var FromView = (0, _react.lazy)(function () {
  return import('./components/FormView');
});

var ReactDemo = function ReactDemo() {
  return _react.default.createElement(_antd2.Card, {
    title: "FromViewDemo"
  }, _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement("div", null, "Loading...")
  }, _react.default.createElement(FromView, {
    formData: [{
      label: 'select',
      key: 'select',
      type: 'select',
      option: [{
        severKey: '1',
        showValue: '处方药'
      }, {
        severKey: '0',
        showValue: '非处方药'
      }],
      Message: '请选择select'
    }, {
      label: 'input',
      key: 'input',
      type: 'input',
      option: [],
      Message: '输入input'
    }]
  })));
};

var _default = ReactDemo;
exports.default = _default;