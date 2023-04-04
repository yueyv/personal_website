var express = require('express');
// const useControllerUser = require('../controllers/user');
const useControllerNote = require('../controllers/note');
const useControllerUser = require('../controllers/user');
const useControllerStyle = require('../controllers/style');
var router = express.Router();
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/get_user', useControllerUser.showUser)
/* GET home page. */
router.get('/get_note', useControllerNote.showNote)

router.get('/get_style', useControllerStyle.showStyle)

router.post('/login',useControllerUser.login)
module.exports = router;
