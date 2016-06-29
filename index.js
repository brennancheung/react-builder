function ClickMe (props) {
  return React.createElement('button', {}, 'Click me')
}

var root =
  React.createElement('div', {},
    React.createElement(ClickMe, {}))

ReactDOM.render(root, document.getElementById('app'))
