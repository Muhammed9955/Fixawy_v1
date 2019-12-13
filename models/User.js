const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  // gender: {
  //   type: String
  //   // required: true
  // },
  password: {
    type: String,
    required: true
  },
  clientNewOrders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
      }
    }
  ],
  clientEndedOrders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
      }
    }
  ],
  repairmanNewOrders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
      }
    }
  ],
  repairmanEndedOrders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
