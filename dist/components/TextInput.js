"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// UI requirements
// AddIcon on the left
// Install MUI icons library npm install @mui/icons-material
// TextInput on the right 
// Event should be fired when the user his the 'return' key
// The text should be cleared when the user hits the 'return' key
// Test with Storybook 
var TextInput = function TextInput(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      value = _ref.value;
  // paper
  // AddIcon
  // InputBase
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Paper, {
    component: "form",
    onSubmit: onSubmit,
    square: true,
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Add.default, {
      fontSize: "large",
      sx: {
        marginRight: '16px'
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputBase, {
      placeholder: placeholder,
      onChange: onChange,
      value: value
    })]
  });
};

exports.TextInput = TextInput;