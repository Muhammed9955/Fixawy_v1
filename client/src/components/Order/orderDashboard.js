import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const OrderDashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="ui segment">
        <h1 className="ui huge dividing header">Orders Page</h1>
        <p className="ui meduim header">
          <i className="ui icon meduim user" /> Welcome {user && user.name}
        </p>

        <Fragment>
          {/* <DashboardActions /> */}

          <div className=" ui my-2 centered">
            <Link to="create-order" className="ui button samll blue ">
              <i className="fas fa-user-circle mx-rt-1" />
              Make New order
            </Link>
            <div></div>
            <Link to="/NewClientOrders" className="ui button  samll">
              <i className="fas fa-user-circle mx-rt-1" />
              View new Client orders
            </Link>
            <Link to="" className="ui button black samll">
              <i className="fas fa-user-circle mx-rt-1" />
              View Ended Client orders
            </Link>
            <Link to="" className="ui button samll">
              <i className="fas fa-gavel mx-rt-1" />
              New Provider orders
            </Link>
            <Link to="" className="ui button black samll">
              <i className="fas fa-gavel mx-rt-1" />
              Ended Provider orders
            </Link>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

OrderDashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(OrderDashboard);
