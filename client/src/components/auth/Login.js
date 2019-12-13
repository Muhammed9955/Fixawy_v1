import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });

  const { phoneNumber, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(phoneNumber, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="ui large">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user-circle"></i> Sign In Your Account
      </p>
      <form className="ui form" onSubmit={e => onSubmit(e)}>
        <div className="field">
          <input
            type="text"
            placeholder="01100214578"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="ui button black" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account?{' '}
        <Link className="ui button mini" to="/register">
          Sign Up
        </Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
