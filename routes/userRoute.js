const router = require('express').Router();

const User = require('../models/userModel')
const controler = require('../controller/userController')
const verify  = require("../verifytoken")
router.post('/register', function(req, res) {
    controler.sav(req, res);
  });
  router.post('/login', function(req, res) {
    controler.logi(req, res);
  });
  router.get('/data', verify,function(req, res) {
    controler.data(req, res);
  });
module.exports = router;