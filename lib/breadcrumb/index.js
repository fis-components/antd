'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadcrumbItem = _react2.default.createClass({
  displayName: 'BreadcrumbItem',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-breadcrumb',
      separator: '/'
    };
  },

  propTypes: {
    prefixCls: _react2.default.PropTypes.string,
    separator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    href: _react2.default.PropTypes.string
  },
  render: function render() {
    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var separator = _props.separator;
    var children = _props.children;

    var link = _react2.default.createElement(
      'a',
      _extends({ className: prefixCls + '-link' }, this.props),
      children
    );
    if (typeof this.props.href === 'undefined') {
      link = _react2.default.createElement(
        'span',
        _extends({ className: prefixCls + '-link' }, this.props),
        children
      );
    }
    return _react2.default.createElement(
      'span',
      null,
      link,
      _react2.default.createElement(
        'span',
        { className: prefixCls + '-separator' },
        separator
      )
    );
  }
});

var Breadcrumb = _react2.default.createClass({
  displayName: 'Breadcrumb',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-breadcrumb',
      separator: '/'
    };
  },

  propTypes: {
    prefixCls: _react2.default.PropTypes.string,
    separator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
    routes: _react2.default.PropTypes.array,
    params: _react2.default.PropTypes.object
  },
  render: function render() {
    var crumbs = void 0;
    var _props2 = this.props;
    var separator = _props2.separator;
    var prefixCls = _props2.prefixCls;
    var routes = _props2.routes;
    var params = _props2.params;
    var children = _props2.children;

    if (routes && routes.length > 0) {
      (function () {
        var paths = [];
        crumbs = routes.map(function (route, i) {
          if (!route.breadcrumbName) {
            return null;
          }
          var name = route.breadcrumbName.replace(/\:(.*)/g, function (replacement, key) {
            return params[key] || replacement;
          });

          var link = void 0;
          var path = route.path.replace(/^\//, '');
          Object.keys(params).forEach(function (key) {
            path = path.replace(':' + key, params[key]);
          });
          if (path) {
            paths.push(path);
          }

          if (i === routes.length - 1) {
            link = _react2.default.createElement(
              'span',
              null,
              name
            );
          } else {
            link = _react2.default.createElement(
              'a',
              { href: '#/' + paths.join('/') },
              name
            );
          }
          return _react2.default.createElement(
            BreadcrumbItem,
            { separator: separator, key: name },
            link
          );
        });
      })();
    } else {
      crumbs = _react2.default.Children.map(children, function (element, index) {
        return (0, _react.cloneElement)(element, {
          separator: separator,
          key: index
        });
      });
    }
    return _react2.default.createElement(
      'div',
      { className: prefixCls },
      crumbs
    );
  }
});

Breadcrumb.Item = BreadcrumbItem;
exports.default = Breadcrumb;
module.exports = exports['default'];