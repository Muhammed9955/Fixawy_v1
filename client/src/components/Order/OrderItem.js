import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderItem = ({
  order: {
    user: { _id, name, phoneNumber },
    address,
    city,
    district,
    problemDetails,
    vistDate,
    vistTime,
    date
  }
}) => {
  return (
    //
    <div class="ui card centered fluid ">
      <div class="content">
        <div class="header">New Order</div>
        {/* <div class="meta">2 days ago</div> */}
        <div class="description">
          <p>Details: {problemDetails}</p>
          <ul>
            <li>city: {city}</li>
            <li>district: {district}</li>
            <li>vist Date: {vistDate}</li>
            <li>vist Time: {vistTime}</li>
            <li>date: {date}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired
};

export default OrderItem;
