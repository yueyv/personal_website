var express = require('express');
const useController = require('../controllers/user');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get_user', useController.showUser)
/* GET home page. */


module.exports = router;
