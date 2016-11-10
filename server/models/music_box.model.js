var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musicBoxSchema = new Schema ({
  title: {
    type: String,
    required: true
  },

  artist: {
    type: String,
    required: true
  },

  releaseDate: {
    type: Date,
    required: false
  },

  isGood: {
    type: Boolean,
    required: false
  }
});

var MusicBox = mongoose.model('MusicBox', musicBoxSchema);

module.exports = MusicBox;
