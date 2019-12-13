import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  createRepairmanProfile,
  getCurrentProfile
} from '../../actions/profile';
const City = '';
const Createprofile = ({
  createRepairmanProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    address: '',
    IDNumber: '',
    age: '',
    jobTitle: ''
  });
  const { city, district, address, IDNumber, age, jobTitle } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    createRepairmanProfile(formData, history);
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
            <label>IDNumber</label>
            <input
              type="text"
              placeholder="24695847565856"
              name="IDNumber"
              value={IDNumber}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <label> age</label>
            <input
              type="text"
              placeholder="25"
              name="age"
              value={age}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="field">
            <label>Job Category</label>
            <select
              name="jobTitle"
              value={jobTitle}
              onChange={e => onChange(e)}
            >
              <option>* Select Job </option>
              <option value="Electrican">Electrican</option>
              <option value="Plumber">Plumber</option>
              <option value="Painting Works ">Painting Works </option>
              <option value="Tiling Works">Tiling Works</option>
              <option value="Plaster Works">Plaster Works</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Air Conditioning Techbician">
                Air Conditioning Techbician
              </option>
              <option value="Refrigerators Techbician">
                Refrigerators Techbician
              </option>
              <option value="Washing Machines Techbician">
                Washing Machines Techbician
              </option>
              <option value="Gypusm Board">Gypusm Board</option>
              <option value="Satellite Techbician">Satellite Tech</option>
              <option value="Solar Cells">Solar Cells</option>
              <option value="Marble and Granite">Marble and Granite</option>
              <option value="Parquet Floors">Parquet Floors</option>
              <option value="other">other</option>
            </select>
          </div>
          <input type="submit" className="ui button black" />
        </form>
      </div>
    </Fragment>
  );
};

Createprofile.propTypes = {
  createRepairmanProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createRepairmanProfile, getCurrentProfile }
)(withRouter(Createprofile));
