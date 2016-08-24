
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');

//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var threaterSchema = mongoose.Schema({
	threaterName:String,
  threaterLoc:String,
 seating:String,
 ShowTime:String
  });

 //$scope.selected = $scope.options[0];
var Threater = mongoose.model('Threater', threaterSchema, 'threater');



//Master
  router.get('/threater', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Threater.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/threater/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Threater.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/threater', function(req, res){
  console.log(req.body);
  var name = req.body.threaterName;
  var loc=req.body.threaterLoc;
  var seat=req.body.seating;
  var time=req.body.ShowTime;
  var threater = new Threater({
    threaterName:name,
    threaterLoc:loc,
    seating:seat,
    ShowTime:time,
  });

  threater.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/threater/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Threater.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/threater/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Threater.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
