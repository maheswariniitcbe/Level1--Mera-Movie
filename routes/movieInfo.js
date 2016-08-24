var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }))


var mongoose = require('mongoose');
//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var movieinfoSchema=mongoose.Schema({
    Title:String,
    showTime:String,
    City:String,
    Name:String,
});


var MovieInfo=mongoose.model('MovieInfo',movieinfoSchema,'movieinfo');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

router.get('/movieinfo', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    MovieInfo.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});


router.get('/movieinfo/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     MovieInfo.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});


router.post('/movieinfo', function(req, res){
  console.log(req.body);

    var title = req.body.Title;

    var sht=req.body.showTime;
    var name = req.body.City;
    var shp=req.body.Name;
   var movieinfo = new MovieInfo({
    Title:title,
    showTime:sht,
   City:name,
    Name:shp
  });

 movieinfo.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/movieinfo/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      MovieInfo.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/movieinfo/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    MovieInfo.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
