
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');


// var dbHost = 'mongodb://localhost:27017/test';
// mongoose.connect(dbHost);




var citySchema = mongoose.Schema({
  cityId:String,
    cityName: String,
    // cityRating:String
 });
var City = mongoose.model('City', citySchema, 'city');



//Master
  router.get('/city', function (req, res) {
    console.log("REACHED city GET FUNCTION ON SERVER");
    City.find({}, function (err, docs) {
         res.json(docs);
    });
});


router.get('/city/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     City.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/city', function(req, res){
  console.log(req.body);
  var id = req.body.cityId;
  var name = req.body.cityName;
  var rating= req.body.cityRating
  var city = new City({
    cityId : id,
   cityName:name,
   cityRating:rating
  });

  city.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/city/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      City.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/city/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    City.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
