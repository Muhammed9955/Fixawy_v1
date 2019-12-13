import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({
  getProfiles,
  profile: { profiles, loading },
  createRepairmanProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    city: '',
    district: '',
    jobTitle: ''
  });
  const [searchData, setSearchData] = useState({
    filtredArr: []
  });
  const { filtredArr } = searchData;
  const { city, district, address, IDNumber, age, jobTitle } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    // createRepairmanProfile(formData, history);
    // filtredArr = Search(formData);
  };

  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  //Search Function
  let invalidEntries = 0;
  const Search = item => {
    if (
      item.jobTitle !== 0 &&
      typeof item.jobTitle !== 'undefined' &&
      item.jobTitle == 'Plumber' &&
      (item.city !== 0 &&
        typeof item.city !== 'undefined' &&
        item.city == 'cairo') &&
      (item.district !== 0 &&
        typeof item.district !== 'undefined' &&
        item.district == 'Maddi')
    ) {
      return true;
    }
    invalidEntries++;
    return false;
  };

  // let filtredArr = formData.filter(Search);
  // let filtredArr = [];

  //=====================================================

  console.log(loading);
  console.log(profiles);
  return (
    // onSubmit={e => onSubmit(e)}
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large ">Search for a provider</h1>
          <form className="ui form" onSubmit={e => onSubmit(e)}>
            <div class="ui equal width grid">
              <div class="column">
                <div className="field">
                  <label> City</label>
                  <select
                    className="ui search dropdown"
                    multiple=""
                    name="city"
                    value={city}
                    onChange={e => onChange(e)}
                  >
                    <option> *City</option>
                    <option value="">Cairo</option>
                    <option value="">City</option>
                  </select>
                </div>
              </div>
              <div class="column">
                <div class="column">
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
                      <option value="New Heliopolis City">
                        New Heliopolis City
                      </option>
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
                </div>
              </div>
              <div class="column">
                <div class="column">
                  <div className="field">
                    <label> Job category</label>
                    <select
                      className="ui search dropdown"
                      multiple=""
                      className="ui search dropdown"
                      multiple=""
                      name="jobTitle"
                      value={jobTitle}
                      onChange={e => onChange(e)}
                    >
                      <option>*Job</option>
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
                      <option value="Satellite Techbician">
                        Satellite Tech
                      </option>
                      <option value="Solar Cells">Solar Cells</option>
                      <option value="Marble and Granite">
                        Marble and Granite
                      </option>
                      <option value="Parquet Floors">Parquet Floors</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="column">
                <input type="submit" className="ui button black" />
              </div>
            </div>
          </form>

          <h1 className="large text-primary">Providers</h1>

          <p className="lead">
            <i className="fa fa-hammer" /> Browse Providers
          </p>
          {profiles.filter(Search) ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          )}
        </Fragment>
      )}
      {console.log(filtredArr)}
      {console.log(profiles)}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
