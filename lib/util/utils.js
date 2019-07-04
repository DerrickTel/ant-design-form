"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = isUrl;
exports.isColor = isColor;

/* eslint no-useless-escape:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

function isUrl(path) {
  return reg.test(path);
}

var colorReg = /[0-9a-fA-F]{6}/;

function isColor(path) {
  return colorReg.test(path);
}