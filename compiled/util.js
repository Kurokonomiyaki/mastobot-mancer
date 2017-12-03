"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeArrays = exports.randomPick = undefined;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomPick = exports.randomPick = function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var mergeArrays = exports.mergeArrays = function mergeArrays(arr1, arr2) {
  if (Array.isArray(arr2)) {
    return [].concat((0, _toConsumableArray3.default)(arr1), (0, _toConsumableArray3.default)(arr2));
  }
  return arr1;
};