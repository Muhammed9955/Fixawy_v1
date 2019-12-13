import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, phoneNumber },
    address,
    age,
    city,
    district,
    jobTitle
  }
}) => {
  return (
    <div className="profile bg-light">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
        className="round-img"
      />
      <div>
        <h1>Job :{jobTitle}</h1>
        <h3>Name: {name}</h3>
        <p>City: {city}</p>
        <p>District: {district}</p>

        <Link to={`/profile/${_id}`} className="ui button black">
          View Profile
        </Link>
        <Link to={`/order/user/${_id}`} className="ui button">
          Make Order
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
