import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import OrderItem from './OrderItem';
import { getOrders } from '../../actions/order';

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
          <h1 className="large text-primary">Orders</h1>
          <div className="profiles">
            {orders.length > 0 ? (
              orders.map(order => <OrderItem key={order._id} order={order} />)
            ) : (
              <h4>No Orders found...</h4>
            )}
          </div>
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
