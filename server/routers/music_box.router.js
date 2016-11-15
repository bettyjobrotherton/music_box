var express = require('express');
var router = express.Router();
var MusicBox = require('../models/music_box.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/albums', function(req, res){
  MusicBox.find({}, function(err, foundMusic){
    if(err){
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        albums: foundMusic
      });
    }
  });
});
router.get('/albums/:id', function(req, res){
  MusicBox.find({_id: req.params.id}, function(err, foundMusic){
    if(err){
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        album: foundMusic
      });
    }
  });
});

router.post('/albums', function(req, res){
  var musicBox = new MusicBox(req.body);
  musicBox.save(function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        msg: 'New album successfully created!'
      });
    }
  });
});

router.put('/albums/:id', function(req, res){
  MusicBox.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        msg: 'Album has been updated.'
      });
    }
  });
});

router.delete('/albums/:id', function(req, res){
  MusicBox.findOneAndRemove({_id: req.params.id}, function(err, deletedMusic){
    if(err){
      res.status(500).json({
        err: err
      });
    } else {
      res.status(200).json({
        msg: 'The following album has been deleted:  ' + deletedMusic
      });
    }
  });
});

module.exports = router;
