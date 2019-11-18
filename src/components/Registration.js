import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setNameText,
  setEmailText,
  setPasswordText,
  setConfirmPasswordText
} from '../store/actions/registrationAction';

class Registration extends Component {
  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      onNameChange,
      onEmailChange,
      onPasswordChange,
      onConfirmPasswordChange
    } = this.props;
    return (
      <div>
        <h1>Please Register:</h1>
        <br />
        <form>
          <div>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={onNameChange}
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              name='login'
              placeholder='Email'
              value={email}
              onChange={onEmailChange}
            />
          </div>
          <br />
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <br />
          <div>
            <input
              type='password'
              name='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
            />
          </div>
          <div>
            <br />
            <br />
            <button type='button'>SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.registration.name,
  email: state.registration.email,
  password: state.registration.password,
  confirmPassword: state.registration.confirmPassword
});

const mapDispatchToProps = dispatch => ({
  onNameChange: e => dispatch(setNameText(e.target.value)),
  onEmailChange: e => dispatch(setEmailText(e.target.value)),
  onPasswordChange: e => dispatch(setPasswordText(e.target.value)),
  onConfirmPasswordChange: e => dispatch(setConfirmPasswordText(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
