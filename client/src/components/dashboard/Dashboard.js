import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';

import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="ui segment">
        <h1 className="ui huge dividing header">Profile Page</h1>
        <p className="ui meduim header">
          <i className="ui icon meduim user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            {/* <DashboardActions /> */}

            <div className="my-2">
              <Link to="create-user-profile" className="ui button samll">
                <i className="fas fa-user-circle mx-rt-1" />
                Edit your client Profile
              </Link>
              <Link
                to="/create-repairman-profile"
                className="ui meduim button "
              >
                <i className="fas fa-hammer mx-rt-1" />
                Edit Profider Profile
              </Link>
              <button
                class=" "
                className="ui button red samll "
                onClick={() => deleteAccount()}
              >
                <i className="fas fa-user-minus mx-rt-1" /> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="create-user-profile" className="ui meduim button ">
              Edit your client Profile
            </Link>
            <Link
              to="/create-repairman-profile"
              className="ui meduim button black"
            >
              Create Profider Profile
            </Link>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
