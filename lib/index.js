'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toaster = exports.ToastContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../index.css');

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerDomNode = null;

var ToastContainer = function (_Component) {
  _inherits(ToastContainer, _Component);

  function ToastContainer() {
    _classCallCheck(this, ToastContainer);

    return _possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).apply(this, arguments));
  }

  _createClass(ToastContainer, [{
    key: 'showToast',
    value: function showToast(type, toastMsg) {
      var x = document.getElementById("toaster");
      var msgbox = document.getElementById("toastmsg");
      var wibar = document.getElementById("myProgress");
      var elem = document.getElementById("myBar");
      var iplace = document.getElementById("iconplace");
      if (type == 1) {
        msgbox.innerHTML = toastMsg;
        x.className = "successtoast";
        elem.className = "successbar";
        wibar.className = "successpg";
        iplace.innerHTML = '<i class="far fa-check-circle fa-2x"></i>';
      } else if (type == 2) {
        msgbox.innerHTML = toastMsg;
        x.className = "warningtoast";
        elem.className = "warningbar";
        wibar.className = "warningpg";
        iplace.innerHTML = '<i class="fas fa-exclamation-triangle fa-2x"></i>';
      } else if (type == 3) {
        wibar.className = "errorpg";
        msgbox.innerHTML = toastMsg;
        x.className = "errortoast";
        elem.className = "errorbar";
        iplace.innerHTML = '<i class="far fa-times-circle fa-2x"></i>';
      } else {
        wibar.className = "infopg";
        msgbox.innerHTML = toastMsg;
        x.className = "infotoast";
        elem.className = "infobar";
        iplace.innerHTML = '<i class="fas fa-info-circle fa-2x"></i>';
      }

      var width = 100;
      var id = setInterval(frame, 30);
      function frame() {
        if (width < 1) {
          clearInterval(id);
          if (type == 1) {
            x.className = x.className.replace("successtoast", "");
          } else if (type == 2) {
            x.className = x.className.replace("warningtoast", "");
          } else if (type == 3) {
            x.className = x.className.replace("errortoast", "");
          } else {
            x.className = x.className.replace("infotoast", "");
          }
        } else {
          width--;
          elem.style.width = width + '%';
        }
      }
    }
  }, {
    key: 'success',
    value: function success(content) {
      containerDomNode = document.createElement('div');
      this.showToast(1, content);
      (0, _reactDom.render)(_react2.default.createElement(ToastContainer, { message: content }), containerDomNode);
    }
  }, {
    key: 'warning',
    value: function warning(content) {
      containerDomNode = document.createElement('div');
      this.showToast(2, content);
      (0, _reactDom.render)(_react2.default.createElement(ToastContainer, { message: content }), containerDomNode);
    }
  }, {
    key: 'error',
    value: function error(content) {
      containerDomNode = document.createElement('div');
      this.showToast(3, content);
      (0, _reactDom.render)(_react2.default.createElement(ToastContainer, { message: content }), containerDomNode);
    }
  }, {
    key: 'info',
    value: function info(content) {
      containerDomNode = document.createElement('div');
      this.showToast(4, content);
      (0, _reactDom.render)(_react2.default.createElement(ToastContainer, { message: content }), containerDomNode);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { id: 'toaster' },
        _react2.default.createElement('span', { className: 'toast-icon', id: 'iconplace' }),
        _react2.default.createElement('p', { id: 'toastmsg', className: 'msg' }),
        _react2.default.createElement(
          'div',
          { id: 'myProgress' },
          _react2.default.createElement('div', { id: 'myBar' })
        )
      );
    }
  }]);

  return ToastContainer;
}(_react.Component);

var Toaster = new ToastContainer();
exports.ToastContainer = ToastContainer;
exports.Toaster = Toaster;
