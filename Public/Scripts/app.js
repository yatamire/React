'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Indecision'
        ),
        React.createElement(
          'h2',
          null,
          'Sub Title'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      this.optionsLI = this.options.map(function (item) {
        return React.createElement(
          'li',
          null,
          item
        );
      });
      return React.createElement(
        'div',
        null,
        React.createElement(
          'ol',
          null,
          this.optionsLI
        ),
        React.createElement(
          'form',
          { onSubmit: this.addOptions },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  function Option() {
    _classCallCheck(this, Option);

    var _this2 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this));

    _this2.options = [];
    _this2.addOptions = function (e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      if (option) {
        _this2.options.push(option);
        e.target.elements.option.value = '';
      }
      _this2.render();
    };
    return _this2;
  }

  return Option;
}(React.Component);

var jsx = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Title'
  ),
  React.createElement(Header, null),
  React.createElement(Option, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
