import React from 'react'
import Formsy from 'formsy-react'

const MyInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue(event) {
    this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value'])
  },
  render() {
    const className = 'form-group' + (this.props.className || ' ') + (this.showRequired() ? 'required' : this.showError() ? 'error' : null)
    const errorMessage = this.getErrorMessage();

    const value = this.getValue() || ''

    return (
      <div className={className}>
        <label className="col-sm-2 control-label" htmlFor={this.props.name}>{this.props.title}</label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type={this.props.type || 'text'}
            name={this.props.name}
            onChange={this.changeValue}
            value={value}
            checked={this.props.type === 'checkbox' && value ? 'checked' : null}
          />
        </div>
        <span className='validation-error col-sm-offset-2 col-sm-10'>{errorMessage}</span>
      </div>
    );
  }
})

export default MyInput
