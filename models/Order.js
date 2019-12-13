const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  repairman: {
    type: Schema.Types.ObjectId,
    ref: 'profile'
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  problemDetails: {
    type: String,
    required: true
  },
  workingDuration: {
    type: String,
    required: true
  },
  workingDuration: {
    type: String
    // required: true
  },
  vistDate: {
    type: String,
    required: true
  },
  vistTime: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('order', ProfileSchema);
