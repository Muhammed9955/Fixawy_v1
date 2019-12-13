import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import OrderItem from './OrderItem';
import { getOrders } from '../../actions/order';
import { Link } from 'react-router-dom';

const Orders = ({ getOrders, order: { orders, loading } }) => {
  useEffect(() => {
    getOrders();
  }, [getOrders]);
  console.log(loading);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div class="ui container">
            <h1 className="large text-primary">Orders</h1>

            <p>Details:{orders.problemDetails}</p>
          </div>
          {console.log(orders)}
        </Fragment>
      )}
    </Fragment>
  );
};

Orders.propTypes = {
  getOrders: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  order: state.order
});

export default connect(
  mapStateToProps,
  { getOrders }
)(Orders);
