"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FormView = _interopRequireDefault(require("./components/FormView"));

var _formView = require("./constant/formView");

require("antd/dist/antd.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactDemo = function ReactDemo() {
  return _react.default.createElement(_FormView.default, {
    formData: _formView.demo1,
    submitText: "\u63D0\u4EA4"
  });
};

var _default = ReactDemo;
exports.default = _default;