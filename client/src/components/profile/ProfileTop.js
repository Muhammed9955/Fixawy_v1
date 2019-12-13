import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    address,
    age,
    city,
    district,
    jobTitle,
    user: { name }
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img
        className="round-img my-1"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
      />
      <h1 className="large">{name}</h1>
      <h2> Job: {jobTitle} </h2>

      <p> city: {city} </p>
      <p> district: {district} </p>
      <p> age: {age} </p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
