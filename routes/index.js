var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Learnet'});
});

//ruta para login
router.get('/Login', function (req, res, next) {
    res.render('Login', {title: 'Login'});
});

//ruta para registrarse
//UserRegister
router.get('/UserRegister', function (req, res, next) {
    res.render('UserRegister', {title: 'UserRegister'});
});

//ForumMenu
router.get('/ForumMenu', function (req, res, next) {
    res.render('ForumMenu', {title: 'ForumMenu'});
});

//ForumView
router.get('/ForumView', function (req, res, next) {
    res.render('ForumView', {title: 'ForumView'});
});

//animation1
router.get('/animation1', function (req, res, next) {
    res.render('animation1', {title: 'animation1'});
});

module.exports = router;
