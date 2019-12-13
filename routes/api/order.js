const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// const Profile = require('../../models/RepairmanProfile');
const User = require('../../models/User');
const Order = require('../../models/Order');

// @route    GET api/order
// @desc     Get current user order
// @access   Private
router.get('/user', auth, async (req, res) => {
  try {
    const order = await Order.findOne({ user: req.user.id })
      .populate('user', ['name', 'phoneNumber'])
      .populate('profile', ['name']);
    if (!order) {
      return res.status(400).json({ msg: 'There is no Order for this user' });
    }

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// User Order
// @route    POST api/oerder/repairman/:repairman_id
// @desc     Create or update user Order
// @access   Private User Order
router.post(
  '/repairman/:repairman_id',
  [
    auth,
    [
      check('city', 'City is required')
        .not()
        .isEmpty(),
      check('district', 'District is required')
        .not()
        .isEmpty(),
      check('address', 'Address is required')
        .not()
        .isEmpty(),
      check('problemDetails', 'Problem Details is required')
        .not()
        .isEmpty(),
      check('vistDate', 'Vist Date is required')
        .not()
        .isEmpty(),
      check('vistTime', 'Vist Time is required')
        .not()
        .isEmpty()
      // check('workingDuration', 'Working Duration is required')
      //   .not()
      //   .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      problemDetails,
      city,
      district,
      address,
      vistDate,
      vistTime
    } = req.body;

    // Build profile object
    const profileFields = {};
    if (city) profileFields.city = city;
    if (district) profileFields.district = district;
    if (address) profileFields.address = address;
    if (problemDetails) profileFields.problemDetails = problemDetails;
    if (vistDate) profileFields.vistDate = vistDate;
    if (vistTime) profileFields.vistTime = vistTime;
    // if (workingDuration) profileFields.workingDuration = workingDuration;

    try {
      // Using upsert option (creates new doc if no match is found):
      let order = await Order.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      ).populate('user', ['name', 'phoneNumber']);
      // .populate('repairman', ['jobTitle']);
      const ClientUser = await User.findOne({ _id: req.user.id }).select(
        '-password'
      );
      const RepairmanUser = await User.findOne({
        _id: req.params.repairman_id
      }).select('-password');
      // console.log(user);
      // console.log(order._id);
      console.log(ClientUser._id);
      console.log(RepairmanUser._id);

      // Check if the NewOrder has already been added to both client and repairman
      if (
        ClientUser.clientNewOrders.filter(
          item => item.order.toString() === order._id
        ).length > 0 &&
        RepairmanUser.repairmanNewOrders.filter(
          item => item.order.toString() === order._id
        ).length > 0
      ) {
        return res.status(400).json({ msg: 'Order already added' });
      }

      await order.save();
      ClientUser.clientNewOrders.unshift({ order: order._id });
      RepairmanUser.repairmanNewOrders.unshift({ order: order });
      await ClientUser.save();
      await RepairmanUser.save();
      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/order
// @desc     Get all oerders
// @access   Public
router.get('/all', auth, async (req, res) => {
  try {
    const order = await Order.find()
      //   .populate('user', ['name', 'phoneNumber'])
      .populate('repairman');

    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/order/user/:user_id
// @desc     Get order by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const order = await Order.findOne({
      user: req.params.user_id
    })
      .populate('user', ['name', 'phoneNumber'])
      .populate('profile', ['name']);

    if (!order) return res.status(400).json({ msg: 'Order not found' });

    res.json(order);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Order not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/order
// @desc     Delete order
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    // Remove profile
    await Order.findOneAndRemove({ user: req.user.id });

    res.json({ msg: 'Order deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/oerder/user
// @desc     confirm order
// @access   Private User Order
router.post(
  '/:order_id/confirm',
  [
    auth,
    [
      check('workingDuration', 'Working Duration is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { workingDuration } = req.body;
    // Build profile object
    const profileFields = {};
    if (workingDuration) profileFields.workingDuration = workingDuration;

    try {
      // Using upsert option (creates new doc if no match is found):
      let order = await Order.findOneAndUpdate(
        { _id: req.params.order_id },
        { $set: profileFields },
        { new: true, upsert: true }
      ).populate('user', ['name', 'phoneNumber']);
      // .populate('repairman', ['jobTitle']);

      // console.log(user);
      // console.log(order._id);

      await order.save();
      const clientUserId = order.user._id;
      console.log(clientUserId);
      // Get ClinetUser and RepaimanUser
      const ClientUser = await User.findOne({ _id: clientUserId }).select(
        '-password'
      );
      const RepairmanUser = await User.findOne({
        _id: req.user.id
      }).select('-password');

      ClientUser.clientEndedOrders.unshift({ order: order });
      RepairmanUser.repairmanEndedOrders.unshift({ order: order._id });
      await ClientUser.save();
      await RepairmanUser.save();
      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
