import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createOrder, getCurrentOrder } from '../../actions/order';
const CreateOrder = ({
  createOrder,
  getCurrentOrder,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    address: '',
    problemDetails: '',
    vistDate: '',
    vistTime: ''
  });
  const {
    city,
    district,
    address,
    problemDetails,
    vistDate,
    vistTime
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createOrder(formData, history);
  };
  useEffect(() => {
    getCurrentOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentOrder]);

  const style = { backGround: ' whitesmoke' };

  return loading === null ? (
    <Redirect to="/order-dashboard" />
  ) : (
    <Fragment>
      <h1 className="ui center aligned header ">Create your Profile</h1>
      <Link className="ui button  " to="/order-dashboard">
        Go Back
      </Link>
      {/* personal info */}
      <div className="ui segment" style={style}>
        <h3 className="ui center aligned dividing header  ">
          Personal Information:
        </h3>
        <form className="ui form" onSubmit={e => onSubmit(e)}>
          <div className="field">
            <label> city</label>
            <select
              className="ui search dropdown"
              multiple=""
              name="city"
              value={city}
              onChange={e => onChange(e)}
            >
              <option>* Select City</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexadria">Alexadria</option>
            </select>
            ;
          </div>
          <div className="field">
            <label> District</label>
            <select
              className="ui search dropdown"
              multiple=""
              name="district"
              value={district}
              onChange={e => onChange(e)}
            >
              <option> *District</option>
              <option value="El Shrouk">El Shrouk</option>
              <option value="1st Settlment">1st Settlment</option>
              <option value="Fifth Settlement">Fifth Settlement</option>
              <option value="Madenti">Madenti</option>
              <option value="El Rehab">El Rehab</option>
              <option value="100 of Ramdan">100 of Ramdan</option>
              <option value="Badr City">Badr City</option>
              <option value="New Heliopolis City">New Heliopolis City</option>
              <option value="El Zamalek">El Zamalek</option>
              <option value="Helipolis">Helipolis</option>
              <option value="El Maadi">El Maadi</option>
              <option value="El Mokkatm">El Mokkatm</option>
              <option value="El Mohandsen">El Mohandsen</option>
              <option value="El Shekh Zayed">El Shekh Zayed</option>
              <option value="El Dokki">El Dokki</option>
              <option value="Giza Square">Giza Square</option>
              <option value="El Haram">El Haram</option>
              <option value="Giza Square">Giza Square</option>
              <option value="El Haram">El Haram</option>
              <option value="Fissal">Fissal</option>
              <option value="Shobra">Shobra</option>
              <option value="Obour">Obour</option>
              <option value="El Matareya">El Matareya</option>
              <option value="6th October">6th October</option>
              <option value="Helwan">Helwan</option>
              <option value="Ain Shams">Ain Shams</option>
              <option value="DownTown">DownTown</option>
              <option value="Al-Manyal">Al-Manyal</option>
              <option value="Al-Agouza">Al-Agouza</option>
              <option value="other">other</option>
              <option value="Moharm Bek">Moharm Bek</option>
              <option value="Abou Qeer">Abou Qeer</option>
              <option value="El Hadara">El Hadara</option>
              <option value="El Amreya">El Amreya</option>
              <option value="El Asafra">El Asafra</option>
              <option value="El AzaretaBahari">El AzaretaBahari</option>
              <option value="Bahari">Bahari</option>
              <option value="Burg El Arab">Burg El Arab</option>
              <option value="El Qabary">El Qabary</option>
              <option value="Fleming">Fleming</option>
              <option value="Janklees">Janklees</option>
              <option value="Gleem">Gleem</option>
              <option value="Kafr Abdou">Kafr Abdou</option>
              <option value="Louran">Louran</option>
              <option value="El Mandara">El Mandara</option>
              <option value="Miani">Miani</option>
              <option value="San Stefano">San Stefano</option>
              <option value="Sidi Gaber">Sidi Gaber</option>
              <option value="El Shatbi">El Shatbi</option>
              <option value="Sporting">Sporting</option>
              <option value="Victoria">Victoria</option>
              <option value="Smouha">Smouha</option>
              <option value="Stanly ">Stanly </option>
              <option value="Wabor El Maya">Wabor El Maya</option>
              <option value="El Hanovil">El Hanovil</option>
              <option value="El Bitash">El Bitash</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="field">
            <label> address</label>
            <input
              type="text"
              placeholder="elnobi elmohandi st"
              name="address"
              value={address}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <label>problemDetails</label>
            <input
              type="text"
              placeholder=""
              name="problemDetails"
              value={problemDetails}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <label> vist Date</label>
            <input
              type="text"
              placeholder="12 / 12 /2019"
              name="vistDate"
              value={vistDate}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <select
              className="ui search dropdown"
              multiple=""
              name="district"
              value={district}
              onChange={e => onChange(e)}
            >
              <option> *Select vist Time </option>
              <option value="from 1 PM TO 3 PM ">from 1 PM TO 3 PM </option>
              <option value="form 3 PM TO 5 PM ">form 3 PM TO 5 PM </option>
              <option value="From  5 PM TO 7 PM">From 5 PM TO 7 PM</option>
              <option value="from  7 PM TO 9 PM">from 7 PM TO 9 PM</option>
            </select>
          </div>
          <input type="submit" className="ui button black" />
        </form>
      </div>
    </Fragment>
  );
};

CreateOrder.propTypes = {
  createOrder: PropTypes.func.isRequired,
  getCurrentOrder: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createOrder, getCurrentOrder }
)(withRouter(CreateOrder));
