import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    phoneNumber: '',
    password: '',
    password2: ''
  });

  const { name, gender, phoneNumber, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, gender, phoneNumber, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="ui larg">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user-circle" /> Create Your Account
      </p>
      <form className="ui form" onSubmit={e => onSubmit(e)}>
        <div className="field">
          <input
            type="text"
            placeholder="Ali"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="01100214545"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => onChange(e)}
          />
        </div>
        {/* <div className="field">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">male</option>
            <option value="0">female</option>
          </select>
        </div> */}

        {/* <div className="inline  fields">
          <label>Gender</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                id="1"
                type="radio"
                name="gender"
                value={gender}
                checked="checked"
                onChange={e => onChange(e)}
              />
              <label>Male</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                id="2"
                type="radio"
                value={gender}
                name="gender"
                onChange={e => onChange(e)}
              />
              <label>Female </label>
            </div>
          </div>
        </div> */}
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="ui button black" value="Register" />
      </form>
      <p className="my-1">
        Already have an account?{' '}
        <Link className="ui button mini" to="/login">
          Sign In
        </Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
