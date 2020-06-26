const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create UserSchema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  coins: {
    type: Number,
    default: 0
  },
  happiness: {
    type: Number,
    default: 50
  },
  totalHappinessGained: {
    type: Number, 
    default: 0
  },
  tasks: {
    type: Number, 
    default: 0
  },
  subTasks: {
    type: Number, 
    default: 0
  },
  dateGuessed: {
    type: Date,
    default: new Date(0)
  }
});

module.exports = User = mongoose.model("users", UserSchema);
