const mongoose = require("../data/mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  nickname: String,
  message: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
