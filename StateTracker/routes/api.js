var express = require('express');
var router = express.Router();

/* POST  */
router.post('/setStatus', function(req, res) {
  var status = req.body.status;
  res.send(status);
    console.log(status);

});


router.get('/', function(req, res) {
 // var status = req.params.status;
 // res.json('{status : '+ status + '}');
    res.send("hi");
});

module.exports = router;
