const Button = require('../dist').Button
const Input = require('../dist').Input
const FormGroup = require('../dist').FormGroup
const Form = require('../dist').Form
const cn = require('classnames')
const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
  <div>
    <Button mode="primary">
      Test
    </Button>
    <br />
    <br />
    <Form>
      <FormGroup>
        <Input type="text" />
      </FormGroup>
    </Form>
  </div>,
  document.getElementById('reactContainer')
)
