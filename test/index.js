const Button = require('../dist').Button
const cn = require('classnames')
const React = require('react')
const ReactDOM = require('react-dom')

console.log(Button)

ReactDOM.render(
  <Button mode="primary">
    Test
  </Button>,
  document.getElementById('reactContainer')
)
