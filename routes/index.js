var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Handle the Form */
router.post('/form', function (req, res) {

  var response = {
    header: req.headers,
    body: req.body
  };

  req.body.numTickets = parseInt(req.body.numTickets);
  db.getCollection("bookings").insert(req.body);

  res.json(response);
});