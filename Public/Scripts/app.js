'use strict';

var app = {
  title: 'Visivility Toggle',
  TextVisible: false,
  options: []
};

var toggleText = function toggleText() {

  app.TextVisible = !app.TextVisible;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {

  var optionsLI = app.options.map(function (item) {
    return React.createElement(
      'li',
      null,
      item
    );
  });

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggleText },
      app.TextVisible ? 'Hide Details' : 'Show Details'
    ),
    app.TextVisible && React.createElement(
      'p',
      null,
      'Details'
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
