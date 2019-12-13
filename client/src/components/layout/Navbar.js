import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout
  // profile: {
  //   profile: {
  //     user: { _id }
  //   }
  // }
  // profile: {
  //   user: { _id }
  // }
}) => {
  const authLinks = (
    <Fragment>
      <div class="right menu">
        <Link class="item" to="/profiles">
          <i class="fas fa-wrench fa-lg mx-rt-1"> </i>
          Find Profider
        </Link>
        <Link class="item" to="/order-dashboard">
          <i class="fas fa-shopping-cart fa-lg mx-rt-1"> </i>
          Orders
        </Link>
        {/* <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link> */}
        {/* <Link class="item" to={`/profile/${_id}`}>
          <i class="fas fa-user fa-lg mx-rt-1"> </i>
          Profile
        </Link>{' '} */}
        <Link onClick={logout} class=" item" to="/">
          <i class="fas fa-sign-out-alt mx-rt-1"></i>
          Logout
        </Link>
      </div>
    </Fragment>
  );
  const style = { marginRight: 1 + 'em' };
  const guestLinks = (
    <div class="right menu">
      {' '}
      <Link class="green item" to="/login">
        <i class="ui icon sign-in meduim "></i>
        Sign In
      </Link>
      <Link class="item" to="/register">
        <i class="ui icon user plus meduim "></i>
        Sign Up
      </Link>
    </div>
  );

  return (
    <div>
      <nav className="ui huge inverted menu na">
        <div>
          <Link class="item" to="/">
            <i class="fas fa-tools fa-2x " style={style}>
              {' '}
            </i>
            Fixawy
          </Link>
        </div>
        {/* <Fragment>{guestLinks}</Fragment> */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
