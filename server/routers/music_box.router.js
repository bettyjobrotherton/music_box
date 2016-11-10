var express = require('express');
var router = express.Router();
var MusicBox = require('../models/music_box.model.js');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get();
router.get();

router.post();

router.put();

router.delete();

module.exports = router;
