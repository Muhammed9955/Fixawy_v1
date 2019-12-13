import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import EditClientProfile from '../profile-forms/EditClientProfile';
import CreatRepairmanProfile from '../profile-forms/CreatRepairmanProfile';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Orders from '../Order/Orders';
import OrderDashboard from '../Order/orderDashboard';
import CreateOrder from '../Order/CreateOrder';
import NewClientOrders from '../Order/NewClientOrders';
import OrderItemPage from '../Order/OrderItemPage';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/OrderItemPage" component={OrderItemPage} />
        <Route exact path="/NewClientOrders" component={NewClientOrders} />
        <Route exact path="/order-dashboard" component={OrderDashboard} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-order" component={CreateOrder} />
        <PrivateRoute
          exact
          path="/create-user-profile"
          component={EditClientProfile}
        />
        <PrivateRoute
          exact
          path="/create-repairman-profile"
          component={CreatRepairmanProfile}
        />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
