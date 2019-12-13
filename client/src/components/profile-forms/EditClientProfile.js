import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createClinetProfile, getCurrentProfile } from '../../actions/profile';

const Createprofile = ({
  createClinetProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: ''
  });
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { name, phoneNumber } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createClinetProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);

  const style = { backGround: ' whitesmoke' };

  return loading && profile === null ? (
    <Redirect to="/dashboard" />
  ) : (
    <Fragment>
      <h1 className="ui center aligned header ">Create your Profile</h1>
      <Link className="ui button  " to="/dashboard">
        Go Back
      </Link>
      {/* personal info */}
      <div className="ui segment" style={style}>
        <h3 className="ui center aligned dividing header  ">
          Personal Information:
        </h3>
        <form className="ui form" onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label> Name</label>
            <input
              type="text"
              placeholder="Ali"
              name="name"
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="01100214545"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="ui button black" />
        </form>
      </div>
    </Fragment>
  );
};

Createprofile.propTypes = {
  createClinetProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createClinetProfile, getCurrentProfile }
)(withRouter(Createprofile));
