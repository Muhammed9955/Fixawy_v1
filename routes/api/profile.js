const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/RepairmanProfile');
const User = require('../../models/User');

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// User profile
// @route    POST api/profile/user
// @desc     Create or update user profile
// @access   Private User Profile
router.post(
  '/user',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check(
        'phoneNumber',
        'Please include a valid Phone number'
      ).isMobilePhone()
      // check('gender', 'Gender is required')
      //   .not()
      //   .isEmpty()
      // check(
      //   'password',
      //   'Please enter a password with 6 or more characters'
      // ).isLength({ min: 6 }),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, password, phoneNumber, gender } = req.body;

    // Build profile object
    const profileFields = {};
    if (name) profileFields.name = name;
    if (phoneNumber) profileFields.phoneNumber = phoneNumber;
    if (gender) profileFields.gender = gender;

    try {
      // const salt = await bcrypt.genSalt(10);
      // user.password = await bcrypt.hash(password, salt);

      // Using upsert option (creates new doc if no match is found):
      let user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      ).select('-password');

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// RepairMan profile
// @route    POST api/profile/Repairman
// @desc     Create or update user profile
// @access   Private Repairman Profile
router.post(
  '/repairman',
  [
    auth,
    [
      check('city', 'city is required')
        .not()
        .isEmpty(),
      // check('district', 'District is required')
      //   .not()
      //   .isEmpty(),
      check('address', 'Address is required')
        .not()
        .isEmpty(),
      check('IDNumber', 'IDNumber is required , should be unique and 14 digits')
        .isNumeric()
        .isLength({ min: 14, max: 14 }),
      check('age', 'Age is required')
        .isNumeric()
        .isLength({ min: 2 }),
      check('jobTitle', 'JobTitle is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { city, district, address, IDNumber, age, jobTitle } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (city) profileFields.city = city;
    if (district) profileFields.district = district;
    if (address) profileFields.address = address;
    if (IDNumber) profileFields.IDNumber = IDNumber;
    if (age) profileFields.age = age;
    if (jobTitle) profileFields.jobTitle = jobTitle;

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      // console.log(profile.user);
      // console.log(req.user.id);
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(400).json({ msg: 'IDNumber is not correct' });
      }
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', [
      'name',
      'phoneNumber'
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
