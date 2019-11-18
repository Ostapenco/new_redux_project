import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../store/actions/addUserAction';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { name, email, password, confirmPassword } = this.state;

    const user = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    this.props.onAddNewUser(user);
  }

  render() {
    const { name, email, password, confirmPassword } = this.state;
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
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
            />
          </div>
          <br />
          <div>
            <input
              type='text'
              name='login'
              placeholder='Email'
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
          </div>
          <br />
          <div>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
            />
          </div>
          <br />
          <div>
            <input
              type='password'
              name='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={e =>
                this.setState({
                  confirmPassword: e.target.value
                })
              }
            />
          </div>
          <div>
            <br />
            <br />
            <button type='button' onClick={this.onSubmit}>
              SIGN UP
            </button>
          </div>
        </form>
        <div>
          <h3>User count: {this.props.userList.length}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.userList.arr
});

const mapDispatchToProps = dispatch => ({
  onAddNewUser: user => dispatch(addNewUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
