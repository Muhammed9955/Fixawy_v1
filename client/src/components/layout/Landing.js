import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <div class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Welcome To Fixawy</h1>
            <p class="lead">
              Fixawy The First Repairmen Application in Egypt Fixawy is the
              biggest repairmen network in Egypt
            </p>
            <div class="buttons">
              <Link to="/register" class="ui black huge button">
                Sign Up
              </Link>
              <Link to="/login" class="ui button huge">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
