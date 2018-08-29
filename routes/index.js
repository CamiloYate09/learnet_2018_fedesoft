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

module.exports = router;
