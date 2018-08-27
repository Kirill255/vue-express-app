const mongoose = require("../data/mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  room_name: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
