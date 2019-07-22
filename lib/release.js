"use strict";

var _FormView = _interopRequireDefault(require("./components/FormView"));

var _SearchView = _interopRequireDefault(require("./components/SearchView"));

var _ModalView = _interopRequireDefault(require("./components/ModalView"));

require("antd/dist/antd.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  SearchView: _SearchView.default,
  FormView: _FormView.default,
  ModalView: _ModalView.default
};